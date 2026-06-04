import express from 'express';
import dotenv from 'dotenv';
import swaggerUI from 'swagger-ui-express';
import connectDB from './config/db.js';
import userRoutes from './routes/user.js';
import { ipFilter } from './middleware/ipFilter.js';
import swaggerSpec from './config/swagger.js';
import cors from 'cors';




dotenv.config();
const app = express();

app.use(express.json());
app.use(cors()) // Habilitar CORS para todas las rutas
app.use ('/api/docs',
    swaggerUI.serve,
    swaggerUI.setup(swaggerSpec)
)


app.use(ipFilter);
app.get('/', (req, res) => {
    res.send('API funcionando');
});

app.use('/api/users', userRoutes);

const PORT = process.env.PORT || 3000;

connectDB().then(() => {
    app.listen(PORT, () => {
        console.log(`Escucha desde el puerto ${PORT}`);
    });
});

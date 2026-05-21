const express = require('express')
const app = express();
require ('dotenv').config();

app.get ('/', (req, res) => {
    res.send('Hola mundo');
});

const PORT = process.env.PORT;

app.listen(PORT, () =>{
    console.log(`Escucha desde el puerto ${PORT}`);
})
import jwt from "jsonwebtoken";
import dotenv from "dotenv";
dotenv.config();


const auth = (req, res, next) => {
    const authHeader = req.headers.authorization;
    if (!authHeader ){
        return res.status(401).json({
            message: "No se proporcionó un token de autenticación" });
        }

        const token = authHeader.split(" ")[1];

        if (!token) {
            return res.status(401).json({
            message: "Token de autenticación no válido" });
        }

        try {
            const decoded = jwt.verify(token, process.env.JWT_SECRET);

        }  catch (error){
            return res.status(403).json({
                "message": "token expirado o invwalido"
            
        });
        req.user = decoded;
        next();

}

export default auth;
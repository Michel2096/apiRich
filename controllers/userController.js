import User from "../models/User.js";

export const createUser = async (req, res) => {
    try {
        const { name } = req.body;
        const user = await User.create({ name });
        res.status(201).json({
            message: 'Usuario creado',
            data: user
        });

        // Delimitar error de validación de Mongoose
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const getUsers = async (req, res) => {
    try {
        const users = await User.find();
        res.status(200).json(users);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

import User from "../models/User.js";
import bcrypt from "bcryptjs";
import jwt from "jsonwebtoken";


export const createUser = async (req, res) => {
    try {
        const {
            name, apellidoPaterno, apellidoMaterno, edad,
            email, age, isActive, roles, address, birthDate, salary, status
        } = req.body;

        const user = await User.create({
            name, apellidoPaterno, apellidoMaterno, edad,
            email, age, isActive, roles, address, birthDate, salary, status
        });

        res.status(201).json({
            message: 'Usuario creado',
            data: user
        });
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

export const getUserById = async (req, res) => {
    try {
        const user = await User.findById(req.params.id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json(user);
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const updateUser = async (req, res) => {
    try {
        const {
            name, apellidoPaterno, apellidoMaterno, edad,
            email, age, isActive, roles, address, birthDate, salary, status
        } = req.body;

        const user = await User.findByIdAndUpdate(
            req.params.id,
            { name, apellidoPaterno, apellidoMaterno, edad, email, age, isActive, roles, address, birthDate, salary, status },
            { new: true, runValidators: true }
        );

        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json({ message: 'Usuario actualizado', data: user });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};

export const deleteUser = async (req, res) => {
    try {
        const user = await User.findByIdAndDelete(req.params.id);
        if (!user) return res.status(404).json({ message: 'Usuario no encontrado' });
        res.status(200).json({ message: 'Usuario eliminado' });
    } catch (error) {
        res.status(500).json({ message: error.message });
    }
};


export const login = (req, res) => {
    
}
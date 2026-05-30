import express from 'express';
import { createUser, getUsers } from '../controllers/userController.js';

const route = express.Router();

route.get('/', getUsers);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear usuario
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *                 example: "Taurus Silver"
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 */


route.post('/', createUser);

export default route;

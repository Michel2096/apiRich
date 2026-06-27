import express from 'express';
import { createUser, getUsers, getUserById, updateUser, deleteUser } from '../controllers/userController.js';

const route = express.Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     User:
 *       type: object
 *       properties:
 *         _id:
 *           type: string
 *           example: "6650a1b2c3d4e5f6a7b8c9d0"
 *         name:
 *           type: string
 *           example: "Ricardo"
 *         apellidoPaterno:
 *           type: string
 *           example: "García"
 *         apellidoMaterno:
 *           type: string
 *           example: "López"
 *         edad:
 *           type: integer
 *           example: 28
 *         email:
 *           type: string
 *           format: email
 *           example: "ricardo@example.com"
 *         age:
 *           type: integer
 *           minimum: 18
 *           example: 25
 *         isActive:
 *           type: boolean
 *           example: true
 *         roles:
 *           type: string
 *           example: "admin"
 *         address:
 *           type: object
 *           properties:
 *             street:
 *               type: string
 *               example: "Av. Reforma 123"
 *             city:
 *               type: string
 *               example: "Ciudad de México"
 *             zipCode:
 *               type: string
 *               example: "06600"
 *         birthDate:
 *           type: string
 *           format: date
 *           example: "1998-04-15"
 *         salary:
 *           type: number
 *           example: 15000.50
 *         status:
 *           type: string
 *           enum: [ACTIVE, INACTIVE, BLOCKED]
 *           example: "ACTIVE"
 *         createdAt:
 *           type: string
 *           format: date-time
 *         updatedAt:
 *           type: string
 *           format: date-time
 *     UserInput:
 *       type: object
 *       required:
 *         - name
 *         - apellidoPaterno
 *         - apellidoMaterno
 *         - edad
 *         - email
 *       properties:
 *         name:
 *           type: string
 *           example: "Ricardo"
 *         apellidoPaterno:
 *           type: string
 *           example: "García"
 *         apellidoMaterno:
 *           type: string
 *           example: "López"
 *         edad:
 *           type: integer
 *           example: 28
 *         email:
 *           type: string
 *           format: email
 *           example: "ricardo@example.com"
 *         age:
 *           type: integer
 *           minimum: 18
 *           example: 25
 *         isActive:
 *           type: boolean
 *           example: true
 *         roles:
 *           type: string
 *           example: "admin"
 *         address:
 *           type: object
 *           properties:
 *             street:
 *               type: string
 *               example: "Av. Reforma 123"
 *             city:
 *               type: string
 *               example: "Ciudad de México"
 *             zipCode:
 *               type: string
 *               example: "06600"
 *         birthDate:
 *           type: string
 *           format: date
 *           example: "1998-04-15"
 *         salary:
 *           type: number
 *           example: 15000.50
 *         status:
 *           type: string
 *           enum: [ACTIVE, INACTIVE, BLOCKED]
 *           example: "ACTIVE"
 */

/**
 * @swagger
 * /api/users:
 *   get:
 *     summary: Obtener todos los usuarios
 *     tags:
 *       - Users
 *     responses:
 *       200:
 *         description: Lista de usuarios
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/User'
 *       500:
 *         description: Error del servidor
 */
route.get('/', getUsers);

/**
 * @swagger
 * /api/users/{id}:
 *   get:
 *     summary: Obtener usuario por ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario (MongoDB ObjectId)
 *         example: "6650a1b2c3d4e5f6a7b8c9d0"
 *     responses:
 *       200:
 *         description: Usuario encontrado
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
route.get('/:id', getUserById);

/**
 * @swagger
 * /api/users:
 *   post:
 *     summary: Crear un nuevo usuario
 *     tags:
 *       - Users
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       201:
 *         description: Usuario creado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario creado"
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       500:
 *         description: Error del servidor
 */
route.post('/', createUser);

/**
 * @swagger
 * /api/users/{id}:
 *   put:
 *     summary: Actualizar usuario por ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario (MongoDB ObjectId)
 *         example: "6650a1b2c3d4e5f6a7b8c9d0"
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserInput'
 *     responses:
 *       200:
 *         description: Usuario actualizado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario actualizado"
 *                 data:
 *                   $ref: '#/components/schemas/User'
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
route.put('/:id', updateUser);

/**
 * @swagger
 * /api/users/{id}:
 *   delete:
 *     summary: Eliminar usuario por ID
 *     tags:
 *       - Users
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: ID del usuario (MongoDB ObjectId)
 *         example: "6650a1b2c3d4e5f6a7b8c9d0"
 *     responses:
 *       200:
 *         description: Usuario eliminado exitosamente
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: "Usuario eliminado"
 *       404:
 *         description: Usuario no encontrado
 *       500:
 *         description: Error del servidor
 */
route.delete('/:id', deleteUser);

export default route;

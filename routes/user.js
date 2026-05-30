import express from 'express';
import { createUser, getUsers } from '../controllers/userController.js';

const route = express.Router();

route.get('/', getUsers);

/** 
 * @swagger
 * /api/users:
 *   post:
 *   summery: create usuario
 *   tags: 
 *     - Users
 *     requestBody:
 *     required: True
 *     content. 
 *       application/json:
 *         schema:
 *            type: object:
 *              properties:
 *               name:
 *                type: string
 */


route.post('/', createUser);

export default route;

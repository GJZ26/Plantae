// Importamos express
import express from 'express';

// Importamos los métodos
import { index, validarUser } from '../controllers/UsuariosController.js';

// Usamos los enrutadores de express
const router = express.Router();

// Declaración de las rutas
router.get('/', index)
router.post('/',validarUser)

export default router
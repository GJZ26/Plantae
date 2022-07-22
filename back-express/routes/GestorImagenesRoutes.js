// Importamos las dependencias
import express from 'express'

// Importamos los métodos
import { fileUpload, SubirImg } from '../controllers/GestorImagenesController.js';
import { AINow } from '../controllers/SchemaController.js';


// Usamos los enrutadores de express
const router = express.Router()

// Declaración de las rutas
router.get('/AI', AINow)
router.post('/post', fileUpload, SubirImg)

export default router
// Importamos la dependencias de express
import express from 'express'

// Importamos los controladores de los carritos
import { add2Cart } from '../controllers/CarritoController.js'

// Usamos los enrutadores de express
const router = express.Router()

// Inicia el enrutamiento
router.post('/add',add2Cart)

// Exportamos  enrutador
export default router
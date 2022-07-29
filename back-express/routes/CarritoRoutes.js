// Importamos la dependencias de express
import express from 'express'

// Importamos los controladores de los carritos
import { add2Cart, deleteElementCart, getCart, searchbyFolio, updateComprar } from '../controllers/CarritoController.js'

// Usamos los enrutadores de express
const router = express.Router()

// Inicia el enrutamiento
router.post('/add',add2Cart)
router.get('/',getCart)
router.delete('/remove/:id',deleteElementCart)
router.post('/buy/:id',updateComprar)
router.get('/get/:folio',searchbyFolio)

// Exportamos  enrutador
export default router
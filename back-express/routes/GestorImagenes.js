// Importamos las dependencias
import express from 'express'
import { AINow } from '../database/schema.js';
import { actualizarAI, fileUpload } from '../controllers/ImagesController.js';

// Usamos los enrutadores de express
const router = express.Router()

router.get('/', (req, res) => {
    res.send('Hola:)')
})

router.get('/AI', AINow)

router.post('/post', fileUpload, (req, res) => {
    actualizarAI();
    req.getConnection((err, conn) => {
        if (err) return res.status(500).send(`Error al subir el contenido: ${err}`)
        res.send(`${req.file.originalname} ha sido almacenado correctamente`)
    })
})

export default router
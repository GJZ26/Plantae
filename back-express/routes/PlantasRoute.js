// Importamos Express para los enrutadores
import express from 'express';

// Importamos los controladores de los métodos
import { getAllPlant, getPlantbyID } from '../controllers/PlantasController.js';

// Instanciamos el enrutador de Express
const router = express.Router()

router.get('/catalogo/',getAllPlant)
router.get('/catalogo/:id',getPlantbyID)

export default router
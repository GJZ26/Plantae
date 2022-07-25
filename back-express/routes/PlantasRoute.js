// Importamos Express para los enrutadores
import express from 'express';

// Importamos los controladores de los métodos
import { createPlant, deletePlant, getAllPlant, getPlantbyID, UpdatePlant } from '../controllers/PlantasController.js';
import { getCheapest } from '../controllers/CheapestController.js';

// Instanciamos el enrutador de Express
const router = express.Router()

router.get('/catalogo/',getAllPlant)
router.get('/catalogo/:id',getPlantbyID)
router.put('/catalogo/:id', UpdatePlant)
router.post('/catalogo/',createPlant)
router.delete('/catalogo/:id',deletePlant)
router.get('/offert/',getCheapest)

export default router
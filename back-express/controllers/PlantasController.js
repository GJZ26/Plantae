// Importamos el modelo para las plantas
import PlantaModel from '../models/PlantasModel.js'
import PlantasModel from '../models/PlantasModel.js'

/*
  ____________________________________
  |  ~~~~~~ Métodos del CRUD ~~~~~~  |
  ____________________________________
  
*/

// Mostrar todas las plantas
export const getAllPlant = async (req, res) => {
    try {

        const planta = await PlantasModel.findAll() // Esperamos a que Sequelize nos devuelva todos los registros
        res.json(planta) // Lo regresamos como JSON

    } catch (error) {

        res.json({ message: error.message }) // Mostramos mensaje de error

    }
}

// Mostrar planta específica por ID
export const getPlantbyID = async (req, res) => {
    try {

        const planta = await PlantasModel.findAll({
            where: { id: req.params.id } // Sólo recuperaremos los que coincidan con el id proporcionado por la petición
        })

        res.json(planta[0])

    } catch (error) {
        res.json({ message: error.message })
    }
}

/*

Por completar: para área de gestor 
    -> Método para ingresar más plantas al catálogo
    -> Método para eliminar plantas del catálogo
    -> Método para editar plantas del catálogo
    -> Método para seleccionar plantas por nombre

Nota: Actualizar lo enrutadores cuando actualices el documento
*/
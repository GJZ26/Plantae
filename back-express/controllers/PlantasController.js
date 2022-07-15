import db from "../database/conexion.js"

/*
  ____________________________________
  |  ~~~~~~ Métodos del CRUD ~~~~~~  |
  ____________________________________
  
*/

// Mostrar todas las plantas
export const getAllPlant = async (req, res) => {
    try {

        db.query('SELECT * FROM plantas', function (err, rows) {
            if (err) throw err
            res.send(rows)
        })

    } catch (error) {

        res.json({ message: error.message }) // Mostramos mensaje de error

    }
}

// Mostrar planta específica por ID
export const getPlantbyID = async (req, res) => {
    try {

        db.query('SELECT * FROM plantas WHERE id=' + req.params.id, (err, rows) => {
            if (err) throw err
            res.json(rows[0])
        })

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
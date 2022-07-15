import db from "../database/conexion.js"

/*
  ____________________________________
  |  ~~~~~~ Métodos del CRUD ~~~~~~  |
  ____________________________________
  
*/

// Mostrar todas las plantas
export const getAllPlant = async (req, res) => {

    db.query('SELECT * FROM plantas', function (err, rows) {
        if (err) throw res.json({ message: err.message })
        res.json(rows)
    })

}

// Mostrar planta específica por ID
export const getPlantbyID = async (req, res) => {

    db.query('SELECT * FROM plantas WHERE id=' + req.params.id, (err, rows) => {
        if (err) throw res.json({ message: err.message })
        res.send(rows[0])
    })

}

/*

Por completar: para área de gestor 
    -> Método para ingresar más plantas al catálogo
    -> Método para eliminar plantas del catálogo
    -> Método para editar plantas del catálogo
    -> Método para seleccionar plantas por nombre

Nota: Actualizar lo enrutadores cuando actualices el documento
*/
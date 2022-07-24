import db from "../database/PlantasDB.js"

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

// Crear un nuevo registro
export const createPlant = async (req, res) => {


    // Array donde se guardarán los parámetros para la insercción de la información
    let info = [];

    // Recoremos el objeto de la solicitud y lo ingresamos en el array
    for (const propierty in req.body) {
        info.push(req.body[propierty])
    }

    db.query('INSERT INTO plantas(nombre, nombre_cientifico, descripcion, tipo, img_ruta, stock, precio) VALUES  (?)', [info],
        (err, rows) => {
            if (err) throw res.send(err)
            res.json({ "messsage": "Registro creado exitosamente" })
        }
    )

}

// Actualizar un registro
export const UpdatePlant = async (req, res) => {

    const queryStatement = "UPDATE plantas SET nombre = ?, nombre_cientifico = ?, descripcion = ?, tipo = ?,img_ruta = ?, stock = ?, precio = ? WHERE id = ?"

    let info = [];

    for (const propierty in req.body) {
        info.push(req.body[propierty])
    }

    db.query(queryStatement, [info[0], info[1], info[2], info[3], info[4], info[5], info[6], req.params.id],
        (err, rows) => {
            if (err) res.send(err)
            res.json({ "messsage": "Registro actualizado exitosamente" })
        }
    )

}


// Eliminar un registro
export const deletePlant = async (req, res) => {

    db.query('DELETE FROM plantas WHERE id = ?', req.params.id, (err, rows) => {
        if (err) throw res.json({ message: err.message })
        res.json({ "messsage": "Registro eliminado exitosamente" })
    })

}
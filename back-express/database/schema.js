/* Prueba de usar MySql en vez de Sequilize */
import mysql from 'mysql';
import express from 'express';

const schema = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
})

schema.connect(
    function (err) {
        if (err) throw console.error(`Error al conectar a la base de dato: ${err}`)
        console.info('Conexión exitosa')
    }
)

export const AINow = async (req, res) => {

    schema.query('SELECT `AUTO_INCREMENT` FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = "Plantae" AND   TABLE_NAME   = "plantas"',
        (err, rows) => {
            if (err) throw res.json({ message: err.message })
            res.json(rows[0].AUTO_INCREMENT)
        }
    )

}

export const AI = async()=>{
    schema.query('SELECT `AUTO_INCREMENT` FROM INFORMATION_SCHEMA.TABLES WHERE TABLE_SCHEMA = "Plantae" AND   TABLE_NAME   = "plantas"',
    (err, rows) => {
        if (err) throw res.json({ message: err.message })
        return express.json(rows[0].AUTO_INCREMENT)
    }
)
}
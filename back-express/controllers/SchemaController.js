import express from 'express';
import schema from '../database/SchemaDB.js';

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
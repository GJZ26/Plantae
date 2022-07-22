// Importamos dependecias
import db from "../database/PlantasDB.js"


export const validarUser = async (req, res) => {
    db.query('SELECT * FROM usuarios WHERE email = ? AND pwd = ?', [req.body.email, req.body.pwd], (err, rows) => {
        if (err) return res.json(err)
        if (rows.length > 0) {
            res.json({
                "username": rows[0].username,
                "email": rows[0].email,
                "priv": rows[0].priv
            })
        } else {
            res.json({'message':'Usuario o contraseña erróneas'})
        }
    })
}

export const index = (req, res) => {
    res.send("Bienvenidos a la API de usuarios")
}
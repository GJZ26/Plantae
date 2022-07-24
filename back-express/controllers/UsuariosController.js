// Importamos la conexion a la base de datos
import db from "../database/PlantasDB.js";

// Importamos los componentes necesarios
import bcrypt from 'bcrypt'
const rounds = 10

// Verifica los datos del usuario para iniciar sesión
export const login = (req, res) => {
    const email = req.body.email
    const password = req.body.password

    db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, rows) => {
        if (err) throw err
        if (rows.length > 0) {
            bcrypt.compare(password, rows[0].pwd, (error, response) => {
                if (error) throw error
                if (response) {
                    req.session.user = rows[0].username
                    console.log(req.session.user)
                    res.send('Sesión iniciada')
                } else {
                    res.send('Contraseña incorrecta')
                }
            })
        } else {
            res.send('El usuario no existe')
        }
    })
}

// Registra un nuevo usuario en la base de datos
export const register = (req, res) => {
    const username = req.body.username
    const email = req.body.email
    const password = req.body.password

    db.query('SELECT * FROM usuarios WHERE email = ?', [email], (err, rows) => {
        if (err) throw err
        if (rows.length > 0) {
            res.send("Ya existe un usuario registrado con este email, inténte de nuevo")
        } else {
            bcrypt.hash(password, rounds, (err, hash) => {
                if (err) {
                    res.json(err)
                } else {
                    db.query('INSERT INTO usuarios (username, email, pwd, priv) VALUES (?, ?, ?, "cliente")', [username, email, hash], (error, rows) => {
                        if (error) res.json(error)
                        res.send('Registro Exitoso')
                    })
                }

            })
        }
    })

}

// Verifica si tiene una sesión iniciada, regresa la info del usuario
export const verifySession = (req, res) => {
    if (req.session.user) {
        res.send({
            isLogged: true,
            user: req.session.user
        })
    } else {
        res.send({
            isLogged: false
        })
    }
}
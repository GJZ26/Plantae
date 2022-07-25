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
                    req.session.user = rows[0]
                    console.log(req.session.user)
                    res.json({
                        login: true,
                        message: 'Sesión iniciada'
                    })
                } else {
                    res.json({
                        login: false,
                        message: 'Contraseña Incorrecta'
                    })
                }
            })
        } else {
            res.json({
                login: false,
                message: 'El usuario no existe'
            })
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
            res.json({
                        register: false,
                        message: 'Ya existe un usuarion con este correo'
                    })
        } else {
            bcrypt.hash(password, rounds, (err, hash) => {
                if (err) {
                    res.json(err)
                } else {
                    db.query('INSERT INTO usuarios (username, email, pwd, priv) VALUES (?, ?, ?, "cliente")', [username, email, hash], (error, rows) => {
                        if (error) res.json(error)
                        res.json({
                            register: true,
                            message: 'Registro Exitoso'
                        })
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

export const logout = (req, res) =>{
    req.session.destroy()
    res.send({
        isLogged: false
    })
}
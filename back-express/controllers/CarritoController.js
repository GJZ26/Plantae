import db from "../database/PlantasDB.js"

// Método para encontrar un carrito dado un folio
export const searchbyFolio = (req, res) => {
    const folio = 'F-' + req.params.folio
    db.query('SELECT carrito.folio, carrito.cantidad, plantas.nombre, usuarios.username FROM carrito INNER JOIN usuarios ON carrito.id_user = usuarios.id INNER JOIN plantas ON carrito.id_planta = plantas.id WHERE carrito.folio = ?', folio, (err, rows)=>{
        if (err) throw err
        res.send(rows)
    })
}

// Método para eliminar registro de la base de datos y actualizar inventario
export const updateComprar = (req, res) => {
    let stockFinal = 0;
    db.query('SELECT * FROM carrito WHERE id = ?', req.params.id, (carritoErr, carritoRow) => {
        if (carritoErr) throw carritoErr
        stockFinal += carritoRow[0].cantidad

        db.query('SELECT * FROM plantas WHERE id = ?', carritoRow[0].id_planta, (plantaErr, plantaRow) => {
            if (plantaErr) throw plantaErr
            stockFinal = plantaRow[0].stock - stockFinal

            if (stockFinal < 0) {

                res.send("Este producto ya no se encuentra en stock")

            } else {

                db.query('UPDATE plantas SET stock = ? WHERE id = ?', [stockFinal, carritoRow[0].id_planta], (errUpdate, rowUpdate) => {
                    if (errUpdate) throw errUpdate
                    res.send('Compra exitosa')
                })

            }
        })
    })
    db.query('DELETE FROM carrito WHERE id = ?', req.params.id, (error, resultado) => {
        if (error) throw error
    })
}

// Eliminar un producto del carrito
export const deleteElementCart = (req, res) => {
    console.log(req.params.id)
    db.query('DELETE FROM carrito WHERE id = ?', req.params.id, (err, rows) => {
        if (err) throw err
        res.send("Elemento eliminado")
    })
}

// Método para obtener el carrito del usuario actual
export const getCart = async (req, res) => {
    if (req.session.user) {
        db.query('SELECT plantas.nombre, plantas.img_ruta, carrito.folio, carrito.id, carrito.cantidad FROM plantas INNER JOIN carrito ON plantas.id = carrito.id_planta WHERE carrito.id_user = ?;', req.session.user.id, (errar, resultao) => {
            if (errar) throw errar
            res.send(resultao)
        })
    } else {
        res.send(false)
    }
}

// Este método añade elementos al carrito con el folio del usuario
export const add2Cart = (req, res) => {
    const user = req.body.idUser
    const plant = req.body.idPlant
    const amount = req.body.cantidad
    const limit = req.body.limit

    // Verificamos si el usuario tiene carritos activos
    db.query('SELECT * FROM carrito WHERE id_user = ?', [user], (err, rows) => {
        if (err) throw err

        // Si no hay registros, procedemos a crear un folio único
        if (rows.length <= 0) {
            db.query('INSERT INTO carrito(folio, id_user, id_planta, cantidad) VALUE(?, ?, ?, ?)',
                [`F-${Date.now()}`, user, plant, amount], (errr, rowss) => {
                    if (errr) throw errr
                    res.send("Registro nuevo exitoso")
                })

            // Si tiene un registro, añadimos su petición a su folio actual
        } else {
            let cant = parseInt(amount);
            let doesExists = false;

            for (let i = 0; i < rows.length; i++) {
                if (rows[i].id_planta === plant) {
                    doesExists = true
                    cant += rows[i].cantidad
                }
            }

            if (doesExists) {

                if (cant > limit) {

                    res.send('No puedes añadir más productos que los disponibles')

                } else {

                    db.query('UPDATE carrito SET cantidad = ? WHERE id_planta = ?', [cant, plant], (errar, rows) => {
                        if (errar) throw errar
                        res.send('Se actualizó la cantidad del producto en su registro')
                    })

                }
            } else {
                db.query('INSERT INTO carrito(folio,id_user, id_planta, cantidad) VALUE (?, ?, ?, ?)',
                    [rows[0].folio, user, plant, amount], (error, result) => {
                        if (error) throw error
                        res.send('Se ha añadido un elemento a tu carrito actual')
                    })
            }
        }
    })
}
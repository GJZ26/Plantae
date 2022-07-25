import db from "../database/PlantasDB.js"


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
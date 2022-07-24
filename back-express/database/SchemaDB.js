/* Prueba de usar MySql en vez de Sequilize */
import mysql from 'mysql';

const schema = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: ''
})

schema.connect(
    function (err) {
        if (err) throw console.error(`Error al conectar a la base de dato: ${err}`)
        console.info('Conexión global exitosa')
    }
)

export default schema
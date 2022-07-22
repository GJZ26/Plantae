/* Prueba de usar MySql en vez de Sequilize */
import mysql from 'mysql';

const db = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'',
    database:'Plantae'
})

db.connect(
    function(err){
        if(err) throw console.error(`Error al conectar a la base de dato: ${err}`)
        console.info('Conexión a la base de datos Plantae exitosa')
    }
)

// Exportamos la conexion
export default db;
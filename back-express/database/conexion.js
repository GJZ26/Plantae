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
        if(err) throw err
        console.log('Conexión exitosa')
    }
)

// Exportamos la conexion
export default db;
// Importamos Sequelize.
import { Sequelize } from 'sequelize';

// Creamos la conexión a la base de datos.
const db = new Sequelize ('Plantae','root','',{
    host:'localhost',
    dialect:'mysql'
})

// Exportamos la conexion
export default db;
// Importamos la conexion de la base de datos
import db from '../database/conexion.js';

// Importamos datatypes
import { DataTypes } from 'sequelize';

// Creamos el modelo para la tabla de planta
const PlantaModel = db.define('plantas', {
    nombre: { type: DataTypes.STRING },
    nombre_cientifico: { type: DataTypes.STRING },
    descripcion: { type: DataTypes.TEXT },
    tipo: { type: DataTypes.STRING },
    img_ruta: { type: DataTypes.STRING },
    stock: { type: DataTypes.NUMBER }
})

// Exportamos el modelo
export default PlantaModel
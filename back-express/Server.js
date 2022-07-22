// Importamos dependencias
import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import myconn from 'express-myconnection'
import bodyParser from 'body-parser'

// Importamos las rutas
import plantRoutes from './routes/PlantasRoute.js'
import imagenesRoute from './routes/GestorImagenesRoutes.js'
import usuariosRoute from './routes/UsuariosRoutes.js'

// Cosa rara para tener las variables __diraname :)
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// Método principal de express
const app = express()

// Esto es necesario para usar los middleware (?)
app.use(myconn(mysql, {
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'Plantae'
}))

// Convertimos estático la carpeta dónde se almacenan nuestras imagenes y acceder desde cliente
app.use(express.static(path.join(__dirname, '/static/images/')))

// Declaramos las herramientas del servidor
app.use(cors())
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))

// Declaramos la ruta raíz para las distintas APIS instanciadas
app.use('/plantae', plantRoutes)
app.use('/images', imagenesRoute)
app.use('/user', usuariosRoute)

// Levantamos el servidor en el puerto 8000
app.listen(8000, () => {
    console.log('Servidor a la escucha: http://localhost:8000/')
})
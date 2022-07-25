// Importamos dependencias
import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import myconn from 'express-myconnection'
import bodyParser from 'body-parser'
import cookieParser from 'cookie-parser'
import session from 'express-session'

// Importamos las rutas
import plantRoutes from './routes/PlantasRoute.js'
import imagenesRoute from './routes/GestorImagenesRoutes.js'
import usuariosRoutes from './routes/UsuariosRoutes.js'
import cartRoutes from './routes/CarritoRoutes.js'

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

// Convertimos estático la carpeta dónde se almacenan nuestras imagenes para el acceso del cliente
app.use(express.static(path.join(__dirname, '/static/images/')))
app.use(express.static(path.join(__dirname,'/static/public/')))

// Declaramos las herramientas del servidor
app.use(cors({ // Configuramos los permisos de CORS para usar cookies
    origin: ['http://localhost:3000'],
    methods: ['POST', 'GET', 'PUT', 'DELETE'],
    credentials: true
}))
app.use(express.json())
app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json({ limit: '10mb' }))

// Configuración para almecenar y leer cookies en el almacenamiento del usuario
app.use(cookieParser())
app.use(session({
    key: 'user',
    secret: 'plants are beautiful :)',
    resave: false,
    saveUninitialized: false,
    cookie: {
        expires: 60 * 60 * 24
    }
}))

// Declaramos la ruta raíz para las distintas APIS instanciadas
app.use('/plantae', plantRoutes)
app.use('/images', imagenesRoute)
app.use('/users', usuariosRoutes)
app.use('/cart', cartRoutes)

// Levantamos el servidor en el puerto 8000
app.listen(8000, () => {
    console.log('Servidor a la escucha: http://localhost:8000/')
})
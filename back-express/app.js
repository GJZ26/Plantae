// Importamos dependencias
import express from 'express'
import cors from 'cors'
import mysql from 'mysql'
import myconn from 'express-myconnection'

// Importamos las rutas
import plantRoutes from './routes/PlantasRoute.js'
import imagenesRoute from './routes/GestorImagenes.js'
import path from 'path'
import { fileURLToPath } from 'url';
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express()

app.use(myconn(mysql,{
    host:'localhost',
    user:'root',
    password:'',
    database:'Plantae'
}))

// Convertimos estático la carpeta dónde se almacenan nuestras imagenes y acceder desde cliente
app.use(express.static(path.join(__dirname, '/static/images/')))

app.use(cors())
app.use(express.json())

app.use('/plantae', plantRoutes)
app.use('/images', imagenesRoute)

app.get('/', (req,res)=>{
    res.send("Hola:)")
})

// Levantamos el servidor en el puerto 8000
app.listen(8000, () => {
    console.log('Servidor a la escucha: http://localhost:8000/')
})
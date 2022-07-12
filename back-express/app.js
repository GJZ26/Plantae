// Importamos dependencias
import express from 'express'
import cors from 'cors'

// Importamos la conexión a la base de datos
import db from './database/conexion.js'

// Importamos las rutas
import plantRoutes from './routes/PlantasRoute.js'

const app = express()

app.use(cors())
app.use(express.json())

app.use('/plantae',plantRoutes)

// Intentamos auténticarnos para acceder a la base de datos
try {
    await db.authenticate()
    console.log('¡Conexión a la base de datos exitosa!')
} catch (error) {
    console.log(`Un problema ha ocurrido durante la conexion: ${error}`)
}

// Levantamos el servidor en el puerto 8000
app.listen(8000,()=>{
    console.log('Servidor inicializado')
})
// Importamos dependencias
import express from 'express'
import cors from 'cors'

// Importamos las rutas
import plantRoutes from './routes/PlantasRoute.js'

const app = express()

app.use(cors())
app.use(express.json())
app.use('/plantae',plantRoutes)

// Levantamos el servidor en el puerto 8000
app.listen(8000,()=>{
    console.log('Servidor a la escucha: http://localhost:8000/')
})
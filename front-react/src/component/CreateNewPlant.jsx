// Importamos dependencias
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'

// Importamos hoja de estilo
import '../static/createPlant.css'

// Constante para las solicitudes de las API'S
const URI = 'http://localhost:8000/plantae/catalogo/'

// Declaración del componente
const CrearPlanta = () => {

    // Creamos estados
    const [nombre, setNombre] = useState('')
    const [nombrec, setNombrec] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [tipo, setTipo] = useState('')
    const [imgR, setImgR] = useState('')
    const [stock, setStock] = useState(0)
    const [precio, setPrecio] = useState(0)

    const navigate = useNavigate()

    // Función para enviar los datos para almacenarlo
    const store = async (e) => {
        e.preventDefault()
        await axios.post(URI, {
            nombre: nombre,
            nombrec: nombrec,
            descripcion: descripcion,
            tipo: tipo,
            imgR: imgR,
            stock: stock,
            precio: precio
        })
        navigate('/') // Redirecciona a la página principal
    }

    return (
        <div className="formPlantContainer">
            <h3 className="PlantCreate">Añadir nueva planta</h3>
            <form onSubmit={store} className="FormPlant">

                <label htmlFor="nombre">Nombre</label>
                <input
                    type="text"
                    value={nombre}
                    onChange={(e) => setNombre(e.target.value)}
                />

                <label htmlFor="nombrec">Nombre Científico</label>
                <input
                    type="text"
                    value={nombrec}
                    onChange={(e) => setNombrec(e.target.value)}
                />

                <label htmlFor="descripcion">Descripción</label>
                <textarea
                    type="text"
                    value={descripcion}
                    onChange={(e) => setDescripcion(e.target.value)}
                />

                <label htmlFor="tipo">Tipo</label>
                <input
                    type="text"
                    value={tipo}
                    onChange={(e) => setTipo(e.target.value)}
                />

                {/* Esto se tendrá que cambiar por un file */}
                <label htmlFor="imgR">Ruta imagen</label>
                <input
                    type="text"
                    value={imgR}
                    onChange={(e) => setImgR(e.target.value)}
                />

                <label htmlFor="Stock">Stock</label>
                <input
                    type="number"
                    value={stock}
                    onChange={(e) => setStock(e.target.value)}
                />

                <label htmlFor="precio">Precio</label>
                <input
                    type="number"
                    value={precio}
                    onChange={(e) => setPrecio(e.target.value)}
                />

                <button type='submit'>Crear</button>

            </form>
        </div>
    )
}

export default CrearPlanta
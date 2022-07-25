// Importamos dependencias
import axios from 'axios'
import { useState, useEffect } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Navbar from './Navbar'

// Importamos hoja de estilo
import '../static/createPlant.css'

// Constate de la URI a las APIS
const URI = 'http://localhost:8000/plantae/catalogo/'


// Componente para editar la información de las plantas
const EditPlant = () => {
    const [nombre, setNombre] = useState('')
    const [nombrec, setNombrec] = useState('')
    const [descripcion, setDescripcion] = useState('')
    const [tipo, setTipo] = useState('')
    const [imgR, setImgR] = useState('')
    const [stock, setStock] = useState(0)
    const [precio, setPrecio] = useState(0)

    const navigate = useNavigate()

    const { id } = useParams()

    // Función para actualizar la información de las plantas
    const update = async (e) => {
        e.preventDefault()
        await axios.put(URI + id, {
            nombre: nombre,
            nombrec: nombrec,
            descripcion: descripcion,
            tipo: tipo,
            imgR: imgR,
            stock: stock,
            precio: precio
        })
        navigate('/admin')
    }

    useEffect(() => { getPlantbyId() }, [])

    const getPlantbyId = async () => {
        const res = await axios.get(URI + id)

        setNombre(res.data.nombre)
        setNombrec(res.data.nombre_cientifico)
        setDescripcion(res.data.descripcion)
        setTipo(res.data.tipo)
        setImgR(res.data.img_ruta)
        setStock(res.data.stock)
        setPrecio(res.data.precio)
    }

    return (
        <div className="formPlantContainer">
            <Navbar/>
            <div className="registerContainer">
                <h3 className="PlantCreate">Editar planta</h3>
                <hr />
                <form onSubmit={update} className="FormPlant">

                    <label className="labelCreator" htmlFor="nombre">Nombre</label>
                    <input
                        type="text"
                        value={nombre}
                        onChange={(e) => setNombre(e.target.value)}
                    />

                    <label className="labelCreator" htmlFor="nombrec">Nombre Científico</label>
                    <input
                        type="text"
                        value={nombrec}
                        onChange={(e) => setNombrec(e.target.value)}
                    />

                    <label className="labelCreator" htmlFor="descripcion">Descripción</label>
                    <textarea
                        style={{ resize: "none" }}
                        type="text"
                        value={descripcion}
                        onChange={(e) => setDescripcion(e.target.value)}
                    />

                    <label className="labelCreator" htmlFor="tipo">Tipo</label>
                    <input
                        type="text"
                        value={tipo}
                        onChange={(e) => setTipo(e.target.value)}
                    />

                    {/* Esto se tendrá que cambiar por un file */}
                    <label className="labelCreator" htmlFor="imgR">Ruta imagen</label>
                    <input
                        type="text"
                        value={imgR}
                        onChange={(e) => setImgR(e.target.value)}
                    />

                    <label className="labelCreator" htmlFor="Stock">Stock</label>
                    <input
                        type="number"
                        value={stock}
                        onChange={(e) => setStock(e.target.value)}
                    />

                    <label className="labelCreator" htmlFor="precio">Precio</label>
                    <input
                        type="number"
                        value={precio}
                        onChange={(e) => setPrecio(e.target.value)}
                    />
                    <button className='CrearPlanta' type='submit'>Actualizar</button>

                </form>
            </div>
        </div>
    )
}

export default EditPlant
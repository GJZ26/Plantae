// Importamos dependencias
import axios from 'axios'
import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Navbar from './Navbar.jsx'
import Footer from './Footer.jsx'

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

    let AI;

    const getAI = async () => {
        const res = await axios.get('http://localhost:8000/images/AI')
        return res.data
    }

    getAI().then(res => AI = res)

    /* INICIO PARA ALMACENAR IMAGENES */
    const [imagen, setImagen] = useState(null)

    const selectedHandler = (e) => { // Selecciona el input del imagen
        setImagen(e.target.files[0]);
        setImgR(AI + '-' + e.target.files[0].name)
    }

    const sendHandler = (e) => { // Sube las imágenes
        if (!imagen) {
            alert('Debes seleccionar una imágen')
            return
        }

        const formdata = new FormData()
        formdata.append('image', imagen) // Damos formato de imagen al req

        fetch('http://localhost:8000/images/post', {
            method: 'POST',
            body: formdata
        }).then(res => res.text()).then(res => {
            console.log(res)
        }).catch(err => console.log(`Ha ocurrido un error durante la consulta: ${err}`))

        document.getElementById('fileInput').value = null
        setImagen(null)
    }

    /* FIN PARA ALMACENAR IMAGENES */

    // Función para enviar los datos para almacenarlo
    const store = async (e) => {
        e.preventDefault()
        sendHandler();
        await axios.post(URI, {
            nombre: nombre,
            nombrec: nombrec,
            descripcion: descripcion,
            tipo: tipo,
            imgR: imgR,
            stock: stock,
            precio: precio
        })
        navigate('/admin') // Redirecciona a la página principal
    }

    return (
        <div className="formPlantContainer">
            <Navbar/>
            <div className="registerContainer">
                <h3 className="PlantCreate">Añadir nueva planta</h3>
                <hr />
                <form onSubmit={store} className="FormPlant">

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

                    {/* FILE DE PRUEBA */}

                    <label className="labelCreator" htmlFor="fileInput">Imagen</label>
                    <input id='fileInput' onChange={selectedHandler} type='file' />


                    {/* Esto se tendrá que cambiar por un imagen */}
                    {/* <label className="labelCreator" htmlFor="imgR">Ruta imagen</label>
                    <input
                        type="text"
                        value={imgR}
                        onChange={(e) => setImgR(e.target.value)}
                    /> */}

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
                    <button className='CrearPlanta' type='submit'>Crear</button>

                </form>
            </div>
            <Footer/>
        </div>
    )
}

export default CrearPlanta
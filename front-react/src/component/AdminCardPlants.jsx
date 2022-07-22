// Importamos dependecias 
import axios from 'axios'
import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'

import '../static/cardAdmin.css'

// Importación de íconos
import plusIcon from '../static/icon/plus-solid.svg'
import trahIcon from '../static/icon/trash-can-solid.svg'
import editIcon from '../static/icon/pen-to-square-solid.svg'

// Constante para las solicitudes de las API'S
const URI = 'http://localhost:8000/plantae/catalogo/'

// Cards para gestión de publicaciones para los administradores
const CardAdminPlant = () => {

    // Estado de las plantas
    const [plantas, setPlantas] = useState([])

    // Hoook para recuperar las plantas
    useEffect(() => { getPlantas() }, [])

    // Función para hacer petición a la base de datos
    const getPlantas = async () => {
        const res = await axios.get(URI)
        setPlantas(res.data)
    }

    // Función para eliminar registro de la base de datos
    const deletePlanta = async (ID) => {
        await axios.delete(`${URI}${ID}`)
        getPlantas()
    }

    return (
        <div className='cardAdminContainer'>

            <Link to='/admin/create' className='btn-crear'>
                <img src={plusIcon} alt='Crear' className='plusIcon' />
            </Link>

            {/* Creación de las tarjetas para edición */}
            {plantas.map((planta) => (
                <div key={planta.id} className='cardAdmin'>
                    <div className='img' style={{ backgroundImage: 'url(http://localhost:8000/' + planta.img_ruta }}></div>

                    <div className='contentPlant'>
                        <h4 className='nombrePlant'>{planta.nombre}</h4>
                        <span className='nombreC-Plant'>{planta.nombre_cientifico}</span>
                        <p className='descripcionPlant'>{planta.descripcion}</p>
                        <p className='precio'><strong>Precio:</strong> ${planta.precio}.00</p>
                        <p className='disponible'><strong>Disponible:</strong> {planta.stock}</p>
                    </div>

                    <div className='botonera'>
                        <Link
                            className='btnAdmin edit'
                            to={`edit/${planta.id}`}
                        >
                            <img src={editIcon} alt="Editar" className="iconClassic" />
                        </Link>

                        <button
                            onClick={() =>
                                (deletePlanta(planta.id))
                            }
                            className='btnAdmin delete'
                        >
                            <img src={trahIcon} alt="Eliminar" className="iconClassic" />
                        </button>

                    </div>

                </div>
            ))}
        </div>
    );

}

export default CardAdminPlant;
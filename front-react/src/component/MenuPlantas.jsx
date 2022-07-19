// Importamos librerias
import axios from 'axios'
import { useState, useEffect } from 'react'

// Importamos hoja de estilo para el componente
import '../static/card.css'

// Declaramos constantes
const URI = 'http://localhost:8000/plantae/catalogo/'

// Creamos el componente principal para el menú de las plantas
const MostrarPlantas = () => {

    // Creamos el useState
    const [plants, setPlanta] = useState([])

    // Esto es un hook, le decimons a react que esto necesita hacer algo tras ser renderizado
    useEffect(() => { getPlanta() }, [])

    // Procedimiento para mostrar los planta
    const getPlanta = async () => {
        const res = await axios.get(URI).catch(console.error("No se ha podido establecer conexion con el servidor"))
        setPlanta(res.data)
    }
    // Esta parte genera las cartas para el menú
    return (
        <div className="Cardcontainer">
            {/* Por cada elemento del retorno de la consulta, crea una card independiente */}
            {plants.map((plant) => ( // Nota: Al estar adentro de un elemento jsx, las funciones flechas se escribem () => () en vez de ()=>{}

                <div key={plant.id} style={{ backgroundImage: "url(http://localhost:8000/" + plant.img_ruta }} className="cardPlant">
                    <div className="filterContainer">
                        <h5 className="cardTitle">{plant.nombre}</h5>
                        <p className="nombreCientifico">{plant.nombre_cientifico}</p>
                        <p className="cardText">
                            {plant.descripcion}
                        </p>
                        <p className="price"><strong className="price">Precio: </strong><span className="price">${plant.precio}.00 MXN</span></p>
                        <p className="stock"><strong className="stock">Disponible: </strong><span className="stock">{plant.stock}</span></p>
                        <button type="button" className="view btn">Ver</button>
                        <button type="button" className="car btn">Car</button>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default MostrarPlantas
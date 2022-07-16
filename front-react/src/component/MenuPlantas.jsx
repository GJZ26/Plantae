// Importamos librerias
import axios from 'axios'
import { useState, useEffect } from 'react'

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

    return (
        <div>
            {/* Por cada elemento del retorno de la consulta, crea una card independiente */}
            {plants.map((plant) => ( // Nota: Al estar adentro de un elemento jsx, las funciones flechas se escribem () => () en vez de ()=>{}
                <div key={plant.id} className="card text-center ">
                    <div className="card-body">
                        <h5 className="card-title">{plant.nombre}</h5>
                        <p className="card-text">
                            {plant.descripcion}
                        </p>

                        <button type="button" className="btn btn-primary">Button</button>
                    </div>
                </div>
            ))}
        </div>
    );
}

export default MostrarPlantas
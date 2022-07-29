import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../static/cheapPlant.css'
import { Link } from 'react-router-dom'

function CheapestPlant() {

    const [bestPlant, setBestPlant] = useState({'img_ruta':'default.png'})

    useEffect(() => { BestOffer() }, [])

    const BestOffer = async () => {
        const res = await axios.get('http://localhost:8000/plantae/offert')
        setBestPlant(res.data)
    }


    return (
        <div className='cardContainer Centered'>
            <h2 className='best headerMain'>Mejor Oferta!</h2>
            <div className="cardBest">
                <div className="bestImg" onError={()=>(BestOffer())} style={{ backgroundImage: `url(http://localhost:8000/${bestPlant.img_ruta})` }}></div>
                <div className="info">
                    <h3 className="nombreBest">{bestPlant.nombre}</h3>
                    <p className="nombreC">{bestPlant.nombre_cientifico}</p>
                    <div className="infoAditional">
                        <p className="dispo">Disponibles: <b>{bestPlant.stock}</b></p>
                        <p className="tipo">Tipo: <b>{bestPlant.tipo}</b></p>
                    </div>
                    <p className="precioLabel">Sólo por: <b>${bestPlant.precio}.00 MXN</b></p>
                    <Link to='/catalogo'><button className='primary' href='/catalogo'> Ver catálogo </button></Link>
                </div>
            </div>
        </div>
    )
}

export default CheapestPlant
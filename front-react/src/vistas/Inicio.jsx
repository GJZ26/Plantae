import React from 'react'
import './static/Inicio.css'

// Importamos las cartas de las plantas
import CheapestPlant from '../component/CheapestPlant.jsx'
import Navbar from '../component/Navbar.jsx'
import { Link } from 'react-router-dom'

function Inicio() {
    return (
        <div className='Home'>
            <Navbar></Navbar>
            <div className="mainSection">
                <div className="filterMain">
                    <h2 className="saludos">Bienvenido a</h2>
                    <h1 className="brand">Plantae</h1>
                </div>
                <div className="aboutUs Centered">
                    <h2 className='headerMain'>¿Quiénes somos?</h2>
                    <p className="aboutInfo text">Somos una tienda en línea mexicana dedicada a la venta y distribución de plantas de cualquier tipo a cualquier parte del mundo. En Plantae, somos expertos en el cuidado y trato con nuestros clientes, brindando un excelente servicio para todos los que se adentren al mundo botánico.</p>
                </div>
                <div className="catalogo Centered">
                    <h2 className="headerMain">Nuestro Catálogo</h2>
                    <p className="text aboutInfo">Visita nuestro jardín botánico ó mira nuestro <Link to='/catalogo'>catálogo en línea</Link> y elije tu planta favorita desde la comodidad de tu casa, y sigue llenando de vida a tu hogar con nuetras plantas calidad</p>
                    <CheapestPlant></CheapestPlant>
                </div>
            </div>
        </div>
    )
}

export default Inicio
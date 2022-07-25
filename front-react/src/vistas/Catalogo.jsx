import React from 'react'
import Navbar from '../component/Navbar.jsx'
import CardPlantas from '../component/CardPlantas.jsx'
import './static/catalogo.css'

function Catalogo() {
  return (
    <div>
      <Navbar />
      <h2 className="catalogo">Nuestras plantas</h2>
      <CardPlantas />
    </div>
  )
}

export default Catalogo
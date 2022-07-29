import React from 'react'
import Navbar from '../component/Navbar.jsx'
import Footer from '../component/Footer.jsx'
import SearchCart from '../component/SearchCart.jsx'
import './static/buscarcart.css'

function BuscarCart() {
  return (
    <div className='SearchCartContainer'>
        <Navbar/>
        <h2 className='headerSearch'>Buscar carrito por folio</h2>
        <SearchCart></SearchCart>
        <Footer/>
    </div>
  )
}

export default BuscarCart
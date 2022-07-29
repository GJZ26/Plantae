import React from 'react'
import Navbar from '../component/Navbar.jsx'
import Footer from '../component/Footer.jsx'
import CardCart from '../component/CardCart.jsx'
import './static/cart.css'

function Cart() {

  return (
    <div className='containerCart'>
      <Navbar />

      <h2 className='cartHead'>Mi Carrito</h2>

      <CardCart/>

      <Footer />
    </div>
  )
}

export default Cart
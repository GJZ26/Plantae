import React, { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import axios from 'axios'
import '../static/cartCard.css'

function CardCart() {
    axios.defaults.withCredentials = true
    const [cart, setCart] = useState([])

    useEffect(() => { getCart() }, [])

    const getCart = () => {
        axios.get('http://localhost:8000/cart/').then((response) => {
            setCart(response.data)
        })
    }

    const deleteItem = (id) => {
        axios.delete('http://localhost:8000/cart/remove/' + id).then(window.location.reload())
    }

    const buyThis = async (id) => {
        await axios.post('http://localhost:8000/cart/buy/' + id).then((response) => {
            alert(response.data)
        }).then((res) => {
            window.location.reload()
        })
    }

    const buyAll = () => {
        cart.map((element)=>(
            axios.post('http://localhost:8000/cart/buy/' + element.id)
        )).then(window.location.reload())
    }

    if (!cart) {

        return (
            <h2 className='AlertCart'>Debes <Link to='/login'> iniciar sesión </Link>para tener un carrito</h2>
        )

    } else if (cart.length === 0) {
        return (
            <h2 className='AlertCart'>No hay nada en tu  carrito, echa un vistazo a nuestro <Link to="/catalogo">catálogo</Link>.</h2>
        )
    } else {
        return (
            <div className="cartContainer">
                {cart.map((product) => (
                    <div className="CardCart" key={product.id}>
                        <div className="imgCart" style={{ backgroundImage: `url(http://localhost:8000/${product.img_ruta})` }}></div>
                        <div className="infoCart">
                            <h3 className="nombre">{product.nombre}</h3>
                            <span className="folio">{product.folio}</span>
                            <span className='cantidad'>Cantidad: {product.cantidad}</span>
                            <button className="buy" onClick={() => (buyThis(product.id))}>Comprar</button>
                            <button className='deleteCart' onClick={() => (deleteItem(product.id))}>Eliminar</button>
                        </div>
                    </div>
                ))}
                <button className='ComprarTodo primary' onClick={() => { buyAll() }}>Comprar Todo</button>
            </div>
        )
    }
}

export default CardCart
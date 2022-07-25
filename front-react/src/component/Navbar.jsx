import React from 'react'
import '../static/navbar.css'
import axios from 'axios'
import { useEffect } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'
import { useState } from 'react'
const URI = 'http://localhost:8000/users/'

function Navbar() {

    const [user, setUser] = useState([])

    const navigate = useNavigate()

    axios.defaults.withCredentials = true

    // Verifica si hay sesiones abiertas según las cookies
    const isLoggin = () => {
        axios.get(URI + 'login').then((response) => {
            if (response.data.isLogged) {
                setUser(response.data.user)
            }
            if (window.location.pathname.includes('/admin')) {
                if (response.data.isLogged) {
                    if (response.data.user.priv !== 'admin') {
                        navigate('/')
                    }
                } else {
                    navigate('/login')
                }
            }
        })
    }

    useEffect(() => { isLoggin() }, [])

    const logout = async () => {
        axios.get('http://localhost:8000/users/logout').then((response) => {
            window.location.reload()
        }
        )
    }


    if (Object.keys(user).length === 0) {
        return (
            <div className='Navbar'>
                <Link to='/'><img className='logoLink' src="http://localhost:8000/logo.png" height='50px' alt="Plantae" /></Link>
                <div className="links">
                    <Link to='/login'><div className="botonMenu">Login</div></Link>
                    <Link to='/cart'><div className="botonMenu">{user.username}</div></Link>
                    <Link to='/catalogo'><div className="botonMenu">Catálogo</div></Link>
                </div>
            </div>
        )
    } else if (user.priv === 'admin') {
        return (
            <div className='Navbar'>
                <div className='salitos'>
                    <Link to='/'><img className='logoLink' src="http://localhost:8000/logo.png" height='50px' alt="Plantae" /></Link>
                    <div className='nombreUser'>Hola, <b>{user.username}</b>!</div>
                </div>
                <div className="links">
                    <Link to='/admin'><div className="botonMenu">Administrar</div></Link>
                    <Link to='/admin/cart'><div className="botonMenu">Buscar Carrito</div></Link>
                    <div onClick={() => (logout())} className="botonMenu">Log Out</div>
                </div>
            </div>
        )
    } else {
        return (
            <div className='Navbar'>
                <div className='salitos'>
                    <Link to='/'><img className='logoLink' src="http://localhost:8000/logo.png" height='50px' alt="Plantae" /></Link>
                    <div className='nombreUser'>Hola, <b>{user.username}</b>!</div>
                </div>
                <div className="links">
                    <Link to='/cart'><div className="botonMenu">Mi carrito</div></Link>
                    <div onClick={() => (logout())} className="botonMenu">Log Out</div>
                </div>
            </div>
        )
    }
}

export default Navbar
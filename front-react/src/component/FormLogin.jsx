// Importamos dependencias
import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import axios from 'axios'
import '../static/form.css'

const URI = 'http://localhost:8000/users/'

// Este componente renderiza el formulario de inicio de sesion
function FormLogin() {

  const navigate = useNavigate()

  // Estados para la información del login
  const [emailLog, setEmailLog] = useState('')
  const [passwordLog, setpasswordLog] = useState('')

  // Estados para la información del registro
  const [emailReg, setEmailReg] = useState('')
  const [passwordReg, setpasswordReg] = useState('')
  const [userNameReg, setUserNameReg] = useState('')

  // Declaramos el uso de credenciales para axios
  axios.defaults.withCredentials = true

  // Función para registrar nuevo usuario
  const register = (e) => {
    e.preventDefault()
    axios.post(URI + 'register', {
      username: userNameReg,
      email: emailReg,
      password: passwordReg
    }).then((response) => {
      if(response.data.register){
        alert(response.data.message)
        navigate('/login')
      }else{
        alert(response.data.message)
        navigate('/login')
      }
    })
  }

  // Función para iniciar sesión
  const login = (e) => {
    e.preventDefault()
    axios.post(URI + 'login', {
      email: emailLog,
      password: passwordLog
    }).then((response) => {
      if (response.data.login) { 
        alert(response.data.message)
        navigate('/')
      }else{
        alert(response.data.message)
      }
    })
  }

  // Verifica si hay sesiones abiertas según las cookies
  const isLoggin = () => {
    axios.get(URI + 'login').then((response) => {
      if (response.data.isLogged) {
        console.log(response.data.user.username)
      }
    })
  }

  // Verificamos si tiene alguna sesión activa con un hook
  useEffect(() => { isLoggin() }, [])

  return (
    <div className='formLogin' onSubmit={login}>
      <form className='login'>
        <h2 className='login'>Inicia Sesión</h2>

        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" onChange={(e) => { setEmailLog(e.target.value) }} />

        <label htmlFor="password">Contraseña</label>
        <input type="password" onChange={(e) => { setpasswordLog(e.target.value) }} />

        <button className='primary login' type='submit'>Iniciar Sesión</button>
      </form>

      <form className='register' onSubmit={register}>
        <h2 className='register'>Crea una nueva cuenta</h2>

        <label htmlFor="username">Nombre de Usuario</label>
        <input type="text" onChange={(e) => { setUserNameReg(e.target.value) }} />

        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" onChange={(e) => { setEmailReg(e.target.value) }} />

        <label htmlFor="password">Contraseña</label>
        <input type="password" required onChange={(e) => { setpasswordReg(e.target.value) }} />

        <button className='primary register' type='submit'>Registrarse</button>
      </form>
    </div>
  )
}

export default FormLogin
// Importamos dependencias
import React, { useEffect, useState } from 'react'
import axios from 'axios'
import '../static/form.css'

const URI = 'http://localhost:8000/users/'

// Este componente renderiza el formulario de inicio de sesion
function FormLogin() {

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
      console.log(response.data)
    })
  }

  // Función para iniciar sesión
  const login = (e) => {
    e.preventDefault()
    axios.post(URI + 'login', {
      email: emailLog,
      password: passwordLog
    }).then((response) => {
      console.log(response.data)
    })
  }

  // Verifica si hay sesiones abiertas según las cookies
  const isLoggin = () =>{
    axios.get(URI+'login').then((response)=>{
      if(response.data.isLogged){
        console.log(response.data.user)
      }
    })
  }

  // Verificamos si tiene alguna sesión activa con un hook
  useEffect(() => { isLoggin() }, [])

  return (
    <div className='formLogin' onSubmit={login}>
      <form className='login'>
        <h2>Inicia Sesión</h2>

        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" onChange={(e) => { setEmailLog(e.target.value) }} />

        <label htmlFor="password">Contraseña</label>
        <input type="password" onChange={(e) => { setpasswordLog(e.target.value) }} />

        <button type='submit'>Iniciar Sesión</button>
      </form>

      <form className='register' onSubmit={register}>
        <h2>Crea una nueva cuenta</h2>

        <label htmlFor="username">Nombre de Usuario</label>
        <input type="text" onChange={(e) => { setUserNameReg(e.target.value) }} />

        <label htmlFor="email">Correo Electrónico</label>
        <input type="email" onChange={(e) => { setEmailReg(e.target.value) }} />

        <label htmlFor="password">Contraseña</label>
        <input type="password" onChange={(e) => { setpasswordReg(e.target.value) }} />

        <button type='submit'>Iniciar Sesión</button>
      </form>
    </div>
  )
}

export default FormLogin
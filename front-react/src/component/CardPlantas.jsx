// Importamos librerias
import axios from 'axios'
import { useState, useEffect } from 'react'

// Importamos hoja de estilo para el componente
import '../static/cardPlantas.css'

// Declaramos constantes
const URI = 'http://localhost:8000/plantae/catalogo/'
const URI_USER = 'http://localhost:8000/users/'
const URI_CART = 'http://localhost:8000/cart/'


// Creamos el componente principal para el menú de las plantas
const CardPlantas = () => {

    // Creamos los useState
    const [plants, setPlanta] = useState([])
    const [idUser, setIdUser] = useState(0)
    const [amount, setAmount] = useState(0)
    const [limitStock, setLimitStock] = useState(0)

    // Leemos cookies
    axios.defaults.withCredentials = true;
    useEffect(() => {
        axios.get(URI_USER + 'login').then((response) => {
            if (response.data.isLogged) {
                setIdUser(response.data.user.id)
            }
        })
    }, [])

    // Esto es un hook, le decimons a react que esto necesita hacer algo tras ser renderizado
    useEffect(() => { getPlanta() }, [])

    // Procedimiento para mostrar los planta
    const getPlanta = async () => {
        const res = await axios.get(URI)
        setPlanta(res.data)
    }

    // Método para añadir productos al carrito del usuario
    const addtoCart = async (e, idProduct) => {
        e.preventDefault()
        if (idUser === 0) {
            console.log('Debes Iniciar sesión para abrir tu carrito')
        } else {
            await axios.post(`${URI_CART}add`, {
                idUser: idUser,
                idPlant: idProduct,
                cantidad: amount,
                limit: limitStock
            }).then((response) => (console.log(response.data)))
        }
    }

    // Esta parte genera las cartas para el menú
    return (
        <div className="Cardcontainer">
            {/* Por cada elemento del retorno de la consulta, crea una card independiente */}
            {plants.map((plant) => ( // Nota: Al estar adentro de un elemento jsx, las funciones flechas se escribem () => () en vez de ()=>{}

                <div key={plant.id} className="cardPlant">
                    <div style={{ backgroundImage: `url(http://localhost:8000/${plant.img_ruta})` }} alt={plant.img_ruta} className='imgCard' />
                    <div className="infoCard">
                        <h5 className="cardTitle">{plant.nombre}</h5>
                        <p className="cardNombreC">{plant.nombre_cientifico}</p>
                        <p className="cardText">
                            {plant.descripcion}
                        </p>
                        <p className="cardPrice"><strong className="price">Precio: </strong><span className="price">${plant.precio}.00 MXN</span></p>
                        <p className="cardStock"><strong className="stock">Disponible: </strong><span className="stock">{plant.stock}</span></p>
                        <form onSubmit={(e) => (addtoCart(e, plant.id))}>
                            <label htmlFor="amountCart" className="amountCart">Cantidad</label>
                            <input type="number" onChange={(e) => (setAmount(e.target.value))} min='1' max={plant.stock} />
                            <button type="submit" className="cartBtn" onClick={()=>(setLimitStock(plant.stock))}>Añadir a Carrito</button>
                        </form>
                    </div>
                </div>

            ))}
        </div>
    );
}

export default CardPlantas
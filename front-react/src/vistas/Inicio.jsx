import React from 'react'
import './static/Inicio.css'

// Importamos las cartas de las plantas
import CardPlantas from '../component/CardPlantas.jsx'

function Inicio() {
    return (
        <div className="render">
            <header>
                <div className="contenedor-menu">
                    <div className="image-menu">
                    </div>
                    <div className="menu1">
                        <nav className="menu">
                            <ul>
                                <li><a href="/">Home</a></li>
                                <li><a href="#acerca-de">Acerca de</a>
                                </li>
                                <li><a href="#">Categorias</a><ul>
                                    <li><a href="sombra.html">Sombra</a></li>
                                    <li><a href="acuaticas.html">Acuaticas</a></li>
                                    <li><a href="interior.html">interior</a></li>
                                    <li><a href="musica.html">Musica</a></li>
                                    <li><a href="tropicales.html">Tropicales</a></li>
                                    <li><a href="sol.html">Sol</a></li>
                                </ul></li>
                                <li><a href="/admin">Administrar</a></li>
                            </ul>
                        </nav>
                    </div>
                </div>

                <div className="logo-menu">
                    <div className="contenedor-texto">
                        <div className="texto">
                            <h1 className="nombre">Bienvenidos a Plantae</h1>
                            <h2 className="profesion">Tu tienda de confianza</h2>
                        </div>
                    </div>
                </div>
            </header>

            <section className="main">
                <section className="acerca-de">
                    <div className="contenedor">
                        <div className="texto">
                            <h3 className="titulo">¿Qué son las plantas?</h3>
                            <p>Las plantas son los seres vivos miembros del reino vegetal o phylum plantae. Se trata de organismos autótrofos, desprovistos de capacidad de movimiento, y compuestos principalmente de celulosa. Los árboles, la maleza, el césped, las algas y los arbustos, son todos miembros de este reino de la vida.</p>
                            <br />
                        </div>
                    </div>
                </section>

                <section className="trabajos">
                    <div className="contenedor">
                        <h3 className="titulo">Nuestras Plantas</h3>

                        <div className="contenedor-trabajos">
                            <CardPlantas />
                        </div>

                    </div>
                </section>

            </section>
            <footer>
                <div className="footer-general">
                    <div className="contenedor">
                        <div className="footer-datos">
                            <div className="redes-iconos">
                                <a href="#"><img src={"./static/Images/redes/1.png"} alt="" /></a>
                                <a href="#"><img src={"./static/Images/redes/2.png"} alt="" /></a>
                                <a href="#"><img src={"./static/Images/redes/3.png"} alt="" /></a>
                            </div>
                            <div className="redes-texto">
                                <a href="#">Instagram</a>
                                <a href="#">Twitter</a>
                                <a href="#">Facebook</a>
                            </div>
                            <div className="Acerca-de" id="acerca-de">
                                <p>Acerca de</p>
                                <p>Somos una pagina que se dedica a la venta de plantas y manejamos diferentes categorias</p>
                            </div>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}

export default Inicio
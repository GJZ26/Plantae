import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css'

// Importamos los componentes
import CrearPlanta from './component/CreateNewPlant.jsx';
import CardAdminPlant from './component/AdminCardPlants';
import EditPlant from './component/EditPlant';
import Inicio from './vistas/Inicio.jsx';
import Login from './vistas/Login.jsx';
import Catalogo from './vistas/Catalogo.jsx';
import Cart from './vistas/Cart.jsx';
import BuscarCart from './vistas/BuscarCart';
console.log('Proyecto Integrador - Julio 2022. Hecho por Adolfo G. Juárez')
function App() {
  return (
    <div className="App">
      <BrowserRouter /* Indispensable para el redireccionamiento */ >
        <Routes>
          <Route path='/login' element={<Login />} />
          <Route path='/' element={<Inicio />} />
          <Route path='/admin/create' element={<CrearPlanta />} />
          <Route path='/admin' element={<CardAdminPlant />} />
          <Route path='/admin/edit/:id' element={<EditPlant />} />
          <Route path='/admin/cart' element={<BuscarCart />} />
          <Route path='/cart' element={<Cart />}></Route>
          <Route path='/catalogo' element={<Catalogo />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

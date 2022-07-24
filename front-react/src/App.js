import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Importamos los componentes
import CrearPlanta from './component/CreateNewPlant.jsx';
import CardAdminPlant from './component/AdminCardPlants';
import EditPlant from './component/EditPlant';
import Inicio from './vistas/Inicio.jsx';
import FormLogin from './component/FormLogin.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter /* Indispensable para el redireccionamiento */ >
        <Routes>
          <Route path='/login' element={<FormLogin/>} />
          <Route path='/' element={<Inicio />} />
          <Route path='/admin/create' element={<CrearPlanta />} />
          <Route path='/admin' element={<CardAdminPlant />} />
          <Route path='/admin/edit/:id' element={<EditPlant />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

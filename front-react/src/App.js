import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';

// Importamos los componentes
import CrearPlanta from './component/CreateNewPlant.jsx';
import MostrarPlantas from './component/MenuPlantas.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter /* Indispensable para el redireccionamiento */ >
        <Routes>
          <Route path='/' element={< MostrarPlantas />} />
          <Route path='/create' element={<CrearPlanta/>} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

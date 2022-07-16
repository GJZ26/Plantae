import { BrowserRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import MostrarPlantas from './component/MenuPlantas.jsx';

function App() {
  return (
    <div className="App">
      <BrowserRouter /* Indispensable para el redireccionamiento */ >
        <Routes>
          <Route path='/' element={< MostrarPlantas />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;

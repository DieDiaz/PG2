import './App.css';
import { useState } from 'react';
import Inicio from './Imagenes/Inicio';
import Login from './Imagenes/Login';
 

function App() {
  const [activeSection, setActiveSection] = useState('');

  const handleNavigation = (section) => {
    setActiveSection(section);
  };

  return (
    <div className="App">
      <header className="App-header">
        <nav className="navbar">
          <ul className="nav-list">
            <li className="nav-item"><a href="#home" onClick={() => handleNavigation('Inicio')}>Inicio</a></li>
            <li className="nav-item"><a href="#info" onClick={() => handleNavigation('Anuncios')}>Anuncios</a></li>
            <li className="nav-item"><a href="#fecha" onClick={() => handleNavigation('Calendario')}>Calendario</a></li>
            <li className="nav-item"><a href="#material" onClick={() => handleNavigation('Material')}>Material</a></li>
            <div className="nav-spacer"></div>
            <li className="nav-item"><a href="#option1" onClick={() => handleNavigation('Ingreso')}>Ingreso</a></li>
            <li className="nav-item"><a href="#option2" onClick={() => handleNavigation('Registro')}>Registro</a></li>
          </ul>
        </nav>
        {activeSection === 'Inicio' && <Inicio />}
        {activeSection === 'Ingreso' && <Login />}
      </header>
    </div>
  );
}

export default App;
import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBox, faCalendar, faBullhorn, faChartBar, faFileAlt, faLightbulb } from '@fortawesome/free-solid-svg-icons';
import './Usuarios.css'; // Asegúrate de tener este archivo CSS

function Usuario() {
  return (
    <div className='fondo'>
      <div className='menu'>
        <a href="/caja" className='menu-item'>
          <FontAwesomeIcon icon={faBox} size='10x' />
          <span>Caja</span>
        </a>
        <a href="/calendario" className='menu-item'>
          <FontAwesomeIcon icon={faCalendar} size='10x' />
          <span>Calendario</span>
        </a>
        <a href="/anuncios" className='menu-item'>
          <FontAwesomeIcon icon={faBullhorn} size='10x' />
          <span>Anuncios</span>
        </a>
        <a href="/estadisticas" className='menu-item'>
          <FontAwesomeIcon icon={faChartBar} size='10x' />
          <span>Estadísticas</span>
        </a>
        <a href="/material" className='menu-item'>
          <FontAwesomeIcon icon={faFileAlt} size='10x' />
          <span>Material</span>
        </a>
        <a href="/propuesta" className='menu-item'>
          <FontAwesomeIcon icon={faLightbulb} size='10x' />
          <span>Propuesta</span>
        </a>
      </div>
    </div>
  );
}

export default Usuario;

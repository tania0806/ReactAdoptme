import React from 'react';
import './Sidebar.css';  // Asegúrate de tener un archivo de estilos para la barra lateral

const Sidebar = ({ showSidebar, setShowSidebar }) => {
  return (
    <div className={`sidebar ${showSidebar ? 'show' : ''}`}>
      <button onClick={() => setShowSidebar(!showSidebar)}>Toggle Sidebar</button>
      <ul>
        <li>Inicio</li>
        <li>Adoptar</li>
        <li>Contactar</li>
      </ul>
    </div>
  );
};

export default Sidebar;

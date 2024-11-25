import React, { useState, useEffect } from 'react';
import './Mascotas.css';
import "./image"
import BarraNavegacion from './Mascotas.jsx'; // Importas el componente de la barra de navegación

// Datos de las 40 mascotas (puedes agregar más imágenes y descripciones)
const mascotasData = [
  {
    id: 1,
    nombre: "Perro 1",
    imagen: require("./image/salvajes.jpg"), // Asegúrate de tener las imágenes en la carpeta src/image
    descripcion: "Este es un perro muy juguetón.",
  },
  {
    id: 2,
    nombre: "Gato 1",
    imagen: require("./image/mascotas.jpg"),
    descripcion: "Este gato es tranquilo y cariñoso.",
  },
  // Aquí puedes agregar las otras 38 mascotas
];

const Mascotas = () => {
  const [mascotas, setMascotas] = useState(mascotasData);
  const [seleccionada, setSeleccionada] = useState(null); // Estado para la mascota seleccionada

  // Función para manejar la selección de una mascota
  const seleccionarMascota = (mascota) => {
    setSeleccionada(mascota);
  };

  // Función para adoptar una mascota
  const adoptarMascota = () => {
    alert(`¡Has adoptado a ${seleccionada.nombre}!`);
    setSeleccionada(null); // Cerrar la vista de detalle después de adoptar
  };

  return (
    <div className="mascotas-container">
      {BarraNavegacion}
      <div className="nav-bar">
        <div className="nav-items">
          <div className="nav-item">
            <span>Ver Perfil</span>
          </div>
          <div className="nav-item">
            <span>Crear Evento</span>
          </div>
          <div className="nav-item">
            <span>Estado</span>
          </div>
          <div className="nav-item">
            <span>Configuración</span>
          </div>
          <div className="nav-item">
            <span>Cerrar Sesión</span>
          </div>
          <div className="nav-item">
            <span>Mis Mascotas</span>
          </div>
          <div className="nav-item">
            <span>Notificaciones</span>
          </div>
          <div className="nav-item">
            <span>Ayuda</span>
          </div>
        </div>
      </div>

      {/* Cuadrícula de mascotas */}
      <div className="mascotas-grid">
        {mascotas.map((mascota) => (
          <div
            key={mascota.id}
            className="mascota-item"
            onClick={() => seleccionarMascota(mascota)} // Al hacer clic, se selecciona la mascota
          >
            <img src={mascota.imagen} alt={mascota.nombre} />
            <div className="mascota-info">
              <h3>{mascota.nombre}</h3>
            </div>
          </div>
        ))}
      </div>

      {/* Detalle de la mascota seleccionada */}
      {seleccionada && (
        <div className="mascota-detalle">
          <img src={seleccionada.imagen} alt={seleccionada.nombre} />
          <div className="mascota-detalle-info">
            <h2>{seleccionada.nombre}</h2>
            <p>{seleccionada.descripcion}</p>
            <button className="adoptar-btn" onClick={adoptarMascota}>
              Adoptar
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default Mascotas;

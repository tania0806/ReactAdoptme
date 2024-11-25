import { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faUser,
  faPlusCircle,
  faHome,
  faCog,
  faBell,
  faPaw,
  faHeadset,
  faDoorOpen,
  faQuestionCircle,
  faChartLine,
  faClipboard,
  faHeart,
} from '@fortawesome/free-solid-svg-icons';
import './Mascotas.css';

const Mascotas = () => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div className="mascotas-container">
      <div
        className={`nav-bar ${isHovered ? 'nav-bar-hovered' : ''}`}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        <div className="nav-items">
          <div className="nav-item">
            <FontAwesomeIcon icon={faUser} />
            {isHovered && <span>Ver Perfil</span>}
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faPlusCircle} />
            {isHovered && <span>Crear Evento</span>}
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faHome} />
            {isHovered && <span>Estado</span>}
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faCog} />
            {isHovered && <span>Configuración</span>}
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faBell} />
            {isHovered && <span>Notificaciones</span>}
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faPaw} />
            {isHovered && <span>Mis Mascotas</span>}
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faHeadset} />
            {isHovered && <span>Soporte</span>}
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faHeart} />
            {isHovered && <span>Favoritos</span>}
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faClipboard} />
            {isHovered && <span>Tareas</span>}
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faChartLine} />
            {isHovered && <span>Estadísticas</span>}
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faQuestionCircle} />
            {isHovered && <span>Ayuda</span>}
          </div>
          <div className="nav-item">
            <FontAwesomeIcon icon={faDoorOpen} />
            {isHovered && <span>Cerrar Sesión</span>}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Mascotas;

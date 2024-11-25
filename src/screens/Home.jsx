import React, { useState } from "react";
import { FaUser, FaCalendarPlus, FaSignOutAlt, FaCog, FaChartBar, FaInfoCircle, FaSearch } from "react-icons/fa";
import "../screens/Style.css"; 

const Home = () => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState("");

  const handleMouseEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    setIsDropdownOpen(false);
  };

  const handleSearch = () => {
    alert("Búsqueda exitosa");
    setSearchQuery(""); 
  };

  return (
    <div>
      <nav className="navbar">
        <h1 style={{ margin: 0 }}>Mi Aplicación</h1>
        <div style={{ display: "flex", alignItems: "center", gap: "20px" }}>
          {}
          <div className="search-bar">
            <input
              type="text"
              placeholder="Buscar..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
            />
            <button onClick={handleSearch}>
              <FaSearch />
            </button>
          </div>

          {}
          <div
            className="dropdown"
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <button style={{ background: "transparent", border: "none", color: "#fff", cursor: "pointer", fontSize: "18px" }}>
              Menú
            </button>
            {isDropdownOpen && (
              <ul className="dropdown-menu">
                <li>
                  <FaUser style={{ marginRight: "10px" }} /> Ver Perfil
                </li>
                <li>
                  <FaCalendarPlus style={{ marginRight: "10px" }} /> Crear Evento
                </li>
                <li>
                  <FaSignOutAlt style={{ marginRight: "10px" }} /> Cerrar Sesión
                </li>
                <li>
                  <FaCog style={{ marginRight: "10px" }} /> Configuración
                </li>
                <li>
                  <FaChartBar style={{ marginRight: "10px" }} /> Ver Estatus
                </li>
                <li>
                  <FaInfoCircle style={{ marginRight: "10px" }} /> Ayuda
                </li>
              </ul>
            )}
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Home;

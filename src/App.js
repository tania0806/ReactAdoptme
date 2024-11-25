import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home"; // Asegúrate de que la ruta sea correcta
import Mascotas from "./screens/mascotas/Mascotas"

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/home" element={<Home />} />
        <Route path="/mascotas" element={<Mascotas />} />
      </Routes>
    </Router>
  );
};

export default App;

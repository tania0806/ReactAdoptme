import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./screens/Home"; // Asegúrate de que la ruta sea correcta
import Mascotas from "./screens/mascotas/Mascotas";
import Profile from './screens/profile/Profile';
import Favoritos from './screens/favoritos/Favoritos'

const App = () => {
  return (
    <Router>
    <Routes> 
      <Route path="/home" element={<Home />} /> {Home}
      <Route path="/mascotas" element={<Mascotas />} />{Mascotas}
      <Route path="/profile" element={<Profile />} />{Profile}
      <Route path="/favoritos" element={<Favoritos />} />{Favoritos}

    </Routes>
  </Router>
  );
};

export default App;

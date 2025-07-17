// src/routes/AppRouter.jsx
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import App from '../App';
import Home from '../pages/Home';
import AdminPage from '../pages/AdminPage';
import ListaUsuariosPage from '../pages/ListaUsuariosPage';
import EditarUsuarioPage from '../pages/EditarUsuarioPage';
import RegistrarHotelPage from '../pages/RegistrarHotelPage';
import ListaHotelesPage from '../pages/ListaHotelesPage';
import RegistrarHabitacionPage from '../pages/RegistrarHabitacionPage';
import ListaHabitacionesPage from '../pages/ListaHabitacionesPage';
import ListaAcomodacionesPermitidasPage from '../pages/ListaAcomodacionesPermitidasPage';

function AppRouter() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<App><Home /></App>} />
        <Route path="/admin" element={<App><AdminPage /></App>} />
        <Route path="/usuarios" element={<App><ListaUsuariosPage /></App>} />
        <Route path="/usuarios/:id/editar" element={<App><EditarUsuarioPage /></App>} /> {/* ✅ Ruta dinámica */}
        <Route path="/registrar-hotel" element={<App><RegistrarHotelPage /></App>} />
        <Route path="/hoteles" element={<App><ListaHotelesPage /></App>} />
        <Route path="/registrar-habitacion" element={<App><RegistrarHabitacionPage /></App>} />
        <Route path="/habitaciones" element={<App><ListaHabitacionesPage /></App>} />
        <Route path="/acomodaciones/permitidas" element={<App><ListaAcomodacionesPermitidasPage /></App>} />
        <Route path="*" element={<App><div className="container mt-5">Ruta no encontrada</div></App>} /> {/* Catch-all */}

      </Routes>
    </Router>
  );
}

export default AppRouter;

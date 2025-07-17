import React from 'react';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png'; // Asegúrate que este archivo exista

const Header = () => {
  return (
    <header className="shadow-sm">
      <nav className="navbar navbar-expand-lg" style={{ backgroundColor: '#2C5C74' }}>
        <div className="container-fluid">
          <Link className="navbar-brand d-flex align-items-center" to="/" style={{ color: '#fff', fontSize: '24px' }}>
            <img src={logo} alt="Logo Decameron" height="40"  className="me-2" />
          </Link>

          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav ms-auto">
              <li className="nav-item">
                <Link className="nav-link" to="/hoteles" style={{ color: '#fff' }}>Hoteles</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/habitaciones" style={{ color: '#fff' }}>Habitaciones</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/acomodaciones/permitidas" style={{ color: '#fff' }}>Acomodaciones</Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/usuarios" style={{ color: '#fff' }}>Usuarios</Link>
              </li>

              <li className="nav-item dropdown">
                <Link
                  className="nav-link dropdown-toggle"
                  to="#"
                  id="adminDropdown"
                  role="button"
                  data-bs-toggle="dropdown"
                  aria-expanded="false"
                  style={{ color: '#fff' }}
                >
                  Registro
                </Link>
                <ul className="dropdown-menu dropdown-menu-end">
                  <li><Link className="dropdown-item" to="/admin">Usuarios</Link></li>
                  <li><Link className="dropdown-item" to="/registrar-hotel">Hoteles</Link></li>
                  <li><Link className="dropdown-item" to="/registrar-habitacion">Habitaciones</Link></li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;

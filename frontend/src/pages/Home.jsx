import React from 'react';
import img1 from '../assets/hotel1.jpg';
import img2 from '../assets/hotel2.jpg';
import img3 from '../assets/hotel3.jpg';

const Home = () => {
  return (
    <div className="container mt-4">
      <h2 className="text-center mb-2"><strong>Bienvenido a SIREH</strong></h2>
      <h5 className="text-center mb-5">Sistema de Registro Hotelero</h5>

      <div className="row g-4">
        <div className="col-md-4">
          <div className="card shadow">
            <img src={img1} alt="Hotel 1" className="card-img-top" />
            <div className="card-body text-center">
              <h6 className="card-title">Gestión de Hoteles</h6>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <img src={img2} alt="Hotel 2" className="card-img-top" />
            <div className="card-body text-center">
              <h6 className="card-title">Habitaciones y Acomodaciones</h6>
            </div>
          </div>
        </div>

        <div className="col-md-4">
          <div className="card shadow">
            <img src={img3} alt="Hotel 3" className="card-img-top" />
            <div className="card-body text-center">
              <h6 className="card-title">Usuarios y Administración</h6>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;

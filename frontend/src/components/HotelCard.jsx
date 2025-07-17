
import React from 'react';

const HotelCard = ({ hotel }) => {
  return (
    <div className="card" style={{ width: '18rem' }}>
      <img src="https://via.placeholder.com/150" className="card-img-top" alt={hotel.nombre} />
      <div className="card-body">
        <h5 className="card-title">{hotel.nombre}</h5>
        <p className="card-text">{hotel.direccion}</p>
        <a href={`/hoteles/${hotel.id}`} className="btn btn-primary">Ver más</a>
      </div>
    </div>
  );
};

export default HotelCard;
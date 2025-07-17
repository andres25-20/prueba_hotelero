import React, { useState } from 'react';
import { createHotel } from '../api/axios';

const HotelForm = ({ onHotelCreated }) => {
  const [nombre, setNombre] = useState('');
  const [numeroHabitaciones, setNumeroHabitaciones] = useState('');
  const [mensaje, setMensaje] = useState(null);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const nuevoHotel = { nombre, numero_habitaciones: numeroHabitaciones };
      await createHotel(nuevoHotel);
      setMensaje('Hotel registrado correctamente');
      setNombre('');
      setNumeroHabitaciones('');
      if (onHotelCreated) onHotelCreated();
    } catch (error) {
      setMensaje('Error al registrar hotel');
      console.error(error);
    }
  };

  return (
    <div className="card p-4 mb-4">
      <h5>Registrar nuevo hotel</h5>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre del hotel</label>
          <input
            type="text"
            className="form-control"
            value={nombre}
            onChange={(e) => setNombre(e.target.value)}
            required
          />
        </div>
        <div className="mb-3">
          <label>Número máximo de habitaciones</label>
          <input
            type="number"
            className="form-control"
            value={numeroHabitaciones}
            onChange={(e) => setNumeroHabitaciones(e.target.value)}
            required
          />
        </div>
        <button type="submit" className="btn btn-primary">Registrar</button>
        {mensaje && <div className="mt-2 alert alert-info">{mensaje}</div>}
      </form>
    </div>
  );
};

export default HotelForm;

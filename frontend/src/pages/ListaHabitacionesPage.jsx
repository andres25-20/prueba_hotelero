import React, { useEffect, useState } from 'react';
import { getHabitaciones } from '../api/habitacionesApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListaHabitacionesPage = () => {
  const [habitaciones, setHabitaciones] = useState([]);

  useEffect(() => {
    const cargarHabitaciones = async () => {
      try {
        const res = await getHabitaciones();
        setHabitaciones(res.data);
      } catch (error) {
        toast.error('Error al cargar las habitaciones');
      }
    };

    cargarHabitaciones();
  }, []);

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2 className="mb-4">Habitaciones Registradas</h2>

      {habitaciones.length === 0 ? (
        <p>No hay habitaciones registradas.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover" style={{ backgroundColor: '#2C5C74' }}>
            <thead className="table-dark" style={{ backgroundColor: '#2C5C74' }}>
              <tr>
                <th id="styl-cel">#</th>
                <th id="styl-cel">Hotel</th>
                <th id="styl-cel">Tipo de Habitación</th>
                <th id="styl-cel">Acomodación</th>
                <th id="styl-cel">Cantidad</th>
              </tr>
            </thead>
            <tbody>
              {habitaciones.map((h, index) => (
                <tr key={h.id}>
                  <td>{index + 1}</td>
                  <td>{h.hotel?.nombre ?? 'Sin hotel'}</td>
                  <td>{h.tipo_habitacion?.nombre ?? 'Sin tipo'}</td>
                  <td>{h.acomodacion?.nombre ?? 'Sin acomodación'}</td>
                  <td>{h.cantidad}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListaHabitacionesPage;

import React, { useEffect, useState } from 'react';
import { getHoteles } from '../api/hotelesApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListaHotelesPage = () => {
  const [hoteles, setHoteles] = useState([]);

  useEffect(() => {
    const cargarHoteles = async () => {
      try {
        const response = await getHoteles();
        setHoteles(response.data);
      } catch (error) {
        toast.error('Error al cargar los hoteles');
      }
    };

    cargarHoteles();
  }, []);

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2 className="mb-4">Hoteles Registrados</h2>

      {hoteles.length === 0 ? (
        <p>No hay hoteles registrados.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th id="styl-cel">#</th>
                <th id="styl-cel">Nombre</th>
                <th id="styl-cel">NIT</th>
                <th id="styl-cel">Dirección</th>
                <th id="styl-cel">Ciudad</th>
                <th id="styl-cel">Habitaciones</th>
                <th id="styl-cel">Gerente</th>
              </tr>
            </thead>
            <tbody>
              {hoteles.map((hotel, index) => (
                <tr key={hotel.id}>
                  <td>{index + 1}</td>
                  <td>{hotel.nombre}</td>
                  <td>{hotel.nit}</td>
                  <td>{hotel.direccion}</td>
                  <td>{hotel.ciudad?.nombre ?? 'Sin ciudad'}</td>
                  <td>{hotel.numero_habitaciones}</td>
                  <td>{hotel.gerente?.nombre ?? 'Sin gerente'}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListaHotelesPage;

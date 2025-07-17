import React, { useEffect, useState } from 'react';
import {
  getAcomodacionesPermitidas,
  getAcomodacionesConReglas,
} from '../api/acomodacionesApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ListaAcomodacionesPermitidasPage = () => {
  const [permitidas, setPermitidas] = useState([]);
  const [conReglas, setConReglas] = useState([]);

  useEffect(() => {
    const cargar = async () => {
      try {
        const [resPermitidas, resConReglas] = await Promise.all([
          getAcomodacionesPermitidas(),
          getAcomodacionesConReglas(),
        ]);
        setPermitidas(resPermitidas.data);
        setConReglas(resConReglas.data);
      } catch {
        toast.error('Error al cargar acomodaciones');
      }
    };

    cargar();
  }, []);

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2 className="mb-4">Acomodaciones Permitidas</h2>

      {permitidas.length === 0 ? (
        <p>No hay acomodaciones permitidas registradas.</p>
      ) : (
        <div className="table-responsive mb-5">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th id="styl-cel">#</th>
                <th id="styl-cel">Acomodación</th>
              </tr>
            </thead>
            <tbody>
              {permitidas.map((a, index) => (
                <tr key={a.id}>
                  <td>{index + 1}</td>
                  <td>{a.nombre}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}

      <h2 className="mb-4">Reglas de Acomodación</h2>

      {conReglas.length === 0 ? (
        <p>No hay reglas de acomodación registradas.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-bordered table-hover">
            <thead className="table-dark">
              <tr>
                <th id="styl-cel">Acomodación</th>
                <th id="styl-cel">Tipos de Habitación Permitidos</th>
              </tr>
            </thead>
            <tbody>
              {conReglas.map((a) => (
                <tr key={a.id}>
                  <td>{a.nombre}</td>
                  <td>
                    {a.tipos_permitidos && a.tipos_permitidos.length > 0
                      ? a.tipos_permitidos.map(t => t.nombre).join(', ')
                      : 'Sin reglas asociadas'}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default ListaAcomodacionesPermitidasPage;

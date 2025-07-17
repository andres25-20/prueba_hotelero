import React, { useEffect, useState } from 'react';
import { createHotel, getCiudades, getUsuarios } from '../api/hotelesApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FaHotel } from 'react-icons/fa';

const RegistrarHotelPage = () => {
  const [hotel, setHotel] = useState({
    nombre: '',
    direccion: '',
    ciudad_id: '',
    nit: '',
    numero_habitaciones: 1,
    gerente_id: ''
  });

  const [ciudades, setCiudades] = useState([]);
  const [usuarios, setUsuarios] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const [resCiudades, resUsuarios] = await Promise.all([getCiudades(), getUsuarios()]);
        setCiudades(resCiudades.data);
        setUsuarios(resUsuarios.data);
      } catch {
        toast.error('Error al cargar ciudades o usuarios');
      }
    };
    cargarDatos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setHotel(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      await createHotel(hotel);
      toast.success('🏨 Hotel registrado con éxito');
      setHotel({ nombre: '', direccion: '', ciudad_id: '', nit: '', numero_habitaciones: 1, gerente_id: '' });
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors);
        toast.error('❌ Error de validación');
      } else {
        toast.error('❌ Error al registrar hotel');
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <ToastContainer />
      <div className="card p-4 shadow" style={{ minWidth: '400px', maxWidth: '90%' }}>
        <div className="text-center mb-3">
          <FaHotel size={40} className="text-primary" />
          <h4 className="mt-2">Registrar Hotel</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Nombre</label>
            <input type="text" name="nombre" className={`form-control ${errors.nombre ? 'is-invalid' : ''}`} value={hotel.nombre} onChange={handleChange} />
            {errors.nombre && <div className="invalid-feedback">{errors.nombre[0]}</div>}
          </div>
          <div className="mb-3">
            <label>Dirección</label>
            <input type="text" name="direccion" className={`form-control ${errors.direccion ? 'is-invalid' : ''}`} value={hotel.direccion} onChange={handleChange} />
            {errors.direccion && <div className="invalid-feedback">{errors.direccion[0]}</div>}
          </div>
          <div className="mb-3">
            <label>Ciudad</label>
            <select name="ciudad_id" className={`form-select ${errors.ciudad_id ? 'is-invalid' : ''}`} value={hotel.ciudad_id} onChange={handleChange}>
              <option value="">Seleccionar ciudad</option>
              {ciudades.map(c => <option key={c.id} value={c.id}>{c.nombre}</option>)}
            </select>
            {errors.ciudad_id && <div className="invalid-feedback">{errors.ciudad_id[0]}</div>}
          </div>
          <div className="mb-3">
            <label>NIT</label>
            <input type="text" name="nit" className={`form-control ${errors.nit ? 'is-invalid' : ''}`} value={hotel.nit} onChange={handleChange} />
            {errors.nit && <div className="invalid-feedback">{errors.nit[0]}</div>}
          </div>
          <div className="mb-3">
            <label>Número de Habitaciones</label>
            <input type="number" name="numero_habitaciones" min="1" className={`form-control ${errors.numero_habitaciones ? 'is-invalid' : ''}`} value={hotel.numero_habitaciones} onChange={handleChange} />
            {errors.numero_habitaciones && <div className="invalid-feedback">{errors.numero_habitaciones[0]}</div>}
          </div>
          <div className="mb-3">
            <label>Gerente (opcional)</label>
            <select name="gerente_id" className="form-select" value={hotel.gerente_id} onChange={handleChange}>
              <option value="">Seleccionar gerente</option>
              {usuarios.map(u => (
                <option key={u.id} value={u.id}>
                  {u.nombre} ({u.email})
                </option>
              ))}
            </select>
          </div>
          <div className="d-grid">
            <button className="btn btn-primary" type="submit">Registrar Hotel</button>
          </div>
        </form>
        <div className="d-grid mt-3">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => navigate('/hoteles')}
          >
            Ver lista de hoteles
          </button>
        </div>
      </div>
    </div>
  );
};

export default RegistrarHotelPage;

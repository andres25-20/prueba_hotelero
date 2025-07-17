import React, { useEffect, useState } from 'react';
import {
  createHabitacion,
  getHoteles,
  getTiposHabitacion,
  getAcomodacionesPorTipo,
} from '../api/habitacionesApi';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useNavigate } from 'react-router-dom';
import { FaBed } from 'react-icons/fa'; // Icono de cama

const RegistrarHabitacionPage = () => {
  const [form, setForm] = useState({
    hotel_id: '',
    tipo_habitacion_id: '',
    acomodacion_id: '',
    cantidad: 1,
  });

  const [hoteles, setHoteles] = useState([]);
  const [tipos, setTipos] = useState([]);
  const [acomodaciones, setAcomodaciones] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const [resHoteles, resTipos] = await Promise.all([
          getHoteles(),
          getTiposHabitacion(),
        ]);
        setHoteles(resHoteles.data);
        setTipos(resTipos.data);
      } catch (error) {
        toast.error('Error al cargar hoteles o tipos de habitación');
      }
    };
    cargarDatos();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleTipoChange = async (e) => {
    const tipoId = e.target.value;
    setForm((prev) => ({ ...prev, tipo_habitacion_id: tipoId, acomodacion_id: '' }));

    try {
      const res = await getAcomodacionesPorTipo(tipoId);
      setAcomodaciones(res.data);
    } catch {
      toast.error('Error al cargar acomodaciones permitidas');
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      await createHabitacion(form);
      toast.success('✅ Habitación registrada con éxito');
      setForm({
        hotel_id: '',
        tipo_habitacion_id: '',
        acomodacion_id: '',
        cantidad: 1,
      });
      setAcomodaciones([]);
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors || {});
        toast.error(error.response.data.message || '❌ Error de validación');
      } else {
        toast.error('❌ Error al registrar habitación');
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light">
      <ToastContainer />
      <div className="card p-4 shadow" style={{ minWidth: '400px', maxWidth: '90%' }}>
        <div className="text-center mb-3">
          <FaBed size={40} className="text-primary" />
          <h4 className="mt-2">Registrar Habitación</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label>Hotel</label>
            <select
              name="hotel_id"
              className={`form-select ${errors.hotel_id ? 'is-invalid' : ''}`}
              value={form.hotel_id}
              onChange={handleChange}
              required
            >
              <option value="">Seleccionar hotel</option>
              {hoteles.map((h) => (
                <option key={h.id} value={h.id}>
                  {h.nombre}
                </option>
              ))}
            </select>
            {errors.hotel_id && <div className="invalid-feedback">{errors.hotel_id[0]}</div>}
          </div>

          <div className="mb-3">
            <label>Tipo de Habitación</label>
            <select
              name="tipo_habitacion_id"
              className={`form-select ${errors.tipo_habitacion_id ? 'is-invalid' : ''}`}
              value={form.tipo_habitacion_id}
              onChange={handleTipoChange}
              required
            >
              <option value="">Seleccionar tipo</option>
              {tipos.map((t) => (
                <option key={t.id} value={t.id}>
                  {t.nombre}
                </option>
              ))}
            </select>
            {errors.tipo_habitacion_id && (
              <div className="invalid-feedback">{errors.tipo_habitacion_id[0]}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Acomodación</label>
            <select
              name="acomodacion_id"
              className={`form-select ${errors.acomodacion_id ? 'is-invalid' : ''}`}
              value={form.acomodacion_id}
              onChange={handleChange}
              required
              disabled={acomodaciones.length === 0}
            >
              <option value="">
                {acomodaciones.length === 0
                  ? 'Seleccione tipo primero'
                  : 'Seleccionar acomodación'}
              </option>
              {acomodaciones.map((a) => (
                <option key={a.id} value={a.id}>
                  {a.nombre}
                </option>
              ))}
            </select>
            {errors.acomodacion_id && (
              <div className="invalid-feedback">{errors.acomodacion_id[0]}</div>
            )}
          </div>

          <div className="mb-3">
            <label>Cantidad</label>
            <input
              type="number"
              name="cantidad"
              min="1"
              className={`form-control ${errors.cantidad ? 'is-invalid' : ''}`}
              value={form.cantidad}
              onChange={handleChange}
              required
            />
            {errors.cantidad && (
              <div className="invalid-feedback">{errors.cantidad[0]}</div>
            )}
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Registrar Habitación
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default RegistrarHabitacionPage;

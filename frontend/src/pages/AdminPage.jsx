import React, { useState, useEffect } from 'react';
import { createUser } from '../api/usuariosApi';
import { getRoles } from '../api/rolesApi';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { FaUserPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';

const AdminPage = () => {
  const [userData, setUserData] = useState({
    nombre: '',
    email: '',
    password: '',
    rol_id: '',
  });

  const [roles, setRoles] = useState([]);
  const [errors, setErrors] = useState({});
  const navigate = useNavigate();

  useEffect(() => {
    const fetchRoles = async () => {
      try {
        const response = await getRoles();
        setRoles(response.data);
      } catch (error) {
        toast.error('Error al obtener los roles');
      }
    };
    fetchRoles();
  }, []);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setErrors({});
    try {
      await createUser(userData);
      toast.success('✅ Usuario registrado con éxito');
      setUserData({ nombre: '', email: '', password: '', rol_id: '' });
    } catch (error) {
      if (error.response?.status === 422) {
        setErrors(error.response.data.errors);
        toast.error('❌ Error de validación');
      } else {
        toast.error('❌ Error al registrar el usuario');
      }
    }
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100 bg-light" style={{ maxWidth: '100%', width: '100%' }}>
      <ToastContainer />
      <div className="card p-4 shadow" style={{ minWidth: '400px', maxWidth: '90%' }}>
        <div className="text-center mb-3">
          <FaUserPlus size={40} className="text-primary" />
          <h4 className="mt-2">Registrar Usuario</h4>
        </div>
        <form onSubmit={handleSubmit}>
          <div className="mb-3">
            <label className="form-label">Nombre</label>
            <input
              type="text"
              className={`form-control ${errors.nombre ? 'is-invalid' : ''}`}
              name="nombre"
              value={userData.nombre}
              onChange={handleInputChange}
              required
            />
            {errors.nombre && <div className="invalid-feedback">{errors.nombre[0]}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Correo Electrónico</label>
            <input
              type="email"
              className={`form-control ${errors.email ? 'is-invalid' : ''}`}
              name="email"
              value={userData.email}
              onChange={handleInputChange}
              required
            />
            {errors.email && <div className="invalid-feedback">{errors.email[0]}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Contraseña</label>
            <input
              type="password"
              className={`form-control ${errors.password ? 'is-invalid' : ''}`}
              name="password"
              value={userData.password}
              onChange={handleInputChange}
              required
            />
            {errors.password && <div className="invalid-feedback">{errors.password[0]}</div>}
          </div>

          <div className="mb-3">
            <label className="form-label">Rol</label>
            <select
              className={`form-select ${errors.rol_id ? 'is-invalid' : ''}`}
              name="rol_id"
              value={userData.rol_id}
              onChange={handleInputChange}
              required
            >
              <option value="">Seleccionar Rol</option>
              {roles.map((role) => (
                <option key={role.id} value={role.id}>
                  {role.nombre}
                </option>
              ))}
            </select>
            {errors.rol_id && <div className="invalid-feedback">{errors.rol_id[0]}</div>}
          </div>

          <div className="d-grid">
            <button type="submit" className="btn btn-primary">
              Crear Usuario
            </button>
          </div>
        </form>
        <div className="d-grid mt-3">
          <button
            type="button"
            className="btn btn-outline-secondary"
            onClick={() => navigate('/usuarios')}
          >
            Ver lista de usuarios
          </button>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;

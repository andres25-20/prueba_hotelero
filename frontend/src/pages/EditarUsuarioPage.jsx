// src/pages/EditarUsuarioPage.jsx
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { getUsuario, updateUsuario } from '../api/usuariosApi';
import { getRoles } from '../api/rolesApi';
import { toast, ToastContainer } from 'react-toastify';

const EditarUsuarioPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();

  const [usuario, setUsuario] = useState({ nombre: '', email: '', rol_id: '' });
  const [roles, setRoles] = useState([]);

  useEffect(() => {
    const cargarDatos = async () => {
      try {
        const [resUsuario, resRoles] = await Promise.all([
          getUsuario(id),
          getRoles(),
        ]);
        setUsuario(resUsuario.data);
        setRoles(resRoles.data);
      } catch {
        toast.error('Error al cargar datos');
      }
    };
    cargarDatos();
  }, [id]);

  const handleChange = (e) => {
    setUsuario({ ...usuario, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await updateUsuario(id, usuario);
      toast.success('Usuario actualizado');
      setTimeout(() => navigate('/usuarios'), 1000);
    } catch {
      toast.error('Error al actualizar usuario');
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2>Editar Usuario</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Nombre</label>
          <input className="form-control" name="nombre" value={usuario.nombre} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input className="form-control" name="email" value={usuario.email} onChange={handleChange} required />
        </div>
        <div className="mb-3">
          <label>Rol</label>
          <select className="form-select" name="rol_id" value={usuario.rol_id ?? ''} onChange={handleChange}>
            <option value="">Seleccionar rol</option>
            {roles.map((rol) => (
              <option key={rol.id} value={rol.id}>{rol.nombre}</option>
            ))}
          </select>
        </div>
        <button type="submit" className="btn btn-primary">Guardar</button>
        <button type="button" className="btn btn-secondary ms-2" onClick={() => navigate('/usuarios')}>
            Cancelar
        </button>
      </form>
    </div>
  );
};

export default EditarUsuarioPage;
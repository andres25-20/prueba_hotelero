import React, { useEffect, useState } from 'react';
import { getUsuarios, eliminarUsuario } from '../api/usuariosApi';
import { ToastContainer, toast } from 'react-toastify';
import { useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import 'react-toastify/dist/ReactToastify.css';

const ListaUsuariosPage = () => {
  const [usuarios, setUsuarios] = useState([]);
  const navigate = useNavigate(); // ✅ AQUÍ ESTÁ BIEN

  useEffect(() => {
    cargarUsuarios();
  }, []);

  const cargarUsuarios = async () => {
    try {
      const response = await getUsuarios();
      setUsuarios(response.data);
    } catch (error) {
      toast.error('Error al cargar los usuarios');
    }
  };

  const handleEliminarUsuario = async (id) => {
    const confirmacion = await Swal.fire({
      title: '¿Estás seguro?',
      text: 'Esta acción no se puede deshacer',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#d33',
      cancelButtonColor: '#3085d6',
      confirmButtonText: 'Sí, eliminar',
      cancelButtonText: 'Cancelar'
    });
  
    if (!confirmacion.isConfirmed) return;
  
    try {
      await eliminarUsuario(id);
      toast.success('Usuario eliminado');
      cargarUsuarios();
    } catch (error) {
      toast.error('Error al eliminar usuario');
    }
  };

  return (
    <div className="container mt-5">
      <ToastContainer />
      <h2 className="mb-4">Usuarios Registrados</h2>

      {usuarios.length === 0 ? (
        <p>No hay usuarios registrados.</p>
      ) : (
        <div className="table-responsive">
          <table className="table table-striped table-hover">
            <thead className="table-dark">
              <tr>
                <th id="styl-cel">#</th>
                <th id="styl-cel">Nombre</th>
                <th id="styl-cel">Email</th>
                <th id="styl-cel">Rol</th>
                <th id="styl-cel">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {usuarios.map((usuario, index) => (
                <tr key={usuario.id}>
                  <td>{index + 1}</td>
                  <td>{usuario.nombre}</td>
                  <td>{usuario.email}</td>
                  <td>{usuario.rol?.nombre ?? 'Sin rol'}</td>
                  <td>
                    <button
                      className="btn btn-sm btn-primary me-2"
                      onClick={() => navigate(`/usuarios/${usuario.id}/editar`)}
                    >
                      Editar
                    </button>
                    <button
                      className="btn btn-sm btn-danger"
                      onClick={() => handleEliminarUsuario(usuario.id)}
                    >
                      Eliminar
                    </button>
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

export default ListaUsuariosPage;

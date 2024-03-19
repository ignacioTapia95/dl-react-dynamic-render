import React from 'react';

function Listado({ colaboradores, eliminarColaborador }) {
    return (
        <div className="listado-container">
        <h2>Lista de Colaboradores</h2>
        <table className="table">
            <thead>
            <tr>
                <th>Nombre</th>
                <th>Correo</th>
                <th>Edad</th>
                <th>Cargo</th>
                <th>Teléfono</th>
                <th>Eliminar</th>
            </tr>
            </thead>
            <tbody>
            {colaboradores.map(col => (
                <tr key={col.id}>
                <td>{col.nombre}</td>
                <td>{col.correo}</td>
                <td>{col.edad}</td>
                <td>{col.cargo}</td>
                <td>{col.telefono}</td>
                <td>
                    <button 
                    className="btn btn-danger"
                    onClick={() => eliminarColaborador(col.id)}
                    >
                    Eliminar
                    </button>
                </td>
                </tr>
            ))}
            </tbody>
        </table>
        </div>
    );
}

export default Listado;

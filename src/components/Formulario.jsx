import React, { useState } from 'react';

function Formulario({ agregarColaborador }) {
    const [colaborador, setColaborador] = useState({
        nombre: '',
        correo: '',
        edad: '',
        cargo: '',
        telefono: ''
    });

    const handleChange = e => {
        setColaborador({ ...colaborador, [e.target.name]: e.target.value });
    };

    const handleSubmit = e => {
        e.preventDefault();
        agregarColaborador(colaborador);
        setColaborador({
            nombre: '',
            correo: '',
            edad: '',
            cargo: '',
            telefono: ''
        });
    };

    return (
        <div className="formulario-container">
            <h3>Agregar Colaborador</h3>
            <form onSubmit={handleSubmit} className="form">
                <div className="form-field">
                    <input
                        type="text"
                        id="nombre"
                        name="nombre"
                        value={colaborador.nombre}
                        onChange={handleChange}
                        placeholder="Nombre del colaborador"
                        required
                    />
                </div>
                <div className="form-field">
                    <input
                        type="email"
                        id="correo"
                        name="correo"
                        value={colaborador.correo}
                        onChange={handleChange}
                        placeholder="Correo del colaborador"
                        required
                    />
                </div>
                <div className="form-field">
                    <input
                        type="text"
                        id="edad"
                        name="edad"
                        value={colaborador.edad}
                        onChange={handleChange}
                        placeholder="Edad del colaborador"
                        required
                    />
                </div>
                <div className="form-field">
                    <input
                        type="text"
                        id="cargo"
                        name="cargo"
                        value={colaborador.cargo}
                        onChange={handleChange}
                        placeholder="Cargo del colaborador"
                        required
                    />
                </div>
                <div className="form-field">
                    <input
                        type="text"
                        id="telefono"
                        name="telefono"
                        value={colaborador.telefono}
                        onChange={handleChange}
                        placeholder="Teléfono del colaborador"
                        required
                    />
                </div>
                <button type="submit" className="btn btn-dark">Agregar Colaborador</button>
            </form>
        </div>
    );
}

export default Formulario;

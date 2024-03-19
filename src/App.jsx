import React, { useState } from 'react';
import Listado from './components/Listado';
import Formulario from './components/Formulario';
import Buscador from './components/Buscador';
import Alert from './components/Alert';
import { BaseColaboradores } from './data/BaseColaboradores';
import './App.css';

function App() {
    const [colaboradores, setColaboradores] = useState(BaseColaboradores);
    const [busqueda, setBusqueda] = useState('');
    const [alerta, setAlerta] = useState({ mensaje: '', tipo: '' });

    const agregarColaborador = nuevoColaborador => {
        const camposVacios = Object.values(nuevoColaborador).some(valor => valor.trim() === '');
        if (camposVacios) {
            setAlerta({ mensaje: 'Todos los campos deben estar llenos.', tipo: 'danger' });
        } else {
            nuevoColaborador.id = Date.now().toString();
            setColaboradores([...colaboradores, nuevoColaborador]);
            setAlerta({ mensaje: 'Colaborador agregado con éxito.', tipo: 'success' });
        }
    };

    const eliminarColaborador = id => {
        setColaboradores(colaboradores.filter(col => col.id !== id));
        setAlerta({ mensaje: 'Colaborador eliminado con éxito.', tipo: 'success' });
    };

    const filtrarColaboradores = textoBusqueda => {
        setBusqueda(textoBusqueda.toLowerCase());
    };

    const colaboradoresFiltrados = colaboradores.filter(col =>
        Object.values(col).some(valor => valor.toString().toLowerCase().includes(busqueda))
    );

    return (
        <div className="app-container">
            {alerta.mensaje && <Alert mensaje={alerta.mensaje} tipo={alerta.tipo} />}
            <Buscador buscarColaborador={filtrarColaboradores} />
            <Formulario agregarColaborador={agregarColaborador} />
            <Listado colaboradores={colaboradoresFiltrados} eliminarColaborador={eliminarColaborador} />
        </div>
    );
}

export default App;

import { useState } from "react";
import "./FormularioContacto.css";

function FormularioContacto({agregarContacto}){
    const [nombre, setNombre] = useState("");
    const [apellido, setApellido] = useState("");
    const [telefono, setTelefono] = useState("");

    // Funcion para manejar el envio del formulario
    function manejarEnvio(e) {
        e.preventDefault();

        const nuevoContacto = {
            id: Date.now(),
            nombre,
            apellido,
            telefono,
            favorito: false
        };

        agregarContacto(nuevoContacto);

        setNombre("");
        setApellido("");
        setTelefono("");
    }


    return(
        <form onSubmit={manejarEnvio} className="formulario-container">
            <h2>Agregar Contacto</h2>
            <input
                type="text"
                placeholder="Nombre"
                value={nombre}
                onChange={(e) => setNombre(e.target.value)}
            />

            <input
                type="text"
                placeholder="Apellido"
                value={apellido}
                onChange={(e) => setApellido(e.target.value)}
            />

            <input
                type="text"
                placeholder="Teléfono"
                value={telefono}
                onChange={(e) => setTelefono(e.target.value)}
            />
            <button>Agregar</button>
        </form>
    );
};

export default FormularioContacto;
function Contacto({contacto, eliminarContacto}) {
    return(
        <div>
            {/* Renderizar datos para enviarlos al elemento padre */}
            <p><strong>Nombre:</strong> {contacto.nombre}</p>
            <p><strong>Apellido:</strong> {contacto.apellido}</p>
            <p><strong>Teléfono:</strong> {contacto.telefono}</p>

            {/* Boton para eliminar algun contacto */}
            <button onClick={() => eliminarContacto(contacto.id)}>
                Eliminar
            </button>
            <hr />
        </div>
    );
}
export default Contacto;
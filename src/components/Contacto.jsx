function Contacto({contacto, eliminarContacto, alternarFavorito}) {
    return(
        <div style={{
            border: contacto.favorito ? "2px solid gold" : "1px solid gray",
            padding: "10px",
            marginBottom: "10px"
        }}>
            {/* Renderizar datos para enviarlos al elemento padre */}
            <p><strong>Nombre:</strong> {contacto.nombre}</p>
            <p><strong>Apellido:</strong> {contacto.apellido}</p>
            <p><strong>Teléfono:</strong> {contacto.telefono}</p>

            {/* Boton para alternar favorito */}
            <button onClick={() => alternarFavorito(contacto.id)}>
                {contacto.favorito ? "Quitar Favorito" : "Agregar Favorito"}
            </button>

            {/* Boton para eliminar algun contacto */}
            <button onClick={() => eliminarContacto(contacto.id)}>
                Eliminar
            </button>
            <hr />
        </div>
    );
}
export default Contacto;
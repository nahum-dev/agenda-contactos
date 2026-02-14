function Contacto({contacto}) {
    return(
        <div>
            <p><strong>Nombre:</strong> {contacto.nombre}</p>
            <p><strong>Apellido:</strong> {contacto.apellido}</p>
            <p><strong>Teléfono:</strong> {contacto.telefono}</p>
        </div>
    )
}
export default Contacto;
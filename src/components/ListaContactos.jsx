function ListaContactos({contactos}) {
    return(
        <div>
            <h2>Lista de Contactos</h2>
            {contactos.map((contacto) =>(
                <div key={contacto.id}>
                    {contacto.nombre} - {contacto.telefono}
                </div>
            ))}
        </div>
    );
}

export default ListaContactos;
import Contacto from "./Contacto";

function ListaContactos({contactos}) {
    return(
        <div>
            <h2>Lista de Contactos</h2>
            
            {contactos.map((contacto) => (
                <Contacto key={contacto.id} contacto={contacto} />
            ))}
        </div>
    );
}

export default ListaContactos;
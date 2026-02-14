import Contacto from "./Contacto";

function ListaContactos({contactos, eliminarContacto}) {
    return(
        <div>
            <h2>Lista de Contactos</h2>
            
            {contactos.map((contacto) => (
                <Contacto 
                    key={contacto.id} 
                    contacto={contacto} 
                    eliminarContacto={eliminarContacto} 
                />
            ))}
        </div>
    );
}

export default ListaContactos;
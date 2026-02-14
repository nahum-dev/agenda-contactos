import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import contactosIniciales from "./data/contactos.json"
import ListaContactos from './components/ListaContactos'

function App() {
  const[contactos, setContactos] = useState(contactosIniciales);

  // Funcion para eliminar contacto
  function eliminarContacto(id){
    const nuevaLista = contactos.filter(
      (contacto) => contacto.id !== id
    );
    setContactos(nuevaLista);
  }

  // Funcion para alternar favorito
  function alternarFavorito(id){
    const contactosActualizados = contactos.map((contacto) => {
      if (contacto.id === id){
        return {
          ...contacto,
          favorito: !contacto.favorito
        };
      }
      return contacto;
    });
    setContactos(contactosActualizados);
  }
  const contactosOrdenados = [...contactos].sort((a, b) => {
    return b.favorito - a.favorito;
  });

  return (
    <div>
      <h1>Agenda de Contactos</h1>
      <ListaContactos 
        contactos={contactos}
        eliminarContacto={eliminarContacto}
        alternarFavorito={alternarFavorito}
      />
    </div>
  )
}

export default App

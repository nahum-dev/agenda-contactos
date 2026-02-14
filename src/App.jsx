import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import contactosIniciales from "./data/contactos.json"
import ListaContactos from './components/ListaContactos'
import FormularioContacto from './components/FormularioContacto'

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

  // Ordenar contactos por favorito
  const contactosOrdenados = [...contactos].sort((a, b) => {
    return Number(b.favorito) - Number(a.favorito);
  });

  // Funcion para agregar nuevo contacto
  function agregarContacto(nuevoContacto){
    setContactos([...contactos, nuevoContacto]);
  }

  return (
    <div className="main-container">
    <h1>Agenda de Contactos</h1>

    <div className="card">
      <FormularioContacto agregarContacto={agregarContacto} />
    </div>

    <div className="card">
      <ListaContactos 
        contactos={contactosOrdenados}
        eliminarContacto={eliminarContacto}
        alternarFavorito={alternarFavorito}
      />
    </div>
  </div>
  )
}

export default App

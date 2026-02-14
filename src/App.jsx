import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import contactosIniciales from "./data/contactos.json"
import ListaContactos from './components/ListaContactos'

function App() {
  const[contactos, setContactos] = useState(contactosIniciales);
  return (
    <div>
      <h1>Agenda de Contactos</h1>
      <ListaContactos contactos={contactos} />
    </div>
  )
}

export default App

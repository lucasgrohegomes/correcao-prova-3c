import { useState } from 'react'
import Banner from './components/Banner.jsx'
import Event from './components/Event.jsx'
import Galeria from './components/Galeria.jsx'
import Footer from './components/Footer.jsx'
import './App.css'

function App() {
  return (
    <main>
      <Banner />
      <Event 
      titulo = {"Evento de Eventos"}
      descricao = {"Este é um evento onde clipes de eventos serão apresentados, os eventos serão avaliados por especialistas e técnicos em eventos para julgar o mais maneiro"}
      hora = {"13/02/2024, 13:00h"}
      local = {"Rua José Garibaldi, Uruguaiana RS"}
      />
      <Galeria />
      <Footer />
    </main>
  )
}

export default App

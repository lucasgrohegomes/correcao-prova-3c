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
      <Event />
      <Galeria />
      <Footer />
    </main>
  )
}

export default App

import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

import Contendedor from './components/Contenedor.jsx'
import Footer from './components/footer.jsx'
import Header from './components/header.jsx'

function App() {

  return (
    <>
    <Header titulo='Adopta un perrito'/>
    <Contendedor/>
    <Footer></Footer>
    </>
  )
}

export default App

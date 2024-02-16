import './App.css'
import Navbar from './components/Navbar'
import Home from './components/Home'
import Servicios from './components/Servicios'
import ServiciosExperiencia from './components/ServiciosExperiencia'
import ServiciosLista from './components/ServiciosLista'
import Footer from './shared/Footer'
import Contact from './components/Contact'

function App() {
  return (
    <>
      <Navbar/>
      <Home/>
      <Servicios/>
      <ServiciosExperiencia/>
      <ServiciosLista/>
      <Contact/>
      <Footer/>
    </>
  )
}

export default App

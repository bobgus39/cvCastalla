import NavbarComponent from '../components/Navbar'
import Hero from '../components/Hero'
import SobreNosotros from '../components/SobreNosotros'
import Servicios from '../components/Servicios'
import AnimalesAtendemos from '../components/AnimalesAtendemos'
import MedicinaPreventiva from '../components/MedicinaPreventiva'
import Proceso from '../components/Proceso'
import PorQueElegirnos from '../components/PorQueElegirnos'
import Testimonios from '../components/Testimonios'
import Galeria from '../components/Galeria'
import Formulario from '../components/Formulario'
import Contacto from '../components/Contacto'
import Footer from '../components/Footer'

export default function Home() {
  return (
    <div className="min-h-screen">
      <NavbarComponent />
      <Hero />
      <SobreNosotros />
      <Servicios />
      <AnimalesAtendemos />
      <MedicinaPreventiva />
      <Proceso />
      <PorQueElegirnos />
      <Testimonios />
      <Galeria />
      <Formulario />
      <Contacto />
      <Footer />
    </div>
  )
}

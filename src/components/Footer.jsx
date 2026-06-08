const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Sobre Nosotros', href: '#sobre-nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Animales', href: '#animales' },
  { label: 'Medicina Preventiva', href: '#preventiva' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Pedir Cita', href: '#cita' },
  { label: 'Contacto', href: '#contacto' },
]

const serviciosFooter = [
  'Consulta General', 'Vacunación', 'Cirugía Veterinaria',
  'Odontología', 'Diagnóstico por Imagen', 'Análisis Clínicos',
  'Hospitalización', 'Microchip', 'Peluquería',
]

export default function Footer() {
  const handleNav = (href) => {
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <footer className="bg-green-950 text-green-200">
      <div className="max-w-6xl mx-auto px-6 py-16">
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-2 mb-4">
              <span className="text-3xl">🐾</span>
              <div>
                <p className="font-display font-bold text-white text-xl">Clínica Vet</p>
                <p className="text-green-400 text-sm font-semibold">Castalla</p>
              </div>
            </div>
            <p className="text-green-300 text-sm leading-relaxed mb-4">
              Tu clínica veterinaria de confianza en Castalla. Cuidando a las mascotas de la comarca
              desde hace más de 20 años con amor y profesionalidad.
            </p>
            <p className="text-green-400 text-sm font-semibold">📍 C. Ismael Vidal, 10</p>
            <p className="text-green-400 text-sm">03420 Castalla, Alicante</p>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Navegación</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <button
                    onClick={() => handleNav(link.href)}
                    className="text-green-300 hover:text-green-200 text-sm transition-colors duration-200"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Servicios</h4>
            <ul className="space-y-2">
              {serviciosFooter.map((s) => (
                <li key={s}>
                  <button
                    onClick={() => handleNav('#servicios')}
                    className="text-green-300 hover:text-green-200 text-sm transition-colors duration-200"
                  >
                    {s}
                  </button>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold text-white text-sm uppercase tracking-wider mb-4">Contacto</h4>
            <div className="space-y-3">
              <div>
                <p className="text-green-400 text-xs font-semibold uppercase mb-0.5">Teléfono</p>
                <a href="tel:+34965000000" className="text-green-200 hover:text-white text-sm font-semibold transition-colors">
                  965 00 00 00
                </a>
              </div>
              <div>
                <p className="text-green-400 text-xs font-semibold uppercase mb-0.5">Email</p>
                <a href="mailto:info@veterinariacastalla.es" className="text-green-200 hover:text-white text-sm transition-colors">
                  info@veterinariacastalla.es
                </a>
              </div>
              <div>
                <p className="text-green-400 text-xs font-semibold uppercase mb-0.5">Horario</p>
                <p className="text-green-300 text-sm">L–V: 9–14h / 17–20h</p>
                <p className="text-green-300 text-sm">Sáb: 10–14h</p>
              </div>
              <div className="flex gap-3 pt-2">
                <a href="https://instagram.com" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-base transition-colors duration-200">
                  📸
                </a>
                <a href="https://facebook.com" target="_blank" rel="noopener noreferrer"
                  className="w-9 h-9 bg-white/10 hover:bg-white/20 rounded-xl flex items-center justify-center text-base transition-colors duration-200">
                  👍
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-green-800 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-green-500 text-sm">
            © {new Date().getFullYear()} Clínica Veterinaria Castalla. Todos los derechos reservados.
          </p>
          <div className="flex gap-4">
            <button onClick={() => handleNav('#privacidad')} className="text-green-500 hover:text-green-300 text-sm transition-colors">
              Política de Privacidad
            </button>
            <button onClick={() => handleNav('#legal')} className="text-green-500 hover:text-green-300 text-sm transition-colors">
              Aviso Legal
            </button>
          </div>
        </div>
      </div>
    </footer>
  )
}

import { useState, useEffect } from 'react'
import { Navbar, NavbarBrand, NavbarContent, NavbarItem } from '@heroui/react'

const navLinks = [
  { label: 'Inicio', href: '#hero' },
  { label: 'Nosotros', href: '#sobre-nosotros' },
  { label: 'Servicios', href: '#servicios' },
  { label: 'Animales', href: '#animales' },
  { label: 'Preventiva', href: '#preventiva' },
  { label: 'Testimonios', href: '#testimonios' },
  { label: 'Contacto', href: '#contacto' },
]

function HamburgerIcon({ open }) {
  return (
    <div className="flex flex-col justify-center items-center w-6 h-6 gap-1.5">
      <span
        className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${
          open ? 'w-6 rotate-45 translate-y-2' : 'w-6'
        }`}
      />
      <span
        className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${
          open ? 'opacity-0 w-0' : 'w-5'
        }`}
      />
      <span
        className={`block h-0.5 bg-current rounded-full transition-all duration-300 ${
          open ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
        }`}
      />
    </div>
  )
}

export default function NavbarComponent() {
  const [menuOpen, setMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  // Bloquear scroll del body cuando el menú está abierto
  useEffect(() => {
    document.body.style.overflow = menuOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [menuOpen])

  const handleNav = (href) => {
    setMenuOpen(false)
    setTimeout(() => {
      document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
    }, 50)
  }

  const navbarBg = scrolled || menuOpen
    ? 'bg-white shadow-md'
    : 'bg-transparent'

  const iconColor = scrolled || menuOpen ? 'text-green-900' : 'text-white'

  return (
    <>
      {/* ── Barra de navegación ── */}
      <Navbar
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${navbarBg}`}
        maxWidth="xl"
        isBlurred={false}
      >
        {/* Hamburguesa — solo mobile */}
        <NavbarContent className="sm:hidden" justify="start">
          <button
            onClick={() => setMenuOpen((v) => !v)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            className={`p-2 rounded-lg hover:bg-black/5 transition-colors ${iconColor}`}
          >
            <HamburgerIcon open={menuOpen} />
          </button>
        </NavbarContent>

        {/* Logo */}
        <NavbarContent justify="start">
          <NavbarBrand>
            <button
              onClick={() => handleNav('#hero')}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span className="text-xl">🐾</span>
              <div className="text-left leading-none">
                <span className={`font-display font-bold text-base block ${scrolled || menuOpen ? 'text-green-900' : 'text-white'}`}>
                  Clínica Vet
                </span>
                <span className="text-green-500 text-xs font-semibold font-body block">
                  Castalla
                </span>
              </div>
            </button>
          </NavbarBrand>
        </NavbarContent>

        {/* Links desktop */}
        <NavbarContent className="hidden sm:flex gap-1" justify="center">
          {navLinks.map((link) => (
            <NavbarItem key={link.href}>
              <button
                onClick={() => handleNav(link.href)}
                className={`px-3 py-1.5 text-sm font-semibold rounded-full transition-all duration-200 ${
                  scrolled
                    ? 'text-green-900 hover:text-green-600 hover:bg-green-50'
                    : 'text-white/90 hover:text-white hover:bg-white/10'
                }`}
              >
                {link.label}
              </button>
            </NavbarItem>
          ))}
        </NavbarContent>

        {/* CTA desktop */}
        <NavbarContent justify="end">
          <NavbarItem className="hidden sm:flex">
            <button
              onClick={() => handleNav('#cita')}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-2 rounded-full text-sm transition-all duration-200 shadow-md hover:shadow-lg"
            >
              Pedir Cita
            </button>
          </NavbarItem>
        </NavbarContent>
      </Navbar>

      {/* ── Menú mobile — overlay full-screen ── */}
      {/* Fondo oscuro detrás */}
      <div
        className={`fixed inset-0 bg-black/40 z-40 transition-opacity duration-300 sm:hidden ${
          menuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={() => setMenuOpen(false)}
      />

      {/* Panel deslizante */}
      <div
        className={`fixed top-0 left-0 bottom-0 w-72 max-w-[85vw] bg-white z-50 shadow-2xl flex flex-col transition-transform duration-300 ease-in-out sm:hidden ${
          menuOpen ? 'translate-x-0' : '-translate-x-full'
        }`}
      >
        {/* Cabecera del panel */}
        <div className="flex items-center justify-between px-5 py-4 border-b border-gray-100">
          <button onClick={() => handleNav('#hero')} className="flex items-center gap-2">
            <span className="text-xl">🐾</span>
            <div>
              <span className="font-display font-bold text-green-900 text-base block leading-none">Clínica Vet</span>
              <span className="text-green-500 text-xs font-semibold">Castalla</span>
            </div>
          </button>
          <button
            onClick={() => setMenuOpen(false)}
            className="p-2 rounded-lg hover:bg-gray-100 transition-colors text-gray-500"
            aria-label="Cerrar menú"
          >
            <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
              <path d="M15 5L5 15M5 5l10 10" stroke="currentColor" strokeWidth="2" strokeLinecap="round"/>
            </svg>
          </button>
        </div>

        {/* Links */}
        <nav className="flex-1 overflow-y-auto py-3 px-3">
          {navLinks.map((link) => (
            <button
              key={link.href}
              onClick={() => handleNav(link.href)}
              className="w-full text-left px-4 py-3.5 text-base font-semibold text-green-900 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200 block"
            >
              {link.label}
            </button>
          ))}
        </nav>

        {/* CTA */}
        <div className="p-4 border-t border-gray-100">
          <button
            onClick={() => handleNav('#cita')}
            className="w-full bg-green-600 hover:bg-green-700 text-white font-bold py-3.5 rounded-2xl text-base transition-all duration-200 shadow-md"
          >
            🐾 Pedir Cita
          </button>
        </div>
      </div>
    </>
  )
}

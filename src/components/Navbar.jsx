import { useState, useEffect } from 'react'
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
  NavbarMenu,
  NavbarMenuItem,
} from '@heroui/react'

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
        className={`block h-0.5 bg-green-800 rounded-full transition-all duration-300 ${
          open ? 'w-6 rotate-45 translate-y-2' : 'w-6'
        }`}
      />
      <span
        className={`block h-0.5 bg-green-800 rounded-full transition-all duration-300 ${
          open ? 'opacity-0 w-0' : 'w-5'
        }`}
      />
      <span
        className={`block h-0.5 bg-green-800 rounded-full transition-all duration-300 ${
          open ? 'w-6 -rotate-45 -translate-y-2' : 'w-6'
        }`}
      />
    </div>
  )
}

export default function NavbarComponent() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const handleNav = (href) => {
    setIsMenuOpen(false)
    const el = document.querySelector(href)
    if (el) el.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <Navbar
      isMenuOpen={isMenuOpen}
      onMenuOpenChange={setIsMenuOpen}
      className={`fixed top-0 z-50 w-full transition-all duration-300 ${
        scrolled ? 'bg-white/95 shadow-md backdrop-blur-md' : 'bg-transparent'
      }`}
      maxWidth="xl"
    >
      {/* Mobile: hamburguesa + logo */}
      <NavbarContent className="sm:hidden">
        <button
          onClick={() => setIsMenuOpen((v) => !v)}
          aria-label={isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
          className="p-1.5 rounded-lg hover:bg-green-50 transition-colors"
        >
          <HamburgerIcon open={isMenuOpen} />
        </button>
      </NavbarContent>

      {/* Logo — centrado en mobile, izquierda en desktop */}
      <NavbarContent justify="start">
        <NavbarBrand>
          <button
            onClick={() => handleNav('#hero')}
            className="flex items-center gap-2 cursor-pointer"
          >
            <span className="text-2xl">🐾</span>
            <div className="text-left">
              <span
                className={`font-display font-bold text-lg leading-tight block ${
                  scrolled ? 'text-green-900' : 'text-green-900'
                }`}
              >
                Clínica Vet
              </span>
              <span className="text-green-600 text-xs font-semibold font-body block -mt-0.5">
                Castalla
              </span>
            </div>
          </button>
        </NavbarBrand>
      </NavbarContent>

      {/* Desktop links */}
      <NavbarContent className="hidden sm:flex gap-1" justify="center">
        {navLinks.map((link) => (
          <NavbarItem key={link.href}>
            <button
              onClick={() => handleNav(link.href)}
              className="px-3 py-1.5 text-sm font-semibold text-green-900 hover:text-green-600 hover:bg-green-50 rounded-full transition-all duration-200"
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

      {/* Mobile menu */}
      <NavbarMenu className="bg-white/98 backdrop-blur-md pt-4 pb-8">
        {navLinks.map((link) => (
          <NavbarMenuItem key={link.href}>
            <button
              onClick={() => handleNav(link.href)}
              className="w-full text-left px-4 py-3 text-base font-semibold text-green-900 hover:text-green-600 hover:bg-green-50 rounded-xl transition-all duration-200"
            >
              {link.label}
            </button>
          </NavbarMenuItem>
        ))}
        <NavbarMenuItem>
          <button
            onClick={() => handleNav('#cita')}
            className="w-full mt-3 bg-green-600 hover:bg-green-700 text-white font-bold px-5 py-3 rounded-full text-base transition-all duration-200 shadow-md"
          >
            🐾 Pedir Cita
          </button>
        </NavbarMenuItem>
      </NavbarMenu>
    </Navbar>
  )
}

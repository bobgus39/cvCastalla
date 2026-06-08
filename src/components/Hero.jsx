import { useEffect, useState } from 'react'

export default function Hero() {
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const t = setTimeout(() => setVisible(true), 80)
    return () => clearTimeout(t)
  }, [])

  const scrollTo = (href) => {
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' })
  }

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
    >
      {/* Multi-layer background */}
      <div className="absolute inset-0 bg-gradient-to-br from-green-950 via-green-900 to-emerald-800" />
      <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent" />

      {/* Glowing orbs */}
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-green-400/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-emerald-300/15 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-10 left-10 w-48 h-48 bg-lime-400/10 rounded-full blur-2xl pointer-events-none" />

      {/* Decorative paw prints */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none opacity-[0.07]">
        <span className="absolute text-5xl top-20 left-12 rotate-12">🐾</span>
        <span className="absolute text-6xl top-40 right-20 -rotate-6">🐾</span>
        <span className="absolute text-4xl bottom-32 left-24 rotate-45">🐾</span>
        <span className="absolute text-5xl bottom-20 right-32 -rotate-12">🐾</span>
        <span className="absolute text-3xl top-1/2 right-10 rotate-20">🐾</span>
      </div>

      {/* Main content */}
      <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">

        {/* Badge */}
        <div className={`transition-all duration-600 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '0ms' }}>
          <div className="inline-flex items-center gap-2 bg-white/10 border border-white/20 backdrop-blur-sm rounded-full px-5 py-2 mb-8">
            <span className="w-2 h-2 bg-green-400 rounded-full animate-pulse" />
            <span className="text-green-200 text-sm font-semibold">Tu clínica veterinaria en Castalla</span>
          </div>
        </div>

        {/* Heading */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '120ms' }}>
          <h1 className="font-display text-5xl md:text-6xl lg:text-7xl font-bold text-white leading-[1.1] mb-6">
            Cuidamos a quien{' '}
            <span className="relative inline-block">
              <span className="text-green-300 italic">más quieres.</span>
              <svg className="absolute -bottom-2 left-0 w-full" height="6" viewBox="0 0 200 6" fill="none">
                <path d="M0 3 Q50 0 100 3 Q150 6 200 3" stroke="#4ade80" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.6" />
              </svg>
            </span>
          </h1>
        </div>

        {/* Subclaim */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '250ms' }}>
          <p className="text-green-100 text-lg md:text-xl max-w-2xl mx-auto mb-3 leading-relaxed">
            Medicina veterinaria especializada con el trato familiar que tu mascota merece.
            Tu clínica de confianza en el corazón de Castalla.
          </p>
          <p className="text-green-300/80 text-sm font-semibold mb-10">
            📍 C. Ismael Vidal, 10 · 03420 Castalla, Alicante
          </p>
        </div>

        {/* CTAs */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
          style={{ transitionDelay: '380ms' }}>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <button
              onClick={() => scrollTo('#cita')}
              className="group inline-flex items-center justify-center gap-2 bg-green-400 hover:bg-green-300 text-green-950 font-bold px-8 py-4 rounded-full text-base transition-all duration-200 shadow-xl hover:shadow-green-400/30 hover:-translate-y-0.5"
            >
              <span>🐾</span>
              <span>Pedir Cita</span>
            </button>
            <button
              onClick={() => scrollTo('#servicios')}
              className="inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 border border-white/25 text-white font-bold px-8 py-4 rounded-full text-base transition-all duration-200 backdrop-blur-sm"
            >
              Ver Servicios →
            </button>
          </div>
        </div>

        {/* Stats bar */}
        <div className={`transition-all duration-700 ${visible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
          style={{ transitionDelay: '520ms' }}>
          <div className="mt-16 inline-flex gap-0 bg-white/10 border border-white/10 backdrop-blur-sm rounded-2xl overflow-hidden">
            {[
              { num: '+20', label: 'Años en Castalla' },
              { num: '+5k', label: 'Mascotas atendidas' },
              { num: '11', label: 'Especialidades' },
            ].map((stat, i) => (
              <div key={stat.label} className={`px-7 py-5 text-center ${i < 2 ? 'border-r border-white/10' : ''}`}>
                <div className="font-display text-3xl font-bold text-green-300">{stat.num}</div>
                <div className="text-green-200/70 text-xs mt-0.5 font-medium">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className={`absolute bottom-8 left-1/2 -translate-x-1/2 transition-all duration-700 ${visible ? 'opacity-100' : 'opacity-0'}`}
        style={{ transitionDelay: '800ms' }}>
        <button onClick={() => scrollTo('#sobre-nosotros')} className="flex flex-col items-center gap-2 group">
          <span className="text-green-400/60 text-xs font-medium group-hover:text-green-300 transition-colors">Descubre más</span>
          <div className="w-5 h-8 border-2 border-green-400/30 rounded-full flex items-start justify-center pt-1.5 group-hover:border-green-300/50 transition-colors">
            <div className="w-0.5 h-2 bg-green-400/60 rounded-full animate-bounce" />
          </div>
        </button>
      </div>
    </section>
  )
}

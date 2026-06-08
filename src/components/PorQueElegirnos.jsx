import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { useState, useEffect, useRef } from 'react'

const stats = [
  { end: 20, suffix: '+', label: 'Años en Castalla' },
  { end: 5000, suffix: '+', label: 'Mascotas atendidas' },
  { end: 11, suffix: '', label: 'Especialidades' },
  { end: 100, suffix: '%', label: 'Colegiados' },
]

const razones = [
  { icon: '🎓', title: 'Veterinarios titulados y colegiados', desc: 'Todo nuestro equipo tiene formación universitaria oficial y colegiación vigente. Actualizamos nuestros conocimientos constantemente.' },
  { icon: '❤️', title: 'Trato familiar y personalizado', desc: 'Conocemos a tu mascota por su nombre. Cada animal recibe una atención adaptada a su personalidad y necesidades únicas.' },
  { icon: '🔬', title: 'Equipamiento diagnóstico moderno', desc: 'Radiografía digital, ecografía, laboratorio propio y quirófano equipado para diagnósticos rápidos y precisos.' },
  { icon: '🏘️', title: 'Referente veterinario en Castalla', desc: 'Más de 20 años siendo la clínica de confianza de familias de Castalla y la comarca de l\'Alcoià.' },
  { icon: '🌍', title: 'Todo tipo de animales', desc: 'Atendemos desde perros y gatos hasta reptiles, aves y animales exóticos. Sin excepciones.' },
  { icon: '💬', title: 'Presupuesto sin compromiso', desc: 'Antes de cualquier tratamiento, te explicamos las opciones y el coste. Sin sorpresas en la factura.' },
]

function formatNum(count, end) {
  if (end >= 1000) return `${Math.floor(count / 1000)}k`
  return Math.floor(count)
}

function AnimatedCounter({ end, suffix, active }) {
  const [count, setCount] = useState(0)
  const startedRef = useRef(false)

  useEffect(() => {
    if (!active || startedRef.current) return
    startedRef.current = true
    const duration = 1600
    const steps = 60
    const stepTime = duration / steps
    const increment = end / steps
    let current = 0
    let step = 0

    const timer = setInterval(() => {
      step++
      current = Math.min(increment * step, end)
      setCount(current)
      if (step >= steps) clearInterval(timer)
    }, stepTime)

    return () => clearInterval(timer)
  }, [active, end])

  return (
    <span>
      {formatNum(count, end)}{suffix}
    </span>
  )
}

export default function PorQueElegirnos() {
  const { ref, inView } = useIntersectionObserver({ threshold: 0.1 })

  return (
    <section id="por-que" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            ⭐ ¿Por qué elegirnos?
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-green-950 mb-4">
            La clínica que{' '}
            <span className="text-green-600 italic">Castalla merece</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-16">
          {stats.map((s, i) => (
            <div
              key={s.label}
              className={`bg-green-50 rounded-3xl p-6 text-center transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <div className="font-display text-4xl md:text-5xl font-bold text-green-700 mb-1">
                <AnimatedCounter end={s.end} suffix={s.suffix} active={inView} />
              </div>
              <div className="text-gray-600 text-sm font-semibold">{s.label}</div>
            </div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
          {razones.map((r, i) => (
            <div
              key={r.title}
              className={`flex gap-4 p-6 rounded-2xl border border-gray-100 hover:border-green-200 hover:shadow-md transition-all duration-300 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
              }`}
              style={{ transitionDelay: `${i * 60 + 350}ms` }}
            >
              <div className="text-3xl flex-shrink-0 mt-0.5">{r.icon}</div>
              <div>
                <h3 className="font-bold text-green-900 text-sm mb-1.5 leading-snug">{r.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{r.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const pilares = [
  {
    icon: '📅',
    title: 'Revisión anual',
    desc: 'Una revisión completa cada año permite detectar problemas antes de que sean graves. Tu veterinario evalúa peso, dientes, corazón, ojos y mucho más.',
    color: 'bg-green-50 border-green-200',
    iconBg: 'bg-green-100',
  },
  {
    icon: '💉',
    title: 'Vacunación',
    desc: 'Las vacunas protegen a tu mascota de enfermedades potencialmente mortales. Creamos un calendario personalizado según su especie, estilo de vida y riesgo.',
    color: 'bg-emerald-50 border-emerald-200',
    iconBg: 'bg-emerald-100',
  },
  {
    icon: '🛡️',
    title: 'Desparasitación',
    desc: 'Pulgas, garrapatas, gusanos... Los parásitos afectan la salud de tu mascota y pueden transmitirse a personas. La prevención regular es clave.',
    color: 'bg-lime-50 border-lime-200',
    iconBg: 'bg-lime-100',
  },
  {
    icon: '📍',
    title: 'Microchip',
    desc: 'Obligatorio por ley y fundamental si tu mascota se pierde. El microchip es la forma más segura de identificación permanente registrada oficialmente.',
    color: 'bg-teal-50 border-teal-200',
    iconBg: 'bg-teal-100',
  },
]

export default function MedicinaPreventiva() {
  const { ref, inView } = useIntersectionObserver()

  return (
    <section id="preventiva" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            🛡️ Medicina preventiva
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-green-950 mb-4">
            Prevenir es{' '}
            <span className="text-green-600 italic">mejor que curar</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            La clave de una vida larga y feliz para tu mascota está en la medicina preventiva.
            Te acompañamos durante todo el ciclo de vida de tu animal.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {pilares.map((p, i) => (
            <div
              key={p.title}
              className={`${p.color} border rounded-3xl p-6 transition-all duration-500 hover:shadow-lg hover:-translate-y-1 ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className={`w-12 h-12 ${p.iconBg} rounded-2xl flex items-center justify-center text-2xl mb-4`}>
                {p.icon}
              </div>
              <h3 className="font-bold text-green-900 text-lg mb-3">{p.title}</h3>
              <p className="text-gray-600 text-sm leading-relaxed">{p.desc}</p>
            </div>
          ))}
        </div>

        {/* CTA Banner */}
        <div className={`mt-12 bg-gradient-to-r from-green-700 to-green-600 rounded-3xl p-8 md:p-10 text-white text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}>
          <h3 className="font-display text-2xl md:text-3xl font-bold mb-3">
            ¿Cuándo fue la última revisión de tu mascota?
          </h3>
          <p className="text-green-200 mb-6 text-lg">
            No esperes a que aparezcan síntomas. Agenda su revisión anual hoy.
          </p>
          <button
            onClick={() => document.querySelector('#cita')?.scrollIntoView({ behavior: 'smooth' })}
            className="bg-green-300 hover:bg-green-200 text-green-950 font-bold px-8 py-3 rounded-full transition-all duration-200 shadow-md"
          >
            Pedir Revisión Anual →
          </button>
        </div>
      </div>
    </section>
  )
}

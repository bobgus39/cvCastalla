import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const pasos = [
  {
    num: '01',
    icon: '📞',
    title: 'Llama o pide cita',
    desc: 'Contacta por teléfono, email o rellena nuestro formulario online. Te confirmamos en minutos.',
  },
  {
    num: '02',
    icon: '🤝',
    title: 'Recepción y bienvenida',
    desc: 'Te recibimos con calma. Tu mascota se aclimata al entorno mientras recopilamos su historial.',
  },
  {
    num: '03',
    icon: '🔬',
    title: 'Exploración completa',
    desc: 'El veterinario realiza un examen físico exhaustivo: peso, temperatura, corazón, piel y más.',
  },
  {
    num: '04',
    icon: '📋',
    title: 'Diagnóstico y plan',
    desc: 'Te explicamos los hallazgos con claridad y diseñamos juntos el mejor plan para tu mascota.',
  },
  {
    num: '05',
    icon: '🏠',
    title: 'Seguimiento en casa',
    desc: 'Te damos instrucciones detalladas y te acompañamos durante la recuperación o el seguimiento.',
  },
]

export default function Proceso() {
  const { ref, inView } = useIntersectionObserver()

  return (
    <section id="proceso" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            🗺️ Primera visita
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-green-950 mb-4">
            ¿Cómo es tu{' '}
            <span className="text-green-600 italic">primera visita?</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto">
            Sin sorpresas. Sabemos que la primera vez puede generar dudas — así que te contamos
            exactamente qué va a pasar.
          </p>
        </div>

        {/* Desktop: horizontal timeline */}
        <div ref={ref} className="hidden md:block">
          {/* Progress line */}
          <div className="relative mb-8">
            <div className="absolute top-8 left-0 right-0 h-0.5 bg-green-200" />
            <div
              className={`absolute top-8 left-0 h-0.5 bg-green-500 transition-all duration-1500 ${inView ? 'w-full' : 'w-0'}`}
              style={{ transitionDuration: '1.5s' }}
            />
            <div className="relative flex justify-between">
              {pasos.map((p, i) => (
                <div
                  key={p.num}
                  className={`flex flex-col items-center w-44 transition-all duration-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}
                  style={{ transitionDelay: `${i * 200 + 300}ms` }}
                >
                  {/* Circle */}
                  <div className="w-16 h-16 bg-green-600 rounded-full flex items-center justify-center text-2xl shadow-lg mb-4 border-4 border-white">
                    {p.icon}
                  </div>
                  <span className="text-green-500 text-xs font-bold mb-1">{p.num}</span>
                  <h3 className="font-bold text-green-900 text-sm text-center mb-2">{p.title}</h3>
                  <p className="text-gray-500 text-xs text-center leading-relaxed">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Mobile: vertical timeline */}
        <div className="md:hidden space-y-0">
          {pasos.map((p, i) => (
            <div key={p.num} className="flex gap-4">
              <div className="flex flex-col items-center">
                <div className="w-12 h-12 bg-green-600 rounded-full flex items-center justify-center text-xl shadow-md border-2 border-white flex-shrink-0">
                  {p.icon}
                </div>
                {i < pasos.length - 1 && (
                  <div className="w-0.5 flex-1 bg-green-200 my-2" style={{ minHeight: '40px' }} />
                )}
              </div>
              <div className="pb-8">
                <span className="text-green-500 text-xs font-bold">{p.num}</span>
                <h3 className="font-bold text-green-900 text-base mt-0.5 mb-1">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-gray-500 text-sm mb-4">¿Tienes más preguntas? Estamos aquí para ayudarte.</p>
          <button
            onClick={() => document.querySelector('#contacto')?.scrollIntoView({ behavior: 'smooth' })}
            className="border-2 border-green-600 text-green-700 hover:bg-green-600 hover:text-white font-bold px-6 py-3 rounded-full text-sm transition-all duration-200"
          >
            Contactar ahora
          </button>
        </div>
      </div>
    </section>
  )
}

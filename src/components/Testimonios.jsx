import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const testimonios = [
  {
    nombre: 'María García',
    mascota: 'Luna (Golden Retriever)',
    servicio: 'Cirugía ortopédica',
    texto: 'Luna se rompió el ligamento cruzado y estábamos muy asustados. El equipo de la clínica nos explicó todo con paciencia y la operación fue un éxito total. Hoy corre como si nada. No podemos estar más agradecidos.',
    estrellas: 5,
    inicial: 'M',
    color: 'bg-amber-100 text-amber-700',
  },
  {
    nombre: 'Carlos Martínez',
    mascota: 'Michi (gato persa)',
    servicio: 'Consulta y analíticas',
    texto: 'Llevamos a Michi con síntomas raros y en una sola visita le hicieron analíticas y ecografía. Tenían todo en el mismo sitio. El diagnóstico fue rápido y el tratamiento funcionó perfectamente. Clínica 10.',
    estrellas: 5,
    inicial: 'C',
    color: 'bg-blue-100 text-blue-700',
  },
  {
    nombre: 'Ana Soler',
    mascota: 'Comet (conejo enano)',
    servicio: 'Atención a animales exóticos',
    texto: 'Es difícil encontrar veterinarios que sepan de conejos de verdad. Aquí desde el primer momento supieron exactamente qué hacer. El trato fue increíblemente cercano y profesional a la vez.',
    estrellas: 5,
    inicial: 'A',
    color: 'bg-purple-100 text-purple-700',
  },
  {
    nombre: 'Pedro López',
    mascota: 'Rex y Nala (pastor alemán)',
    servicio: 'Vacunación y desparasitación',
    texto: 'Llevamos dos pastores alemanes desde cachorros. El seguimiento que hacen es impresionante — te avisan de las próximas vacunas, te dan consejos de nutrición... son un equipo que realmente se preocupa.',
    estrellas: 5,
    inicial: 'P',
    color: 'bg-green-100 text-green-700',
  },
  {
    nombre: 'Laura Ivorra',
    mascota: 'Kiko (loro gris africano)',
    servicio: 'Revisión anual y nutrición',
    texto: 'Tenía miedo de llevar a Kiko porque no todos los veterinarios entienden de loros. Aquí me sorprendieron — sabían exactamente cómo manejarlo y me dieron una guía nutricional completa. Lo llevaré siempre aquí.',
    estrellas: 5,
    inicial: 'L',
    color: 'bg-rose-100 text-rose-700',
  },
]

function Stars({ count }) {
  return (
    <div className="flex gap-0.5">
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={i < count ? 'text-amber-400' : 'text-gray-200'}>★</span>
      ))}
    </div>
  )
}

export default function Testimonios() {
  const { ref, inView } = useIntersectionObserver()
  const [active, setActive] = useState(0)

  const prev = () => setActive((a) => (a - 1 + testimonios.length) % testimonios.length)
  const next = () => setActive((a) => (a + 1) % testimonios.length)

  const visible = [
    testimonios[active],
    testimonios[(active + 1) % testimonios.length],
    testimonios[(active + 2) % testimonios.length],
  ]

  return (
    <section id="testimonios" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            💬 Lo que dicen nuestros clientes
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-green-950 mb-4">
            Familias que confían{' '}
            <span className="text-green-600 italic">en nosotros</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Nada nos llena más que saber que las familias de Castalla están contentas con el cuidado de sus mascotas.
          </p>
        </div>

        {/* Desktop: 3 cards */}
        <div className="hidden lg:grid grid-cols-3 gap-6">
          {visible.map((t, i) => (
            <div
              key={`${t.nombre}-${active}-${i}`}
              className="bg-white rounded-3xl p-6 shadow-sm hover:shadow-md transition-all duration-300 flex flex-col"
            >
              <Stars count={t.estrellas} />
              <p className="text-gray-600 text-sm leading-relaxed my-4 flex-1 italic">"{t.texto}"</p>
              <div className="flex items-center gap-3 mt-auto pt-4 border-t border-gray-100">
                <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${t.color}`}>
                  {t.inicial}
                </div>
                <div>
                  <p className="font-bold text-green-900 text-sm">{t.nombre}</p>
                  <p className="text-gray-400 text-xs">{t.mascota}</p>
                  <p className="text-green-600 text-xs font-semibold">{t.servicio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Mobile: single card */}
        <div className="lg:hidden">
          <div className="bg-white rounded-3xl p-6 shadow-sm">
            <Stars count={testimonios[active].estrellas} />
            <p className="text-gray-600 text-sm leading-relaxed my-4 italic">"{testimonios[active].texto}"</p>
            <div className="flex items-center gap-3 pt-4 border-t border-gray-100">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center font-bold text-sm ${testimonios[active].color}`}>
                {testimonios[active].inicial}
              </div>
              <div>
                <p className="font-bold text-green-900 text-sm">{testimonios[active].nombre}</p>
                <p className="text-gray-400 text-xs">{testimonios[active].mascota}</p>
                <p className="text-green-600 text-xs font-semibold">{testimonios[active].servicio}</p>
              </div>
            </div>
          </div>
        </div>

        {/* Navigation */}
        <div className="flex items-center justify-center gap-4 mt-8">
          <button
            onClick={prev}
            className="w-10 h-10 rounded-full border-2 border-green-300 text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 font-bold"
          >
            ←
          </button>
          <div className="flex gap-2">
            {testimonios.map((_, i) => (
              <button
                key={i}
                onClick={() => setActive(i)}
                className={`w-2.5 h-2.5 rounded-full transition-all duration-200 ${i === active ? 'bg-green-600 w-6' : 'bg-green-200'}`}
              />
            ))}
          </div>
          <button
            onClick={next}
            className="w-10 h-10 rounded-full border-2 border-green-300 text-green-600 hover:bg-green-600 hover:text-white hover:border-green-600 transition-all duration-200 font-bold"
          >
            →
          </button>
        </div>
      </div>
    </section>
  )
}

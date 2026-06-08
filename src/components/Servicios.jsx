import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const servicios = [
  { icon: '🩺', title: 'Consulta general', desc: 'Revisión completa y chequeos de salud anuales adaptados a cada especie y edad.' },
  { icon: '💉', title: 'Vacunación y desparasitación', desc: 'Calendarios personalizados para proteger a tu mascota contra enfermedades.' },
  { icon: '🔬', title: 'Cirugía veterinaria', desc: 'Intervenciones de tejidos blandos y ortopedia con anestesia monitorizada.' },
  { icon: '🦷', title: 'Odontología veterinaria', desc: 'Limpieza dental, extracciones y tratamientos periodontales bajo anestesia.' },
  { icon: '📡', title: 'Diagnóstico por imagen', desc: 'Radiografía digital y ecografía para diagnósticos precisos y rápidos.' },
  { icon: '🧪', title: 'Análisis clínicos', desc: 'Laboratorio propio para hemogramas, bioquímica y urianálisis en el día.' },
  { icon: '🏨', title: 'Hospitalización', desc: 'Área de cuidados intensivos con monitorización continua y atención especializada.' },
  { icon: '📍', title: 'Microchip e identificación', desc: 'Implantación de microchip e inscripción en el Registro Nacional de Animales.' },
  { icon: '🥗', title: 'Nutrición y peso', desc: 'Planes nutricionales personalizados según raza, edad y condición de salud.' },
  { icon: '✂️', title: 'Peluquería y estética', desc: 'Baño, corte, cepillado y cuidado estético profesional para tu mascota.' },
  { icon: '🏠', title: 'Asesoramiento en adopción', desc: 'Guía completa para la llegada de una nueva mascota a casa con toda la información.' },
]

export default function Servicios() {
  const { ref, inView } = useIntersectionObserver()

  return (
    <section id="servicios" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-7xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            🐾 Nuestros servicios
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-green-950 mb-4">
            Todo lo que tu mascota necesita,{' '}
            <span className="text-green-600 italic">en un solo lugar</span>
          </h2>
          <p className="text-gray-500 text-lg max-w-2xl mx-auto">
            Ofrecemos atención veterinaria integral con equipamiento moderno
            y el trato más cercano.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {servicios.map((s, i) => (
            <div
              key={s.title}
              className={`bg-white border border-gray-100 rounded-2xl p-5 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-green-200 transition-all duration-300 group cursor-default ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 50}ms` }}
            >
              <div className="w-11 h-11 bg-green-50 group-hover:bg-green-100 rounded-xl flex items-center justify-center text-xl mb-3 transition-colors duration-200">
                {s.icon}
              </div>
              <h3 className="font-bold text-green-900 text-sm mb-1.5 leading-snug">{s.title}</h3>
              <p className="text-gray-500 text-xs leading-relaxed">{s.desc}</p>
            </div>
          ))}

          {/* CTA card */}
          <div className={`bg-gradient-to-br from-green-700 to-green-600 rounded-2xl p-5 shadow-sm flex flex-col justify-between transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'}`}>
            <div>
              <div className="text-3xl mb-3">✨</div>
              <h3 className="font-bold text-white text-sm mb-1.5">¿No encuentras lo que buscas?</h3>
              <p className="text-green-200 text-xs leading-relaxed">
                Contáctanos y te orientamos sobre el mejor tratamiento para tu mascota.
              </p>
            </div>
            <button
              onClick={() => document.querySelector('#cita')?.scrollIntoView({ behavior: 'smooth' })}
              className="mt-4 bg-white text-green-700 font-bold text-xs px-4 py-2 rounded-full hover:bg-green-50 transition-colors duration-200"
            >
              Pedir cita →
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}

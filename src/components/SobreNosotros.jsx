import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const valores = [
  { icon: '🏥', title: 'Clínica de referencia', desc: 'Equipamiento diagnóstico moderno y protocolos actualizados.' },
  { icon: '❤️', title: 'Trato con amor', desc: 'Cada mascota recibe atención individualizada como si fuera de nuestra familia.' },
  { icon: '🎓', title: 'Equipo titulado', desc: 'Veterinarios colegiados con formación continua y especialización.' },
  { icon: '🌿', title: 'Medicina preventiva', desc: 'Apostamos por prevenir antes que curar, con revisiones y seguimiento.' },
]

export default function SobreNosotros() {
  const { ref, inView } = useIntersectionObserver()

  return (
    <section id="sobre-nosotros" className="py-24 bg-white overflow-hidden">
      <div className="max-w-6xl mx-auto px-6">
        <div ref={ref} className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

          {/* Text column */}
          <div className={`transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-10'}`}>
            <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-5">
              🌿 Nuestra historia
            </span>
            <h2 className="font-display text-4xl md:text-5xl font-bold text-green-950 mb-6 leading-tight">
              Más de dos décadas<br />
              <span className="text-green-600 italic">cuidando a Castalla</span>
            </h2>
            <p className="text-gray-600 text-base leading-relaxed mb-4">
              La Clínica Veterinaria Castalla nació del amor por los animales y del compromiso con nuestra
              comunidad. Desde nuestros inicios en el corazón de Castalla, hemos acompañado a miles de
              familias en el cuidado de sus mascotas más queridas.
            </p>
            <p className="text-gray-600 text-base leading-relaxed mb-6">
              Nuestro equipo combina la cercanía del médico de pueblo con la especialización de una
              clínica de ciudad. Atendemos perros, gatos, conejos, aves, reptiles y animales exóticos
              con la misma dedicación.
            </p>

            <blockquote className="border-l-4 border-green-400 pl-5 py-1 mb-8">
              <p className="text-green-800 font-semibold text-base italic leading-relaxed">
                "Aquí los tratamos como en casa, porque para nosotros también son de la familia."
              </p>
            </blockquote>

            <div className="flex flex-wrap gap-2">
              {['Medicina preventiva', 'Cirugía especializada', 'Diagnóstico moderno', 'Trato familiar'].map(tag => (
                <span key={tag} className="bg-green-50 border border-green-200 text-green-700 text-xs font-semibold px-3 py-1.5 rounded-full">
                  {tag}
                </span>
              ))}
            </div>
          </div>

          {/* Visual column */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-10'}`}>
            {/* Main image placeholder */}
            <div className="relative mb-4">
              <div className="bg-gradient-to-br from-green-100 via-emerald-50 to-lime-100 rounded-3xl h-52 flex items-center justify-center relative overflow-hidden shadow-inner">
                <div className="absolute top-3 right-3 w-16 h-16 bg-green-200/60 rounded-full blur-xl" />
                <div className="absolute bottom-3 left-3 w-20 h-20 bg-emerald-200/60 rounded-full blur-xl" />
                <div className="relative text-center">
                  <div className="text-5xl mb-2">🏥</div>
                  <p className="text-green-800 font-bold text-sm">Clínica Veterinaria Castalla</p>
                  <p className="text-green-600 text-xs">C. Ismael Vidal, 10 · Castalla</p>
                </div>
              </div>
              {/* Badge flotante */}
              <div className="absolute -bottom-4 -right-2 bg-green-600 text-white text-xs font-bold px-4 py-2 rounded-full shadow-lg">
                +20 años de confianza 🐾
              </div>
            </div>

            {/* Values grid */}
            <div className="grid grid-cols-2 gap-3 mt-8">
              {valores.map((v, i) => (
                <div
                  key={v.title}
                  className="bg-[#FAF7F2] border border-green-100 rounded-2xl p-4 hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
                  style={{ transitionDelay: `${i * 80 + 300}ms` }}
                >
                  <div className="text-xl mb-2">{v.icon}</div>
                  <h3 className="font-bold text-green-900 text-xs mb-1 leading-snug">{v.title}</h3>
                  <p className="text-gray-500 text-xs leading-relaxed">{v.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

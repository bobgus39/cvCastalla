import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const items = [
  { emoji: '🐕', label: 'Max — Labrador', color: 'from-amber-100 to-orange-100', text: 'Post-operatorio exitoso' },
  { emoji: '🐈', label: 'Mimi — Siamés', color: 'from-blue-100 to-indigo-100', text: 'Revisión anual' },
  { emoji: '🐇', label: 'Fluffy — Angora', color: 'from-pink-100 to-rose-100', text: 'Control de peso' },
  { emoji: '🦜', label: 'Loro — Amazona', color: 'from-green-100 to-emerald-100', text: 'Chequeo exóticos' },
  { emoji: '🐕‍🦺', label: 'Rocky — Border Collie', color: 'from-yellow-100 to-amber-100', text: 'Vacunación completa' },
  { emoji: '🐈‍⬛', label: 'Noche — Gato negro', color: 'from-purple-100 to-violet-100', text: 'Microchip implantado' },
  { emoji: '🦎', label: 'Iguana verde', color: 'from-teal-100 to-cyan-100', text: 'Primera consulta' },
  { emoji: '🐹', label: 'Peanut — Hámster', color: 'from-orange-100 to-red-100', text: 'Revisión rutinaria' },
  { emoji: '🏥', label: 'Nuestras instalaciones', color: 'from-green-100 to-lime-100', text: 'Quirófano moderno' },
]

export default function Galeria() {
  const { ref, inView } = useIntersectionObserver()

  return (
    <section id="galeria" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            📸 Galería
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-green-950 mb-4">
            Momentos que nos{' '}
            <span className="text-green-600 italic">llenan el corazón</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Cada mascota tiene su historia. Aquí compartimos algunos de los momentos más especiales
            de nuestra clínica.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {items.map((item, i) => (
            <div
              key={item.label}
              className={`group relative bg-gradient-to-br ${item.color} rounded-3xl overflow-hidden aspect-square flex flex-col items-center justify-center cursor-default hover:shadow-xl transition-all duration-300 hover:-translate-y-1 ${
                inView ? 'opacity-100 scale-100' : 'opacity-0 scale-95'
              } ${i === 4 ? 'md:col-span-1 md:row-span-1' : ''}`}
              style={{ transitionDelay: `${i * 80}ms` }}
            >
              <span className="text-6xl md:text-7xl group-hover:scale-110 transition-transform duration-300">
                {item.emoji}
              </span>
              <div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-3 translate-y-full group-hover:translate-y-0 transition-transform duration-300">
                <p className="font-bold text-green-900 text-sm text-center">{item.label}</p>
                <p className="text-green-600 text-xs text-center font-semibold">{item.text}</p>
              </div>
            </div>
          ))}
        </div>

        <div className={`mt-10 text-center transition-all duration-700 delay-500 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-gray-500 text-sm">
            ¿Quieres ver más fotos? Síguenos en{' '}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-green-600 font-bold hover:underline"
            >
              Instagram 📸
            </a>
          </p>
        </div>
      </div>
    </section>
  )
}

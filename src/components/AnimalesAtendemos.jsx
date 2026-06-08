import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const animales = [
  { icon: '🐕', name: 'Perros', desc: 'Desde cachorros hasta seniors. Todas las razas y tamaños.' },
  { icon: '🐈', name: 'Gatos', desc: 'Atención especializada en felinos para su bienestar integral.' },
  { icon: '🐇', name: 'Conejos y roedores', desc: 'Cuidado experto de conejos, cobayas, hámsters y más.' },
  { icon: '🦜', name: 'Aves', desc: 'Loros, canarios y aves exóticas en manos especializadas.' },
  { icon: '🦎', name: 'Reptiles y exóticos', desc: 'Tortugas, serpientes, iguanas y otros animales únicos.' },
]

export default function AnimalesAtendemos() {
  const { ref, inView } = useIntersectionObserver()

  return (
    <section id="animales" className="py-24 bg-gradient-to-b from-green-950 to-green-900 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-green-500/10 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-emerald-400/10 rounded-full blur-3xl" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-green-500/20 border border-green-400/30 text-green-300 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            🌍 Todos bienvenidos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-white mb-4">
            Atendemos a{' '}
            <span className="text-green-300 italic">todas las mascotas</span>
          </h2>
          <p className="text-green-200 text-lg max-w-2xl mx-auto">
            Da igual si tienes perro, gato, conejo o iguana — en la Clínica Vet Castalla
            hay un experto esperando para cuidarlos.
          </p>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5">
          {animales.map((a, i) => (
            <div
              key={a.name}
              className={`group bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/10 hover:border-green-400/40 rounded-3xl p-6 text-center transition-all duration-300 hover:-translate-y-1 cursor-default ${
                inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-8'
              }`}
              style={{ transitionDelay: `${i * 100}ms` }}
            >
              <div className="text-5xl mb-4 group-hover:scale-110 transition-transform duration-200">
                {a.icon}
              </div>
              <h3 className="font-bold text-white text-base mb-2">{a.name}</h3>
              <p className="text-green-300 text-xs leading-relaxed">{a.desc}</p>
            </div>
          ))}
        </div>

        <div className={`mt-12 text-center transition-all duration-700 delay-600 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-4'}`}>
          <p className="text-green-300 text-sm font-semibold">
            ¿No ves a tu animal? Llámanos — seguro que podemos ayudarte 📞
          </p>
        </div>
      </div>
    </section>
  )
}

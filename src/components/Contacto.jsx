import { useIntersectionObserver } from '../hooks/useIntersectionObserver'

const horarios = [
  { dia: 'Lunes — Viernes', horas: '9:00 — 14:00 / 17:00 — 20:00' },
  { dia: 'Sábados', horas: '10:00 — 14:00' },
  { dia: 'Domingos y festivos', horas: 'Cerrado (urgencias: llámenos)' },
]

export default function Contacto() {
  const { ref, inView } = useIntersectionObserver()

  return (
    <section id="contacto" className="py-24 bg-white">
      <div className="max-w-6xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-16 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            📍 Encuéntranos
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-green-950 mb-4">
            Estamos en el corazón{' '}
            <span className="text-green-600 italic">de Castalla</span>
          </h2>
        </div>

        <div className="grid lg:grid-cols-2 gap-10">
          {/* Info */}
          <div className={`space-y-6 transition-all duration-700 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 -translate-x-8'}`}>
            {/* Address */}
            <div className="bg-green-50 rounded-3xl p-6">
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 bg-green-600 rounded-2xl flex items-center justify-center text-white text-xl flex-shrink-0">
                  📍
                </div>
                <div>
                  <h3 className="font-bold text-green-900 text-lg mb-1">Dirección</h3>
                  <p className="text-gray-600">C. Ismael Vidal, 10</p>
                  <p className="text-gray-600">03420 Castalla, Alicante</p>
                  <a
                    href="https://www.google.com/maps/search/C.+Ismael+Vidal,+10,+03420+Castalla,+Alicante"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-green-600 font-semibold text-sm hover:underline mt-1 inline-block"
                  >
                    Abrir en Google Maps →
                  </a>
                </div>
              </div>
            </div>

            {/* Phone & Email */}
            <div className="grid sm:grid-cols-2 gap-4">
              <div className="bg-white border border-green-100 rounded-3xl p-5">
                <div className="text-2xl mb-2">📞</div>
                <h3 className="font-bold text-green-900 text-sm mb-1">Teléfono</h3>
                <a href="tel:+34965000000" className="text-green-600 font-semibold hover:underline">
                  965 00 00 00
                </a>
                <p className="text-gray-400 text-xs mt-1">Llamadas y WhatsApp</p>
              </div>
              <div className="bg-white border border-green-100 rounded-3xl p-5">
                <div className="text-2xl mb-2">✉️</div>
                <h3 className="font-bold text-green-900 text-sm mb-1">Email</h3>
                <a href="mailto:info@veterinariacastalla.es" className="text-green-600 font-semibold hover:underline text-sm">
                  info@veterinariacastalla.es
                </a>
              </div>
            </div>

            {/* Horarios */}
            <div className="bg-white border border-green-100 rounded-3xl p-6">
              <div className="flex items-center gap-2 mb-4">
                <span className="text-xl">🕐</span>
                <h3 className="font-bold text-green-900 text-lg">Horarios</h3>
              </div>
              <div className="space-y-3">
                {horarios.map((h) => (
                  <div key={h.dia} className="flex justify-between items-center py-2 border-b border-gray-50 last:border-0">
                    <span className="text-gray-600 text-sm font-medium">{h.dia}</span>
                    <span className="text-green-700 text-sm font-bold">{h.horas}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Social */}
            <div className="bg-white border border-green-100 rounded-3xl p-5">
              <h3 className="font-bold text-green-900 text-sm mb-3">Síguenos</h3>
              <div className="flex gap-3">
                <a
                  href="https://instagram.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-gradient-to-r from-purple-500 to-pink-500 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  📸 Instagram
                </a>
                <a
                  href="https://facebook.com"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-blue-600 text-white px-4 py-2.5 rounded-xl text-sm font-bold hover:opacity-90 transition-opacity"
                >
                  👍 Facebook
                </a>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className={`transition-all duration-700 delay-200 ${inView ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-8'}`}>
            <div className="rounded-3xl overflow-hidden shadow-lg h-full min-h-80">
              <iframe
                title="Mapa Clínica Veterinaria Castalla"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3119.8!2d-0.6667!3d38.5972!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6256a0000000001%3A0x1!2sC.+Ismael+Vidal%2C+10%2C+03420+Castalla%2C+Alicante!5e0!3m2!1ses!2ses!4v1700000000000!5m2!1ses!2ses"
                width="100%"
                height="100%"
                style={{ border: 0, minHeight: '400px' }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

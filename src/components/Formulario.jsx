import { useState } from 'react'
import { useIntersectionObserver } from '../hooks/useIntersectionObserver'
import { enviarCita } from '../services/api'

const especies = [
  'Perro', 'Gato', 'Conejo', 'Roedor (hámster, cobaya...)',
  'Ave / Loro', 'Reptil', 'Otro animal exótico',
]

const motivos = [
  'Consulta general / revisión', 'Vacunación y desparasitación',
  'Cirugía veterinaria', 'Odontología veterinaria',
  'Diagnóstico por imagen', 'Análisis clínicos',
  'Hospitalización', 'Microchip', 'Nutrición y control de peso',
  'Peluquería y estética', 'Asesoramiento en adopción', 'Urgencia', 'Otro',
]

const initialForm = {
  nombreDueno: '', nombreMascota: '', especie: '',
  telefono: '', email: '', motivo: '', fecha: '', mensaje: '',
}

const inputBase =
  'w-full border-2 border-gray-200 focus:border-green-500 hover:border-green-300 rounded-xl px-4 py-3 text-gray-700 bg-white outline-none text-sm transition-colors duration-200 placeholder:text-gray-400'

function Field({ label, required, children }) {
  return (
    <div className="flex flex-col gap-1.5">
      <label className="text-green-900 font-semibold text-sm">
        {label}{required && <span className="text-green-500 ml-0.5">*</span>}
      </label>
      {children}
    </div>
  )
}

export default function Formulario() {
  const { ref, inView } = useIntersectionObserver()
  const [form, setForm] = useState(initialForm)
  const [estado, setEstado] = useState('idle')
  const [errorMsg, setErrorMsg] = useState('')

  const set = (field) => (e) => setForm((p) => ({ ...p, [field]: e.target.value }))

  const handleSubmit = async (e) => {
    e.preventDefault()
    setEstado('loading')
    setErrorMsg('')
    try {
      await enviarCita(form)
      setEstado('success')
      setForm(initialForm)
    } catch (err) {
      setEstado('error')
      setErrorMsg(
        err?.response?.data?.mensaje ||
        'Ha ocurrido un error. Inténtalo de nuevo o llámanos directamente.'
      )
    }
  }

  if (estado === 'success') {
    return (
      <section id="cita" className="py-24 bg-[#FAF7F2]">
        <div className="max-w-xl mx-auto px-6 text-center">
          <div className="bg-white rounded-3xl p-12 shadow-lg">
            <div className="text-6xl mb-6">🐾</div>
            <h3 className="font-display text-3xl font-bold text-green-900 mb-4">¡Cita solicitada!</h3>
            <p className="text-gray-600 mb-6 leading-relaxed">
              Hemos recibido tu solicitud. Nos pondremos en contacto contigo en menos de 24 horas
              para confirmar la cita de tu mascota.
            </p>
            <p className="text-green-700 font-semibold text-sm mb-6">📞 Si es urgente, llámanos directamente</p>
            <button
              onClick={() => setEstado('idle')}
              className="bg-green-600 hover:bg-green-700 text-white font-bold px-6 py-3 rounded-full transition-all duration-200"
            >
              Pedir otra cita
            </button>
          </div>
        </div>
      </section>
    )
  }

  return (
    <section id="cita" className="py-24 bg-[#FAF7F2]">
      <div className="max-w-4xl mx-auto px-6">
        <div
          ref={ref}
          className={`text-center mb-12 transition-all duration-700 ${inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'}`}
        >
          <span className="inline-block bg-green-100 text-green-700 text-sm font-bold px-4 py-1.5 rounded-full mb-4">
            📅 Reservar cita
          </span>
          <h2 className="font-display text-4xl md:text-5xl font-bold text-green-950 mb-4">
            Tu mascota te lo{' '}
            <span className="text-green-600 italic">agradecerá</span>
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto">
            Rellena el formulario y te contactamos en menos de 24 horas para confirmar tu cita.
          </p>
        </div>

        <div
          className={`bg-white rounded-3xl shadow-lg p-8 md:p-10 transition-all duration-700 delay-200 ${
            inView ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-6'
          }`}
        >
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Fila 1 */}
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Nombre del dueño" required>
                <input
                  className={inputBase}
                  placeholder="Tu nombre completo"
                  value={form.nombreDueno}
                  onChange={set('nombreDueno')}
                  required
                />
              </Field>
              <Field label="Nombre de la mascota" required>
                <input
                  className={inputBase}
                  placeholder="¿Cómo se llama?"
                  value={form.nombreMascota}
                  onChange={set('nombreMascota')}
                  required
                />
              </Field>
            </div>

            {/* Fila 2 */}
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Especie / Tipo de animal" required>
                <select
                  className={inputBase}
                  value={form.especie}
                  onChange={set('especie')}
                  required
                >
                  <option value="">Selecciona el tipo de animal</option>
                  {especies.map((e) => <option key={e} value={e}>{e}</option>)}
                </select>
              </Field>
              <Field label="Teléfono" required>
                <input
                  className={inputBase}
                  type="tel"
                  placeholder="Tu número de contacto"
                  value={form.telefono}
                  onChange={set('telefono')}
                  required
                />
              </Field>
            </div>

            {/* Fila 3 */}
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Email">
                <input
                  className={inputBase}
                  type="email"
                  placeholder="tu@email.com"
                  value={form.email}
                  onChange={set('email')}
                />
              </Field>
              <Field label="Motivo de la consulta" required>
                <select
                  className={inputBase}
                  value={form.motivo}
                  onChange={set('motivo')}
                  required
                >
                  <option value="">Selecciona el motivo</option>
                  {motivos.map((m) => <option key={m} value={m}>{m}</option>)}
                </select>
              </Field>
            </div>

            {/* Fila 4 */}
            <div className="grid md:grid-cols-2 gap-5">
              <Field label="Fecha preferida">
                <input
                  className={inputBase}
                  type="date"
                  value={form.fecha}
                  onChange={set('fecha')}
                  min={new Date().toISOString().split('T')[0]}
                />
              </Field>
              <div className="hidden md:block" />
            </div>

            {/* Mensaje */}
            <Field label="Mensaje adicional (opcional)">
              <textarea
                className={`${inputBase} resize-none`}
                rows={4}
                placeholder="Cuéntanos más sobre los síntomas, historial previo o cualquier duda que tengas..."
                value={form.mensaje}
                onChange={set('mensaje')}
              />
            </Field>

            {estado === 'error' && (
              <div className="bg-red-50 border border-red-200 text-red-700 rounded-xl p-4 text-sm">
                {errorMsg}
              </div>
            )}

            <button
              type="submit"
              disabled={estado === 'loading'}
              className="w-full bg-green-600 hover:bg-green-700 active:bg-green-800 disabled:bg-green-300 text-white font-bold py-4 rounded-2xl text-lg transition-all duration-200 shadow-md hover:shadow-lg disabled:cursor-not-allowed"
            >
              {estado === 'loading' ? '⏳ Enviando...' : '🐾 Solicitar Cita'}
            </button>

            <p className="text-gray-400 text-xs text-center">
              Al enviar aceptas nuestra{' '}
              <a href="#privacidad" className="text-green-600 hover:underline">
                política de privacidad
              </a>
              . No compartimos tus datos con terceros.
            </p>
          </form>
        </div>
      </div>
    </section>
  )
}

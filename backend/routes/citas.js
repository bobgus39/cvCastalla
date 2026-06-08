const express = require('express')
const { body, validationResult } = require('express-validator')
const pool = require('../db/connection')

const router = express.Router()

const validarCita = [
  body('nombreDueno').trim().notEmpty().isLength({ max: 150 }).escape(),
  body('nombreMascota').trim().notEmpty().isLength({ max: 100 }).escape(),
  body('especie').trim().notEmpty().isLength({ max: 80 }).escape(),
  body('telefono').trim().notEmpty().isLength({ max: 20 }).escape(),
  body('email').optional({ checkFalsy: true }).isEmail().normalizeEmail(),
  body('motivo').trim().notEmpty().isLength({ max: 120 }).escape(),
  body('fecha').optional({ checkFalsy: true }).isDate(),
  body('mensaje').optional().trim().isLength({ max: 2000 }).escape(),
]

// POST /api/citas
router.post('/', validarCita, async (req, res) => {
  const errors = validationResult(req)
  if (!errors.isEmpty()) {
    return res.status(400).json({ ok: false, errores: errors.array() })
  }

  const { nombreDueno, nombreMascota, especie, telefono, email, motivo, fecha, mensaje } = req.body

  try {
    const [result] = await pool.execute(
      `INSERT INTO citas (nombre_dueno, nombre_mascota, especie, telefono, email, motivo, fecha_preferida, mensaje)
       VALUES (?, ?, ?, ?, ?, ?, ?, ?)`,
      [nombreDueno, nombreMascota, especie, telefono, email || null, motivo, fecha || null, mensaje || null]
    )

    res.status(201).json({
      ok: true,
      mensaje: 'Cita solicitada correctamente. Te contactaremos en menos de 24 horas.',
      id: result.insertId,
    })
  } catch (err) {
    console.error('Error al guardar cita:', err)
    res.status(500).json({ ok: false, mensaje: 'Error interno del servidor. Por favor llámenos directamente.' })
  }
})

// GET /api/citas (admin — proteger con auth en producción)
router.get('/', async (req, res) => {
  try {
    const [rows] = await pool.execute('SELECT * FROM citas ORDER BY created_at DESC LIMIT 100')
    res.json({ ok: true, citas: rows })
  } catch (err) {
    console.error(err)
    res.status(500).json({ ok: false, mensaje: 'Error al obtener citas' })
  }
})

module.exports = router

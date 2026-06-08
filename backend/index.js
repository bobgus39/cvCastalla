require('dotenv').config()
const express = require('express')
const cors = require('cors')
const citasRouter = require('./routes/citas')

const app = express()
const PORT = process.env.PORT || 3001

app.use(cors({
  origin: process.env.FRONTEND_URL || '*',
}))
app.use(express.json())

app.use('/api/citas', citasRouter)

app.get('/api/health', (_, res) => res.json({ status: 'ok', service: 'Clínica Vet Castalla API' }))

app.listen(PORT, () => {
  console.log(`🐾 Backend Clínica Vet Castalla corriendo en puerto ${PORT}`)
})

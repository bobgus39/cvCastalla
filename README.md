# Clínica Veterinaria Castalla — Web Oficial

Web profesional para la Clínica Veterinaria Castalla (C. Ismael Vidal, 10, 03420 Castalla, Alicante).

## Stack técnico

- **Frontend**: React 19 + Vite 8 + Tailwind CSS v4 + HeroUI v2
- **Backend**: Node.js + Express + MySQL
- **Despliegue**: GitHub Pages (HashRouter + base `/veterinaria-castalla/`)

---

## Estructura del proyecto

```
cvCastalla/
├── src/
│   ├── components/
│   │   ├── Navbar.jsx
│   │   ├── Hero.jsx
│   │   ├── SobreNosotros.jsx
│   │   ├── Servicios.jsx
│   │   ├── AnimalesAtendemos.jsx
│   │   ├── MedicinaPreventiva.jsx
│   │   ├── Proceso.jsx
│   │   ├── PorQueElegirnos.jsx
│   │   ├── Testimonios.jsx
│   │   ├── Galeria.jsx
│   │   ├── Formulario.jsx
│   │   ├── Contacto.jsx
│   │   └── Footer.jsx
│   ├── pages/
│   │   └── Home.jsx
│   ├── hooks/
│   │   └── useIntersectionObserver.js
│   ├── services/
│   │   └── api.js
│   └── main.jsx
├── backend/
│   ├── routes/citas.js
│   ├── db/
│   │   ├── connection.js
│   │   └── schema.sql
│   └── index.js
├── .env.example
├── vite.config.js
└── README.md
```

---

## Instalación y desarrollo local

### Frontend

```bash
npm install
cp .env.example .env
npm run dev
```

Accede en: http://localhost:5173/veterinaria-castalla/

### Backend

```bash
cd backend
npm install
cp .env.example .env
# Edita .env con tus credenciales MySQL
mysql -u root -p < db/schema.sql
npm run dev
```

API en: http://localhost:3001

**Endpoints:**
- `GET  /api/health` — Estado del servidor
- `POST /api/citas`  — Crear solicitud de cita
- `GET  /api/citas`  — Listar citas (admin)

---

## Variables de entorno

### Frontend (`.env`)
```
VITE_API_URL=http://localhost:3001
```

### Backend (`backend/.env`)
```
PORT=3001
DB_HOST=localhost
DB_USER=root
DB_PASSWORD=
DB_NAME=veterinaria_castalla
FRONTEND_URL=http://localhost:5173
```

---

## Despliegue en GitHub Pages

```bash
git init
git remote add origin https://github.com/TU_USUARIO/veterinaria-castalla.git
npm run deploy
```

La web quedará en: `https://TU_USUARIO.github.io/veterinaria-castalla/`

> `base: '/veterinaria-castalla/'` en `vite.config.js` y `HashRouter` en `main.jsx` ya están preconfigurados.

---

## Personalización

- **Teléfono**: busca `965 00 00 00` en `Contacto.jsx` y `Footer.jsx`
- **Email**: busca `info@veterinariacastalla.es`
- **Redes sociales**: actualiza los href en `Contacto.jsx` y `Footer.jsx`
- **Google Maps**: sustituye el `src` del iframe en `Contacto.jsx` con el embed real
- **Testimonios**: edita el array en `Testimonios.jsx` con reseñas reales
- **Galería**: reemplaza los emojis por imágenes reales en `Galeria.jsx`

---

## Checklist producción

- [ ] Configurar MySQL y ejecutar `schema.sql`
- [ ] Poner URL real del backend en `VITE_API_URL`
- [ ] Autenticación en `GET /api/citas` (admin)
- [ ] Actualizar teléfono, email y redes sociales reales
- [ ] Sustituir embed de Google Maps por el real
- [ ] Añadir fotos reales en Galería
- [ ] Testimonios reales de clientes
- [ ] Política de privacidad y aviso legal

---

© 2024 Clínica Veterinaria Castalla. Todos los derechos reservados.

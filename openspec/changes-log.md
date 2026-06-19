# Historial de Cambios

## 19 Jun 2026

### `0884859` — fix(seo): actualizar dominio y corregir OG images

**Archivos:** `index.html`, `src/components/ui/SEO.tsx`

- Cambiado `lineasofttech.com` → `linea-soft-tech-web.vercel.app`
- `og:image` y `twitter:image` ahora son URL absolutas
- Agregados preconnect para Google Fonts en `<head>`
- Actualizado default `url` e `image` en el componente SEO

---

### `f056d08` — fix(css): migrar colores a sintaxis Tailwind v4

**Archivos:** `src/index.css`

- Reemplazados 12 valores `rgb(... / var(--tw-*-opacity))` por hex puro
- Eliminado `@import url()` de Google Fonts (ya se carga via `<link>`)

---

### `45ab819` — fix(header): corregir toggle del menú mobile

**Archivos:** `src/components/layout/Header.tsx`

- Agregada clase `group` al `DisclosureButton` para que `group-data-open:*` funcione

---

### `8650cb2` — fix(contact): validar response.ok antes de parsear JSON

**Archivos:** `src/components/sections/ContactSection.tsx`

- Movido `response.json()` después del chequeo de `response.ok`
- Si el server responde con error HTML, ya no explota al hacer `.json()`

---

### `ef1a2de` — fix(footer): agregar rel noopener noreferrer

**Archivos:** `src/components/layout/Footer.tsx`

- Agregado `rel="noopener noreferrer"` a links de LinkedIn y GitHub
- Eliminado código comentado de Instagram
- Corregido typo "Como trabajamos" → "Cómo trabajamos"

---

### `68656f6` — fix(legal): eliminar main anidado y agregar SEO

**Archivos:** `src/pages/legal/TermsPage.tsx`, `PrivacyPage.tsx`, `CookiesPage.tsx`

- Eliminado `<main>` anidado (usaban fragment + `<article>`)
- Agregado componente `<SEO>` con título específico por página

---

### `5e95e90` — fix(about): corregir typo mg-2 a mb-2

**Archivos:** `src/components/sections/about/HistorySection.tsx`

- Corregidas 2 ocurrencias de `mg-2` → `mb-2`

---

### `48bc7d9` — perf(images): lazy loading y aspect-ratio

**Archivos:** Header.tsx, Footer.tsx, HeroSection.tsx, ProcessSection.tsx, ProjectCard.tsx, HistorySection.tsx, TeamSection.tsx

- Header logo + Hero: `loading="eager"` (above the fold)
- Footer, Process, Projects, History, Team: `loading="lazy"`
- ProjectCard: `h-80` → `aspect-[4/3]`
- ProcessSection: eliminado `data-alt` muerto

---

### `29ac137` — chore(security): security headers en vercel.json

**Archivos:** `vercel.json`

- Agregados headers: `X-Frame-Options: DENY`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`
- Cache-Control para assets: `public, max-age=31536000, immutable`

---

### `4f82230` — fix(utils): corregir import path en servicesData

**Archivos:** `src/utils/servicesData.tsx`

- `../utils/models/...` → `./models/...`

---

### `16da0ba` — fix(legal): typos en PrivacyPage

**Archivos:** `src/pages/legal/PrivacyPage.tsx`

- "alteration" → "alteración"
- "Su datos" → "Sus datos"

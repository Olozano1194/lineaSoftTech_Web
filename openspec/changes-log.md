# Historial de Cambios

## 21 Jun 2026

### `(working tree)` — feat(trust-signals): TrustBar, StatusBadge y descripciones honestas

**Archivos:** `TrustBar.tsx`, `StatusBadge.tsx`, `types.ts`, `projectsData.ts`, `HomePage.tsx`, `ProjectCard.tsx`, `ProjectDetailPage.tsx`

- Creado `TrustBar` — barra de confianza con 4 stats reales (+4 proyectos, +2 años, React·TS·Django, atención personalizada)
- Creado `StatusBadge` — badge reutilizable con 3 estados: Demo (azul), Prueba piloto (ámbar), Completado (verde)
- Agregado `ProjectStatus` union type (`"portfolio" | "pilot" | "completed"`) con campo `status` en `Project`
- Actualizados datos: FiadoApp como `"pilot"` con mención a prueba piloto en comercio local, resto como `"portfolio"` sin clientes ficticios
- Integración: TrustBar entre Hero y Services en HomePage, StatusBadge en ProjectCard y ProjectDetailPage
- Build: 0 errores TypeScript + vite build exitoso
- SDD completo: 17/17 escenarios verificados
- Artifacts SDD en `openspec/changes/trust-signals/`

## 20 Jun 2026

### `ad630cc` — feat(error-boundaries): Error Boundaries con fallback brandeado

**Archivos:** `main.tsx`, `LayoutAdmin.tsx`, `ErrorFallback.tsx`, `ErrorFallback.test.tsx`, `vitest.config.ts`

- Instalado `react-error-boundary` para manejo de errores de render
- Creado `ErrorFallback.tsx` — componente brandeado con logo, mensaje, botón reintentar y contacto
- **Per-section**: LayoutAdmin envuelve `<Outlet>` con `<ErrorBoundary>` — si una página explota, Header/Footer sobreviven
- **Global**: main.tsx envuelve `<Router>` con `<ErrorBoundary>` — última línea de defensa
- `<Toaster>` movido dentro de `<Router>` para acceso a navegación desde el fallback
- Tests: 6 tests (3 unit + 3 integración) — todos pasando
- Artifacts SDD completos en `openspec/changes/error-boundaries/`

### `(working tree)` — refactor(sections): extraer PlanCard, ProcessStep y TeamMemberCard

**Archivos:** `PlanCard.tsx`, `ProcessStep.tsx`, `TeamMemberCard.tsx`, `PlanSolutionSection.tsx`, `ProcessSection.tsx`, `TeamSection.tsx`

- Creado `PlanCard` — card de plan reutilizable con icono, precio, features, badge "Más Popular" y BtnPrice
- Creado `ProcessStep` — step numerado con círculo, título y descripción
- Creado `TeamMemberCard` — card de miembro con imagen, nombre, rol y descripción
- `PlanSolutionSection.tsx`: -69 líneas, 3 cards inline → 3× `<PlanCard>`
- `ProcessSection.tsx`: -13 líneas, 4 steps inline → 4× `<ProcessStep>`
- `TeamSection.tsx`: -15 líneas, 2 miembros inline → 2× `<TeamMemberCard>`
- ~97 líneas de duplicación eliminadas en total
- Tests: 6 tests (2 unit + 2 smoke) — todos pasando
- Artifacts SDD completos en `openspec/changes/refactor-section-components/`

### ✅ `08c8105` — feat(projects): agregar páginas de detalle en /proyecto/:slug con carrusel y datos reales

**Archivos:** `ProjectDetailPage.tsx` (nuevo), `types.ts`, `projectsData.ts`, `ProjectCard.tsx`, `App.tsx`

- Nueva ruta `/proyecto/:slug` con página completa de detalle
- ProjectCard ahora es un Link clickeable
- Secciones condicionales: galería (carrusel), demo, repo, resultados
- SEO dinámico por proyecto
- Slugs manuales para URLs estables
- Carrusel de imágenes con navegación y dots
- Datos reales desde Portafolio (sin números inflados)
- Build 0 errores — 12 tests pasando
- Artifacts SDD archivados en `openspec/changes/archive/2026-06-20-project-detail-pages/`

### ✅ `(archived 20 Jun 2026)` — feat(a11y): agregar aria-label y aria-hidden en 14 archivos

**Archivos:** Header.tsx, Footer.tsx, LayoutAdmin.tsx, ServiceCard.tsx, PlanCard.tsx, BtnPrice.tsx, ErrorFallback.tsx, HeroSection.tsx, FAQSection.tsx, ProcessSection.tsx, ContactSection.tsx, MisionVisionSection.tsx, HistorySection.tsx, Error404.tsx

- Agregados `aria-label` en navegación principal, links sociales y main
- Agregados `aria-hidden="true"` en 22 íconos decorativos
- Corregido `alt` de logo (`logo` → `LineaSoftTech`)
- Corregido `alt` de imagen en ProcessSection
- Eliminado `data-alt` no estándar en HeroSection
- Build: 0 errores

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

---

### `c688545` — feat(perf-and-polish): validar env vars, scroll flicker, .env.example

**Archivos:** `.env.example`, `BtnPrice.tsx`, `ScrollToTop.tsx`, `HomePage.tsx`, `ContactSection.tsx`

- T1: BtnPrice valida `VITE_WA_PHONE` — si falta, no renderiza el botón
- T2: `.env.example` con placeholder en inglés
- T3: ScrollToTop omitido si hay hash, `HEADER_OFFSET` compartido, `requestAnimationFrame` doble en vez de `setTimeout(100)`
- T4: ContactSection valida `VITE_CONTACTFORM_URL` antes del fetch
- Artifacts SDD completos en `openspec/changes/perf-and-polish/`

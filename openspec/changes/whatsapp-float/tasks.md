# Tasks: WhatsApp Flotante

## Review Workload Forecast

| Field | Value |
|-------|-------|
| Estimated changed lines | ~50-70 |
| 400-line budget risk | Low |
| Chained PRs recommended | No |
| Suggested split | Single PR |
| Delivery strategy | ask-on-risk |

Decision needed before apply: No
Chained PRs recommended: No
400-line budget risk: Low

### Suggested Work Units

| Unit | Goal | Likely PR | Notes |
|------|------|-----------|-------|
| 1 | Full WhatsApp float implementation | PR 1 | Componente + LayoutAdmin + ContactSection fix |

## Phase 1: Componente WhatsAppFloat

- [x] 1.1 Crear `src/components/ui/WhatsAppFloat.tsx`
  - Constante `WA_PHONE = import.meta.env.VITE_WA_PHONE`
  - Safe fallback: `if (!WA_PHONE) return null`
  - Mensaje genérico encodeURIComponent
  - `<a>` con href, target, rel, aria-label
  - Tooltip span (hidden md:group-hover:inline-block)
  - Icon circle (bg-green-500, w-14 h-14, FaWhatsapp blanco)
  - Animación fade-in + scale vía animate-[floatIn]
  - Definir @keyframes floatIn

## Phase 2: Integración en Layout

- [x] 2.1 Importar y renderizar `<WhatsAppFloat />` en `src/layouts/LayoutAdmin.tsx`
  - Como hermano de `<ScrollToTop />`

## Phase 3: Corregir ContactSection

- [x] 3.1 En `src/components/sections/ContactSection.tsx`
  - Importar `VITE_WA_PHONE` desde `import.meta.env`
  - Reemplazar `"https://wa.me/573021120794"` por template literal con `VITE_WA_PHONE`

## Phase 4: Verificación

- [x] 4.1 `npx tsc --noEmit` — 0 errores
- [x] 4.2 `npx vite build` — build exitoso
- [x] 4.3 Manual: botón visible en Home, /proyecto/fiadoapp, /about, /terminos
- [x] 4.4 Manual: botón abre WhatsApp con mensaje correcto
- [x] 4.5 Manual: tooltip aparece en hover/desktop
- [x] 4.6 Manual: ContactSection usa el mismo número que el flotante

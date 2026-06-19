# Propuesta: perf-and-polish

## Resumen
Correcciones rápidas de validación, consistencia y UX identificadas en la revisión general del código.

## Motivación
Cuatro issues pequeños pero con impacto tangible: validación silenciosa de env vars, placeholder en español en .env.example, flicker al navegar por hash entre páginas, y constante duplicada de header offset.

## Alcance — Incluye

1. **Validar VITE_WA_PHONE en BtnPrice** — si no está configurado, no renderizar el botón
2. **Limpiar .env.example** — placeholder en inglés
3. **Arreglar conflicto ScrollToTop vs hash-scroll** — ScrollToTop omite scroll si hay hash, extraer HEADER_OFFSET compartido, reemplazar setTimeout por rAF doble
4. **Validar VITE_CONTACTFORM_URL en ContactSection** — guard antes del fetch

## Alcance — Excluye

- Refactors grandes (duplicación en PlanSolution, MisionVision, etc.)
- Error Boundaries
- Alias de ruta @/
- Barrel exports
- Tests

## Enfoque

| Tarea | Archivos | Cambio |
|-------|----------|--------|
| 1 | src/components/ui/BtnPrice.tsx | Agregar guard `if (!WA_PHONE) return null` |
| 2 | .env.example | Reemplazar placeholder español por inglés |
| 3 | src/components/ui/ScrollToTop.tsx, src/pages/HomePage.tsx | Hash-aware scroll, constante HEADER_OFFSET compartida, rAF |
| 4 | src/components/sections/ContactSection.tsx | Guard para VITE_CONTACTFORM_URL |

## Archivos afectados

- .env.example
- src/components/ui/BtnPrice.tsx
- src/components/ui/ScrollToTop.tsx
- src/pages/HomePage.tsx
- src/components/sections/ContactSection.tsx

## Esfuerzo estimado

~50 líneas cambiadas en total. Riesgo bajo, cambios independientes.

## Riesgos

- Ninguno significativo. Los cambios son pequeños, localizados y no afectan lógica de negocio.

# Design: Accessibility Improvements

## Technical Approach

Atributos ARIA directos en los elementos JSX. Sin lógica, sin estado, sin efectos secundarios. Cada cambio es una línea o menos.

Para íconos de react-icons: `<FaLinkedin aria-hidden="true" />`
Para links: `<a aria-label="LinkedIn" ...>`
Para landmarks: `<nav aria-label="Navegación principal">`

## File Changes

| File | Changes |
|------|---------|
| `src/components/layout/Header.tsx` | + `aria-label="Navegación principal"` en nav, `alt="LineaSoftTech"` en logo |
| `src/components/layout/Footer.tsx` | + `aria-label` en 2 links, + `aria-hidden` en 4 íconos |
| `src/components/ui/ServiceCard.tsx` | + `aria-hidden` en 2 íconos |
| `src/components/ui/PlanCard.tsx` | + `aria-hidden` en 2 íconos |
| `src/components/ui/BtnPrice.tsx` | + `aria-hidden` en 1 ícono |
| `src/components/ui/ErrorFallback.tsx` | + `aria-hidden` en 1 ícono |
| `src/components/sections/HeroSection.tsx` | + `aria-hidden` en 1 ícono, eliminar data-alt |
| `src/components/sections/FAQSection.tsx` | + `aria-hidden` en 1 ícono |
| `src/components/sections/ProcessSection.tsx` | + `alt` descriptivo en imagen |
| `src/components/sections/ContactSection.tsx` | + `aria-hidden` en 3 íconos |
| `src/components/sections/about/MisionVisionSection.tsx` | + `aria-hidden` en 3 íconos |
| `src/components/sections/about/HistorySection.tsx` | + `aria-hidden` en 2 íconos |
| `src/pages/Error404.tsx` | + `aria-hidden` en 1 ícono |
| `src/layouts/LayoutAdmin.tsx` | + `aria-label="Contenido principal"` en main |
| `package.json` | + `eslint-plugin-jsx-a11y` |

## Interfaces / Contracts

No hay nuevos componentes ni tipos. Solo atributos HTML nativos.

## Testing Strategy

No hay tests funcionales (no cambia comportamiento). Build check + linter plugin instalado.

# Proposal: Accessibility Improvements

## Intent

El sitio tiene 0 atributos `aria-label` y ~22 íconos decorativos sin `aria-hidden`. Los screen readers anuncian "LinkedIn icon" sin contexto y no pueden distinguir landmarks de navegación. Agregar atributos ARIA básicos para mejorar accesibilidad.

## Scope

### In Scope
- `aria-hidden="true"` en 22 íconos decorativos (14 archivos)
- `aria-label` en 2 links sociales del Footer (LinkedIn, GitHub)
- `aria-label="Navegación principal"` en `<nav>` del Header
- `alt="LineaSoftTech"` en logo del Header
- `alt` descriptivo en imagen de ProcessSection
- `aria-label` en `<main>` de LayoutAdmin
- Instalar `eslint-plugin-jsx-a11y` para prevenir regresiones

### Out of Scope
- Refactor de imágenes ProjectCard (ya tienen alt funcional)
- Keyboard navigation / focus management
- Color contrast review
- ARIA roles complejos (tabpanel, dialog, etc.)

## Capabilities

### New Capabilities
None.

### Modified Capabilities
None. Solo atributos HTML, no cambia comportamiento ni UI.

## Approach

Sweep manual por los 14 archivos afectados agregando `aria-hidden="true"` a íconos decorativos (que son iconos SVG dentro de `react-icons` o `@heroicons/react` con función puramente visual) y `aria-label` a elementos interactivos sin texto visible.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| 14 archivos .tsx | Modified | Agregar aria-hidden / aria-label |
| `package.json` | Modified | Agregar eslint-plugin-jsx-a11y |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Regression visual | Very Low | aria attributes no afectan visual |
| Falso negativo | Low | ESLint plugin cubre futuros casos |

## Rollback Plan

`git checkout` de los archivos modificados.

## Dependencies

- `npm install eslint-plugin-jsx-a11y --save-dev`

## Success Criteria

- [ ] 22 íconos decorativos tienen `aria-hidden="true"`
- [ ] Links sociales tienen `aria-label`
- [ ] Header `<nav>` tiene `aria-label`
- [ ] Logo tiene `alt` descriptivo
- [ ] ESLint plugin instalado sin errores
- [ ] `npm run build` → 0 errores

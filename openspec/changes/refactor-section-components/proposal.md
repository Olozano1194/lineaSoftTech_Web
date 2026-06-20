# Proposal: Refactor Section Components

## Intent

~200 líneas duplicadas en secciones del sitio. Extraer componentes UI reutilizables (`PlanCard`, `ProcessStep`, `TeamMemberCard`) para reducir duplicación, mejorar mantenibilidad y consistencia visual.

## Scope

### In Scope
- `PlanCard` — card de plan con icono, título, descripción, precio, features y badge "Más Popular"
- `ProcessStep` — step numerado con título y descripción
- `TeamMemberCard` — card de miembro con imagen, nombre, rol, descripción
- Modificar secciones para usar los nuevos componentes
- Smoke tests básicos para cada componente nuevo

### Out of Scope
- `SectionHeader` genérico (demasiadas variantes, no aporta)
- Refactor de `ServicesSection` (ya usa `ServiceCard`, está bien)
- Refactor de `ContactSection` (estructura única, no aplica)

## Capabilities

### New Capabilities
- `section-components`: Componentes UI reutilizables para cards de plan, pasos de proceso y miembros del equipo, extrayendo ~100 líneas de código duplicado.

### Modified Capabilities
None.

## Approach

Tres componentes presentacionales, extraídos en orden de impacto:
1. **PlanCard** → `PlanSolutionSection.tsx` (mayor ahorro: ~55 líneas)
2. **ProcessStep** → `ProcessSection.tsx` (~22 líneas)
3. **TeamMemberCard** → `TeamSection.tsx` (~15 líneas)

Cada componente recibe datos por props, sin estado ni lógica. Tests con Vitest + RTL.

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/components/ui/PlanCard.tsx` | New | Card de plan con badge, features, precio, botón |
| `src/components/ui/PlanCard.test.tsx` | New | Smoke test |
| `src/components/ui/ProcessStep.tsx` | New | Step numerado |
| `src/components/ui/ProcessStep.test.tsx` | New | Smoke test |
| `src/components/ui/TeamMemberCard.tsx` | New | Card de miembro |
| `src/components/ui/TeamMemberCard.test.tsx` | New | Smoke test |
| `src/components/sections/PlanSolutionSection.tsx` | Modified | Usar PlanCard |
| `src/components/sections/ProcessSection.tsx` | Modified | Usar ProcessStep |
| `src/components/sections/about/TeamSection.tsx` | Modified | Usar TeamMemberCard |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| PlanCard "Más Popular" se ve mal | Medium | Test visual + revisar estilos condicionales |
| Regresión visual en hover states | Low | Mantener mismas clases Tailwind |

## Rollback Plan

1. `git checkout` de los 3 archivos de sección modificados
2. Eliminar los 3 nuevos componentes UI + tests

## Dependencies

None — solo Tailwind + react-icons (ya instalados)

## Success Criteria

- [ ] PlanSolutionSection usa `<PlanCard>` y se ve idéntico
- [ ] ProcessSection usa `<ProcessStep>` y se ve idéntico
- [ ] TeamSection usa `<TeamMemberCard>` y se ve idéntico
- [ ] 3 componentes nuevos tienen tests que pasan
- [ ] `npm run build` → 0 errores

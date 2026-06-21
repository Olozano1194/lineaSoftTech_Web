# Proposal: trust-signals

## Intent

La landing page muestra servicios y proyectos pero no tiene señales de confianza para un cliente frío que está comparando opciones. Sin testimonios inventados ni mentiras, agregar indicadores reales de capacidad (+4 proyectos, +1 años, tecnologías) y badges de estado (demo/piloto) para transparentar el nivel de cada proyecto.

## Scope

### In Scope
- Barra TrustBar con estadísticas reales entre Hero y Servicios
- Componente StatusBadge con estados: Demo, Prueba piloto, Completado
- Campo `status` en modelo Project y datos actualizados
- Badges visibles en ProjectCard y ProjectDetailPage
- Descripciones de proyectos ajustadas para ser honestas (no fingir clientes)

### Out of Scope
- Testimonios de clientes (no hay aún)
- Lead magnets / captura de emails
- Blog o contenido indexable
- Floating WhatsApp button

## Approach

1. Crear `TrustBar.tsx` — componente presentacional con íconos y stats
2. Crear `StatusBadge.tsx` — componente compartido con colores por estado
3. Extender tipo `Project` con `status: ProjectStatus`
4. Actualizar `projectsData.ts` con status y descripciones honestas
5. Integrar TrustBar en HomePage (`HeroSection` → `TrustBar` → `ServicesSection`)
6. Integrar StatusBadge en ProjectCard y ProjectDetailPage

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/components/ui/TrustBar.tsx` | New | Barra de confianza con estadísticas |
| `src/components/ui/StatusBadge.tsx` | New | Badge de estado del proyecto |
| `src/utils/models/types.ts` | Modified | Nuevo tipo `ProjectStatus` + campo `status` |
| `src/utils/projectsData.ts` | Modified | Status y descripciones honestas |
| `src/pages/HomePage.tsx` | Modified | TrustBar entre Hero y Services |
| `src/components/projects/ProjectCard.tsx` | Modified | Badge en tarjeta |
| `src/pages/ProjectDetailPage.tsx` | Modified | Badge en header de detalle |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|------------|
| Los projects sin status rompen el render | Low | El badge usa config segura y el status tiene valor por defecto |
| Descripciones muy cortas se ven vacías | Low | Se mantiene el mismo nivel de detalle, solo se cambia el enfoque |

## Rollback Plan

Revertir cambios en archivos modificados y eliminar los nuevos componentes: `git checkout -- src/` + eliminar TrustBar.tsx y StatusBadge.tsx.

## Success Criteria

- [ ] TrustBar visible en HomePage entre Hero y Services
- [ ] Cada proyecto muestra badge de estado (Demo o Prueba piloto)
- [ ] Build pasa con 0 errores de TypeScript
- [ ] No se inventan clientes ni testimonios falsos

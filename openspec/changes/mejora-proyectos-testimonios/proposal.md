# Proposal: Descripciones con voz de cliente y contexto real

## Intent

Las descripciones actuales suenan a desarrollador hablando con desarrollador. El dueño de una tienda o gimnasio no entiende qué es un "CRUD" o "autenticación JWT" — pero sí entiende cuando le decís "se te pierden las cuentas en el cuaderno". 

Este cambio pone al cliente en el centro: describimos los problemas REALES que hemos visto (familiares con tiendas, clientes que usan papel y memoria) en lenguaje cotidiano, en plural, como equipo. Sin testimonios falsos — aún no hay usuarios reales.

## Scope

### In Scope
- Reescribir `challenges` y `solution` de los 4 proyectos en tono cliente-a-cliente
- Usar voz plural en todas las descripciones ("hemos visto", "trabajamos", "nosotros creamos")
- Agregar campo opcional `context` a Project con la historia real detrás (para sección "El problema real")
- Sección "El problema real" en ProjectDetailPage que muestre ese context
- Adaptar descripción del proyecto en HomePage para que tenga gancho emocional

### Out of Scope
- Testimonios de clientes (no hay usuarios reales aún)
- Imágenes o fotos de los dueños
- Traducción a inglés

## Capabilities

### New Capabilities
- `project-context`: Sección "El problema real" que cuenta la historia de fondo de cada proyecto

### Modified Capabilities
- `project-detail`: Descripciones (challenges/solution) cambian de tono. Se agrega sección "El problema real".

## Approach

1. Agregar `context?: string` al interface Project (historia real, sin nombres)
2. Reescribir challenges/solution/description de los 4 proyectos en tono cotidiano y plural
3. Agregar "El problema real" en ProjectDetailPage.tsx
4. No tocamos HomePage por ahora (solo se actualiza description corta de cada proyecto)

## Affected Areas

| Area | Impact | Description |
|------|--------|-------------|
| `src/utils/models/types.ts` | Modified | Nuevo campo `context` opcional |
| `src/utils/projectsData.ts` | Modified | Rewrite de challenges, solution, description + context data |
| `src/pages/ProjectDetailPage.tsx` | Modified | Nueva sección "El problema real" |

## Risks

| Risk | Likelihood | Mitigation |
|------|------------|-------------|
| Descripciones queden muy genéricas | Medium | Mantener detalles concretos (cuaderno, memoria, pérdida de info) |
| Sonar a equipo grande cuando somos 2 personas | Low | Usar "nosotros" con honestidad — "somos un equipo pequeño y eso nos permite..." |

## Rollback Plan

Revertir: `git checkout HEAD -- src/utils/models/types.ts src/utils/projectsData.ts src/pages/ProjectDetailPage.tsx`

## Success Criteria

- [ ] Ningún proyecto menciona tecnologías en challenges/solution (JWT, CRUD, Tauri, etc.)
- [ ] Las 4 descripciones usan lenguaje que un dueño de negocio entiende
- [ ] Todas las descripciones están en voz plural ("trabajamos", "hemos visto")
- [ ] FiadoApp y ControlFit tienen campo `context` con historia real
- [ ] Sección "El problema real" se ve en cada ProjectDetailPage
- [ ] `npx tsc --noEmit` y `npx vite build` pasan sin errores

# Spec: Project Status

## Requirements

1. STATUS-1: El tipo `Project` debe incluir un campo `status: ProjectStatus`
2. STATUS-2: `ProjectStatus` debe ser un tipo union: `"portfolio" | "pilot" | "completed"`
3. STATUS-3: Todos los proyectos existentes deben tener un status asignado
4. STATUS-4: Descripciones de proyectos no deben inventar relaciones con clientes
5. STATUS-5: FiadoApp debe mencionar su estado actual (prueba piloto en comercio local)
6. STATUS-6: Proyectos demo deben describirse como demostraciones de capacidad

## Scenarios

### Happy Path
- **FiadoApp**: `status: "pilot"`, solución menciona "Actualmente en fase de prueba piloto en un comercio local de la región"
- **ControlFit**: `status: "portfolio"`, descripción como proyecto demostrativo
- **EduCloud**: `status: "portfolio"`, descripción como refactorización demostrativa
- **Tinta Urbana**: `status: "portfolio"`, descripción como landing page demo, sin mencionar "cliente"

### Edge Cases
- **Proyecto futuro sin status**: El tipo `Project` debe tener `status` como requerido, no opcional
- **Status inválido**: TypeScript debe rechazar cualquier valor que no sea del union type

## Acceptance Criteria

- [ ] Typescript compila sin errores con el nuevo campo `status`
- [ ] Todos los proyectos tienen status asignado
- [ ] FiadoApp menciona "prueba piloto en un comercio local"
- [ ] Ninguna descripción inventa un cliente ficticio
- [ ] Build pasa sin errores

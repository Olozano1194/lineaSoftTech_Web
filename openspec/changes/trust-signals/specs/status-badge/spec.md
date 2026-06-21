# Spec: StatusBadge

## Requirements

1. BADGE-1: Mostrar el estado del proyecto como una etiqueta visual
2. BADGE-2: Soportar 3 estados: `portfolio` (Demo), `pilot` (Prueba piloto), `completed` (Completado)
3. BADGE-3: Cada estado debe tener su propio color distintivo
4. BADGE-4: Ser un componente React reutilizable (props: `status: ProjectStatus`)
5. BADGE-5: Integrarse en ProjectCard (esquina superior izquierda) y ProjectDetailPage (junto al tag)
6. BADGE-6: No renderizar nada si el status no es válido (fallback seguro)

## Scenarios

### Happy Path
- **portfolio**: Muestra "Demo" con estilo azul
- **pilot**: Muestra "Prueba piloto" con estilo ámbar
- **completed**: Muestra "Completado" con estilo verde

### Edge Cases
- **Status desconocido**: El componente debe ignorarlo y no renderizar nada
- **Sin status**: Si el campo no existe, no romper el render (fallback seguro)

## Acceptance Criteria

- [ ] StatusBadge renderiza correctamente para cada estado
- [ ] Colores distinguibles entre estados
- [ ] Integrado en ProjectCard (esquina superior izquierda)
- [ ] Integrado en ProjectDetailPage (junto al tag del proyecto)
- [ ] Componente tipado con TypeScript

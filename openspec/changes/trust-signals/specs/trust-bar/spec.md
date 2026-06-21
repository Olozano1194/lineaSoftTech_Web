# Spec: TrustBar

## Requirements

1. TRUSTBAR-1: Mostrar estadísticas reales del desarrollador/negocio
2. TRUSTBAR-2: Ubicarse visualmente entre HeroSection y ServicesSection
3. TRUSTBAR-3: Ser responsiva (stack vertical en mobile, horizontal en desktop)
4. TRUSTBAR-4: Usar colores y estilos consistentes con el theme existente
5. TRUSTBAR-5: No ocupar más espacio del necesario (barra compacta)

## Scenarios

### Happy Path
- **Datos visibles**: "Proyectos desarrollados: +4", "Años de experiencia: +2", "Tecnologías modernas: React · TS · Django", "Atención personalizada — sin grandes corporaciones"
- **Layout**: En desktop (>768px) los items se muestran en una fila horizontal. En mobile se apilan.
- **Estilo**: Fondo `bg-btn-primary/5`, bordes `border-y border-btn-primary/10`

### Edge Cases
- **Pantalla muy angosta (<360px)**: Los items deben apilarse verticalmente sin romper el layout
- **Alto contraste**: Los íconos y textos deben mantener contraste suficiente

## Acceptance Criteria

- [ ] TrustBar visible en HomePage entre Hero y Services
- [ ] Los 4 items se renderizan correctamente
- [ ] Diseño responsivo: fila en desktop, columna en mobile
- [ ] Build pasa sin errores

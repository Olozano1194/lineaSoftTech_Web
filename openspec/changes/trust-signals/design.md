# Design: trust-signals

## Architectural Decisions

### AD-1: TrustBar como componente presentacional puro
**Contexto**: La TrustBar muestra stats hardcodeadas. No necesita estado, efectos, ni lógica.
**Decisión**: Componente sin props, stats en constante interna.
**Consecuencia**: Fácil de renderizar, cero estado que mantener.

### AD-2: StatusBadge con mapeo explícito
**Contexto**: Cada estado necesita un color y texto distinto.
**Decisión**: Objeto de configuración `Record<ProjectStatus, { label, className }>` dentro del componente.
**Consecuencia**: Agregar un nuevo estado solo requiere agregar una entrada al objeto.

### AD-3: ProjectStatus como union type
**Contexto**: Solo 3 estados posibles, sin planes de expansión inmediata.
**Decisión**: `type ProjectStatus = "portfolio" | "pilot" | "completed"` — estricto, no permite valores inválidos.
**Consecuencia**: TypeScript rechaza cualquier status no definido en compilación.

## Component Tree

```
HomePage
├── HeroSection
├── TrustBar              ← NEW
├── ServicesSection
└── ...

ProjectCard
├── <img>
├── StatusBadge           ← NEW (top-left)
└── <overlay>

ProjectDetailPage
├── Hero
├── Header
│   ├── tag
│   ├── StatusBadge       ← NEW
│   └── title + role
└── ...
```

## Data Flow

```
projectsData.ts  →  ProjectCard (muestra StatusBadge)
                  →  ProjectDetailPage (muestra StatusBadge + header)
```

- `projectsData[].status` se lee directamente en cada componente
- No hay fetching, no hay estado global, no hay efectos

## File Structure

| File | Action | Description |
|------|--------|-------------|
| `src/components/ui/TrustBar.tsx` | Crear | Barra de confianza, stats hardcodeadas |
| `src/components/ui/StatusBadge.tsx` | Crear | Badge de estado, props: status |
| `src/utils/models/types.ts` | Modificar | Agregar `ProjectStatus` y `status` field |
| `src/utils/projectsData.ts` | Modificar | Agregar status, ajustar descripciones |
| `src/pages/HomePage.tsx` | Modificar | Importar y renderizar TrustBar |
| `src/components/projects/ProjectCard.tsx` | Modificar | Importar y renderizar StatusBadge |
| `src/pages/ProjectDetailPage.tsx` | Modificar | Importar y renderizar StatusBadge |

## Design Details

### TrustBar
- Container: `section` con `bg-btn-primary/5 border-y border-btn-primary/10`
- Inner: `div` con `flex flex-wrap items-center justify-center gap-x-10 gap-y-3`
- Items: `div` con `MdCheckCircle` icon + `span` bold para valor + `span` text-secondary para label
- Responsive: `flex-wrap` permite que items se apilen naturalmente en mobile

### StatusBadge
```tsx
const config: Record<ProjectStatus, { label: string; className: string }> = {
    portfolio: { label: "Demo", className: "bg-blue-500/10 text-blue-700 border border-blue-200" },
    pilot: { label: "Prueba piloto", className: "bg-amber-500/10 text-amber-700 border border-amber-200" },
    completed: { label: "Completado", className: "bg-green-600/10 text-green-700 border border-green-200" },
};
```
- Renderiza un `<span>` con `text-xs font-bold px-3 py-1 rounded-full`
- Si el status no existe en el config, retorna `null`

### Model Change
```typescript
export type ProjectStatus = "portfolio" | "pilot" | "completed";

export interface Project {
  // ... existing fields
  status: ProjectStatus;
}
```

## Risks & Mitigations

| Risk | Mitigation |
|------|------------|
| StatusBadge sin status válido | Fallback a `null` (no renderiza) |
| TrustBar se ve mal en mobile | `flex-wrap` + gap aseguran stacking vertical |
| Descripciones muy cortas | Se mantiene el mismo nivel de detalle técnico |

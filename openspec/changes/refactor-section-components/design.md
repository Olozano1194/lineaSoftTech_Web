# Design: Refactor Section Components

## Technical Approach

Extraer tres componentes presentacionales de `src/components/ui/` que encapsulan patrones repetidos en las secciones. Cada componente recibe datos por props (sin estado, sin lógica de negocio). Las secciones se modifican para usar los nuevos componentes.

## Architecture Decisions

### Decision: Componentes presentacionales puros

**Choice**: Sin estado, sin hooks, sin lógica. Solo props → JSX.
**Rationale**: Son componentes de diseño puro. Mantenerlos "tontos" los hace fáciles de testear, reutilizar y mantener. Cualquier lógica (como formateo de precio) se hace en el consumidor.

### Decision: Props planas, no objetos anidados

**Choice**: Props individuales en vez de un objeto `data` genérico.
**Rationale**: TypeScript valida cada prop individualmente. Un objeto `data` genérico pierde el tipado fino y requiere validación interna.

### Decision: isPopular como flag booleano

**Choice**: `isPopular?: boolean` en PlanCard en vez de pasar clases Tailwind.
**Rationale**: El flag encapsula TODOS los cambios visuales (border, scale, z-index, badge). Pasar clases directamente expondría detalles de implementación.

## Component Tree

```
Antes:
  PlanSolutionSection → 3 bloques inline de ~30 líneas c/u
  ProcessSection → 4 bloques inline de ~9 líneas c/u
  TeamSection → 2 bloques inline de ~15 líneas c/u

Después:
  PlanSolutionSection → 3 × <PlanCard />
  ProcessSection → 4 × <ProcessStep />
  TeamSection → 2 × <TeamMemberCard />
```

## File Changes

| File | Action | Description |
|------|--------|-------------|
| `src/components/ui/PlanCard.tsx` | New | Card de plan con badge, features, BtnPrice |
| `src/components/ui/PlanCard.test.tsx` | New | Smoke test |
| `src/components/ui/ProcessStep.tsx` | New | Step numerado |
| `src/components/ui/ProcessStep.test.tsx` | New | Smoke test |
| `src/components/ui/TeamMemberCard.tsx` | New | Card de miembro |
| `src/components/ui/TeamMemberCard.test.tsx` | New | Smoke test |
| `src/components/sections/PlanSolutionSection.tsx` | Modify | Reemplazar cards inline por `<PlanCard>` |
| `src/components/sections/ProcessSection.tsx` | Modify | Reemplazar steps inline por `<ProcessStep>` |
| `src/components/sections/about/TeamSection.tsx` | Modify | Reemplazar miembros inline por `<TeamMemberCard>` |

## Interfaces / Contracts

### PlanCard

```typescript
interface PlanCardProps {
  icon: React.ElementType;
  title: string;
  description: string;
  priceFrom: number;
  currency?: string;     // default: '$'
  features: string[];
  isPopular?: boolean;   // default: false
  planName: string;      // para WhatsApp message
}
```

### ProcessStep

```typescript
interface ProcessStepProps {
  number: number;
  title: string;
  description: string;
}
```

### TeamMemberCard

```typescript
interface TeamMemberCardProps {
  name: string;
  role: string;
  description: string;
  image: string;
  imageAlt: string;
}
```

## Styling Reference (from existing code)

### PlanCard classes to preserve
```tsx
// Card wrapper
"relative flex flex-col items-center text-center rounded-2xl shadow-md px-6 py-10"
// Popular: + "border-2 border-btn-primary scale-105 z-10"

// Icon wrapper
"bg-btn-primary/10 p-3 rounded-lg"

// Price bar
"w-full bg-btn-primary/20 p-2 rounded-md"

// Feature item
<li className="flex items-start gap-2"><FaCheckCircle className="text-btn-primary mt-1" />

// Badge "Más Popular"
"absolute -top-4 bg-btn-primary text-white px-4 py-1 rounded-full text-sm font-semibold translate-x-30"
```

### ProcessStep classes to preserve
```tsx
// Step wrapper
"flex gap-6"

// Number circle
"w-12 h-12 rounded-full bg-btn-primary text-white flex items-center justify-center font-bold text-lg shrink-0"

// Title
"text-lg font-bold"

// Description
"text-text-secondary"
```

### TeamMemberCard classes to preserve
```tsx
// Image wrapper
"aspect-[4/5] overflow-hidden rounded-lg"

// Image
"w-full h-full object-cover transition-all duration-300 group-hover:grayscale-0 group-hover:scale-110"

// Name
"text-xl font-bold"

// Role
"text-btn-primary font-medium"

// Description
"text-text-secondary"
```

## Testing Strategy

| Component | Type | What it verifies |
|-----------|------|------------------|
| PlanCard | Smoke | Renders with props, snapshot match |
| PlanCard isPopular | Smoke | Badge appears, conditional styling |
| ProcessStep | Smoke | Renders number, title, description |
| TeamMemberCard | Smoke | Renders image, name, role, description |

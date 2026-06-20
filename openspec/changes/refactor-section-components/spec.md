# Spec: Refactor Section Components

## Capability: section-components

Componentes UI reutilizables para cards de plan, pasos de proceso y miembros del equipo, extrayendo ~100 líneas de código duplicado.

---

## ADDED Requirements

### Requirement: PlanCard Component

`PlanCard` MUST render a plan card with icon, title, description, price, features list, quote button, and optional "Más Popular" badge.

#### Scenario: PlanCard renders basic plan

- GIVEN props with icon, title, description, priceFrom 199, features list, and planName "Básico"
- WHEN PlanCard is rendered
- THEN it displays the icon with `bg-btn-primary/10 p-3 rounded-lg` wrapper
- AND displays the title as `<h3>`
- AND displays the description
- AND displays the price formatted as "Desde $199/mes"
- AND displays each feature with a `FaCheckCircle` icon
- AND displays a "Cotización personalizada" button with WhatsApp link via `BtnPrice`
- AND the button uses plan-specific message via `planName`

#### Scenario: PlanCard with isPopular badge

- GIVEN props with `isPopular: true`
- WHEN PlanCard is rendered
- THEN a "Más Popular" badge is displayed
- AND the card has `border-2 border-btn-primary` and `scale-105` and `z-10`
- AND the badge has proper positioning with `translate-x-30`

#### Scenario: PlanCard snapshot matches

- GIVEN a PlanCard with full props
- WHEN rendered in a test
- THEN the output matches the expected snapshot

---

### Requirement: ProcessStep Component

`ProcessStep` MUST render a numbered step with title and description in a flex row layout.

#### Scenario: ProcessStep renders step

- GIVEN props with number 1, title "Análisis", description "Evaluamos tu proyecto"
- WHEN ProcessStep is rendered
- THEN it displays the number in a circle (`w-12 h-12 rounded-full bg-btn-primary text-white`)
- AND displays the title as `<h4>`
- AND displays the description

#### Scenario: ProcessStep renders correctly

- GIVEN a ProcessStep with valid props
- WHEN rendered in a test
- THEN it renders without error

---

### Requirement: TeamMemberCard Component

`TeamMemberCard` MUST render a team member with image, name, role, and description.

#### Scenario: TeamMemberCard renders member

- GIVEN props with name "Oscar", role "Ingeniero de Sistemas", description "Especialista en...", image and imageAlt
- WHEN TeamMemberCard is rendered
- THEN it displays the image with `aspect-[4/5]` wrapper
- AND displays the name as `<h3>`
- AND displays the role
- AND displays the description

#### Scenario: TeamMemberCard renders correctly

- GIVEN a TeamMemberCard with valid props
- WHEN rendered in a test
- THEN it renders without error

---

### Requirement: Sections use new components

Each modified section MUST use the new component and preserve identical visual output.

#### Scenario: PlanSolutionSection uses PlanCard

- GIVEN the PlanSolutionSection
- WHEN rendered
- THEN it contains 3 `<PlanCard>` instances with correct props for each plan
- AND the "Más Popular" badge only appears on the middle plan

#### Scenario: ProcessSection uses ProcessStep

- GIVEN the ProcessSection
- WHEN rendered
- THEN it contains 4 `<ProcessStep>` instances with correct props

#### Scenario: TeamSection uses TeamMemberCard

- GIVEN the TeamSection
- WHEN rendered
- THEN it contains 2 `<TeamMemberCard>` instances with correct props

# Project Context Specification

## Purpose

Cada proyecto tiene una historia real detrás — un problema que vimos en persona trabajando con familiares, clientes o conocidos. Esta sección cuenta esa historia en lenguaje cotidiano, sin nombres reales, para que el visitante se identifique con el problema.

## Requirements

### Requirement: Context section per project

The system MUST display a "El problema real" section in ProjectDetailPage when the project has a `context` field.

#### Scenario: Project with context shows the section

- GIVEN a project has a non-empty `context` string
- WHEN the user visits `/proyecto/:slug` for that project
- THEN the page MUST display a section titled "El problema real" after "La Solución"
- AND the section MUST contain the context text as a paragraph

#### Scenario: Project without context hides the section

- GIVEN a project has no `context` field, or context is empty
- WHEN the user visits `/proyecto/:slug` for that project
- THEN the page MUST NOT display the "El problema real" section

### Requirement: Context tone

The context text SHOULD use first-person plural ("hemos visto", "trabajamos con", "nos dimos cuenta") and MUST avoid naming specific individuals or businesses. The tone MUST be conversational — as if explaining the problem to another business owner.

#### Scenario: Context reads naturally

- GIVEN a project has a context string
- WHEN the user reads the context
- THEN it SHOULD feel like a story, not a technical specification
- AND it MUST NOT contain technology names (JWT, CRUD, framework names, etc.)

### Requirement: Context field in Project type

The Project interface MUST include an optional `context?: string` field.

#### Scenario: Backward compatibility

- GIVEN an existing Project object without a `context` field
- WHEN the ProjectDetailPage renders
- THEN it MUST render without errors
- AND the "El problema real" section MUST NOT appear

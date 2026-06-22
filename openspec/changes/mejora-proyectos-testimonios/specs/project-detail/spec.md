# Delta for project-detail

## ADDED Requirements

### Requirement: Project context section

The system MUST display a "El problema real" section after "La Solución" when the project has a `context` field. See `openspec/specs/project-context/spec.md` for full requirements.

## MODIFIED Requirements

### Requirement: Project description tone

All project descriptions (description, challenges, solution) MUST use conversational language appropriate for business owners, not developers. The system MUST present challenges as real-world problems (paper records, lost information, memory-based tracking) and solutions as practical outcomes, not technology features.
(Previously: descriptions focused on technical implementation details like frameworks, authentication methods, and architecture patterns)

#### Scenario: Challenge describes real problem

- GIVEN a project has a `challenges` field
- WHEN the user reads it
- THEN it MUST describe the problem as a business owner experiences it
- AND it MUST NOT mention specific technologies or implementation details

#### Scenario: Solution describes outcome

- GIVEN a project has a `solution` field
- WHEN the user reads it
- THEN it MUST describe what changed for the better
- AND it MUST NOT mention frameworks, libraries, or technical patterns

#### Scenario: Plural voice throughout

- GIVEN any project description field
- WHEN rendered on screen
- THEN the text MUST use plural first-person ("trabajamos", "creamos", "vimos") unless quoting someone

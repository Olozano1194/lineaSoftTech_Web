# Project Detail Specification

## Purpose

Define the behavior for dedicated project detail pages at `/proyecto/:slug`. Each page showcases a project's problem, solution, tech stack, gallery, and outcomes to convert portfolio visitors into client leads.

## Requirements

### Requirement: ProjectDetailPage route

The system MUST resolve `/proyecto/:slug` to a dedicated page showing the matching project's full details.

#### Scenario: Valid slug navigates to project detail

- GIVEN the user is on the home page
- WHEN they click a ProjectCard with `slug="fiadoapp"`
- THEN the browser navigates to `/proyecto/fiadoapp`
- AND the page renders the FiadoApp project detail

#### Scenario: Invalid slug shows fallback

- GIVEN the user navigates to `/proyecto/slug-invalido`
- WHEN no project matches the slug
- THEN the page MUST display a "Proyecto no encontrado" message
- AND MUST include a link back to the home page
- AND the application MUST NOT crash

### Requirement: ProjectCard navigates to detail

Every ProjectCard MUST link to its corresponding project detail page.

#### Scenario: ProjectCard wraps in Link

- GIVEN a ProjectCard for project with `slug="control-fit"`
- WHEN the card renders
- THEN it MUST be wrapped in a `<Link to="/proyecto/control-fit">`
- AND clicking the card MUST navigate to the detail page

#### Scenario: ProjectCard preserves hover overlay behavior

- GIVEN a ProjectCard wrapped in a Link
- WHEN the user hovers over the card
- THEN the image overlay with tag, title, and description SHALL still appear on hover

### Requirement: Dynamic content sections

Each section of the detail page MUST render conditionally based on available data.

#### Scenario: Gallery renders when images exist

- GIVEN a project has `gallery: ["/assets/projects/gallery/img1.webp"]`
- WHEN the detail page renders
- THEN the gallery section SHALL be visible with the provided images

#### Scenario: Gallery hides when empty

- GIVEN a project has `gallery: []`
- WHEN the detail page renders
- THEN the gallery section MUST NOT be rendered
- AND the page layout SHALL adjust accordingly (no empty space)

#### Scenario: Demo link renders when liveUrl exists

- GIVEN a project has `liveUrl: "https://..."` defined
- WHEN the detail page renders
- THEN a "Ver demo" button MUST be shown linking to that URL

#### Scenario: Demo link hides when undefined

- GIVEN a project has no `liveUrl`
- WHEN the detail page renders
- THEN the demo button MUST NOT be rendered

#### Scenario: Repo link renders when repoUrl exists

- GIVEN a project has `repoUrl: "https://github.com/..."` defined
- WHEN the detail page renders
- THEN a "Ver código" button MUST be shown linking to that URL

### Requirement: Dynamic SEO per project

Each project detail page MUST render SEO meta tags specific to the project.

#### Scenario: SEO renders project-specific title

- GIVEN the user navigates to `/proyecto/fiadoapp`
- WHEN the page renders
- THEN the `<SEO>` component SHALL use FiadoApp's title and description

### Requirement: Data model extension

The Project interface MUST support all fields required for the detail page.

#### Scenario: Project type includes new fields

- GIVEN a Project object in `projectsData.ts`
- WHEN it is rendered on the detail page
- THEN it MUST include: `slug`, `techStack`, `liveUrl?`, `repoUrl?`, `role`, `challenges`, `solution`, `results`, `gallery`

### Requirement: Scroll restoration

Navigating between ProjectCard and detail page MUST scroll to top.

#### Scenario: ScrollToTop on navigation

- GIVEN the user clicks a ProjectCard
- WHEN the detail page loads
- THEN the page SHALL be scrolled to the top (handled by existing ScrollToTop component)

### Requirement: Contact CTA

Each detail page MUST include a call-to-action to contact the developer.

#### Scenario: CTA renders at page bottom

- GIVEN the user scrolls to the bottom of a project detail page
- THEN they SHALL see a CTA section with a message like "¿Interesado en este proyecto?" and a button linking to the contact section

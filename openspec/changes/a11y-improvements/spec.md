# Spec: Accessibility Improvements

---

## ADDED Requirements

### Requirement: Iconos decorativos con aria-hidden

Todo ícono SVG/componente de react-icons que sea puramente decorativo (sin función interactiva) DEBE tener `aria-hidden="true"`.

#### Files:
- `Footer.tsx:27,30,64,67` — FaLinkedin, FaGithub, MdEmail, CiLocationOn
- `ServiceCard.tsx:15,24` — Icon (servicio), FaCheck
- `PlanCard.tsx:33,47` — Icon (plan), FaCheckCircle
- `BtnPrice.tsx:28` — MdOutlineChat
- `HeroSection.tsx:31` — ArrowRightIcon
- `FAQSection.tsx:56-58` — MdArrowForwardIos
- `ContactSection.tsx:69,73,85` — MdOutlineEmail, MdOutlinePhone, MdOutlineCircle
- `ErrorFallback.tsx:15` — FaExclamationTriangle
- `Error404.tsx:16` — ExclamationTriangleIcon
- `MisionVisionSection.tsx:16,28,40` — MdAdsClick, MdVisibility, MdFavorite
- `HistorySection.tsx:39,48` — FaLightbulb, FaHandshake

### Requirement: Links sociales con aria-label

Links que contienen solo un ícono SIN texto visible DEBEN tener `aria-label` descriptivo.

#### Footer.tsx:26-31
- `<a href="linkedin...">` → `aria-label="LinkedIn"`
- `<a href="github...">` → `aria-label="GitHub"`

### Requirement: Landmarks con aria-label

Elementos de navegación y contenido principal DEBEN tener `aria-label` para distinguirse.

#### Header.tsx:54
- `<Disclosure as="nav">` → `aria-label="Navegación principal"`

#### LayoutAdmin.tsx:21
- `<main>` → `aria-label="Contenido principal"`

### Requirement: Alt text descriptivo

Imágenes y logos DEBEN tener `alt` que describa su contenido o función.

#### Header.tsx:63
- `alt="logo"` → `alt="LineaSoftTech"`

#### ProcessSection.tsx:36
- `alt="Team Work"` → `alt="Equipo de desarrollo colaborando en un espacio de trabajo moderno"`

### Requirement: ESLint plugin

El plugin `eslint-plugin-jsx-a11y` DEBE instalarse para prevenir regresiones de accesibilidad.

#### package.json
- Agregar `eslint-plugin-jsx-a11y` como devDependency

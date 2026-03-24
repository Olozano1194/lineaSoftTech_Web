# LineaSoftTech Web

Sitio web corporativo para LineaSoftTech, empresa de desarrollo de software y servicios tecnológicos. Presenta los servicios, proyectos realizados, información de contacto y formulario de consulta.

## Tecnologías

### Core
- **React 19** - Librería UI
- **TypeScript 5.9** - Tipado estático
- **Vite 8** - Build tool y servidor de desarrollo

### Estilos
- **Tailwind CSS 4** - Framework de estilos utility-first
- **@tailwindcss/vite** - Plugin Vite para Tailwind
- **Heroicons** - Iconos SVG
- **React Icons (react-icons)** - Colección de iconos

### Routing
- **React Router DOM 7** - Navegación SPA

### Formularios
- **React Hook Form 7** - Manejo de formularios

### UI Components
- **Headless UI 2** - Componentes accesibles (Disclosure)
- **React Hot Toast** - Notificaciones toast

### Linting
- **ESLint 9** - Linting y calidad de código
- **TypeScript ESLint** - Soporte TypeScript para ESLint

## Estructura del Proyecto

```
src/
├── assets/              # Imágenes y recursos estáticos
├── components/
│   ├── layout/          # Header, Footer (componentes de estructura)
│   ├── sections/        # Secciones de la landing page
│   ├── projects/        # Componentes relacionados con proyectos
│   └── ui/             # Componentes reutilizables (BtnContact, ServiceCard)
├── layouts/            # Layouts principales de página
├── pages/              # Páginas de la aplicación
├── utils/
│   ├── models/         # Definiciones de tipos TypeScript
│   ├── projectsData.ts # Catálogo de proyectos
│   ├── servicesData.tsx # Catálogo de servicios
│   └── scrollToSection.ts # Utilidad para scroll suave
├── App.tsx             # Router principal
├── main.tsx            # Punto de entrada
└── index.css           # Estilos globales y theme Tailwind
```

## Arquitectura y Patrones

### Routing
- SPA con React Router DOM 7
- Estructura: `/layoutAdmin` → `<HomePage />` (layout anidado)
- Página 404 para rutas no definidas

### Composición de Páginas
- `HomePage` ensambla secciones independientes
- Cada sección es un componente funcional separado

### Gestión de Datos
- Datos estáticos en archivos `*Data.ts`
- Tipos TypeScript en `utils/models/`
- Separación entre tipos (`types.ts`) y datos

### Formularios
- `react-hook-form` para validación
- Integración con FormSubmit para envío
- Técnicas anti-spam: honeypot fields

### Navegación
- Scroll suave entre secciones (ID-based)
- Header fijo con navegación
- Menú responsive con Disclosure (Headless UI)

### Estilos
- Tailwind CSS v4 con `@theme` para variables
- Sistema de diseño con colores custom en CSS
- Clases utility para layout y espaciado

## Scripts Disponibles

```bash
npm run dev      # Inicia servidor de desarrollo
npm run build    # Build de producción
npm run preview  # Vista previa del build
npm run lint     # Ejecuta ESLint
```

## Variables de Tema

Definidas en `index.css`:

| Variable | Uso |
|----------|-----|
| `--color-bg-light` | Fondo claro |
| `--color-btn-primary` | Color principal (azul) |
| `--color-text-primary` | Títulos y texto principal |
| `--color-text-secondary` | Texto secundario |
| `--color-text-footer-*` | Colores del footer |

## Dependencias de Desarrollo

| Paquete | Propósito |
|---------|-----------|
| `@vitejs/plugin-react` | Plugin Vite para React |
| `typescript` | Compilador TypeScript |
| `eslint` | Linting |
| `@types/*` | Tipos TypeScript |

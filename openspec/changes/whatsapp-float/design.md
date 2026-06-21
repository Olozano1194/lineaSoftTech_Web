# Design: WhatsApp Flotante

## Decisiones de Arquitectura

### AD-1: Componente separado (no fusionado con BtnPrice)
- **Decisión**: Crear `WhatsAppFloat.tsx` como componente independiente
- **Motivo**: BtnPrice tiene mensaje contextual por plan ("interesado en el Plan X"). El flotante usa mensaje genérico para leads fríos. Son contextos distintos y mezclarlos agregaría complejidad innecesaria.
- **Consecuencia**: Dos componentes que abren WhatsApp, pero en contextos diferentes (plan card / global)

### AD-2: Renderizado en LayoutAdmin
- **Decisión**: `WhatsAppFloat` se renderiza en `LayoutAdmin.tsx` como hermano de `ScrollToTop`
- **Motivo**: LayoutAdmin envuelve todas las rutas. Un solo punto de inserción garantiza visibilidad global.
- **Consecuencia**: El botón aparece en Home, Proyectos, About, Legales, etc.

### AD-3: Safe fallback silencioso
- **Decisión**: Si `VITE_WA_PHONE` no está definido, `return null`
- **Motivo**: Mismo patrón que BtnPrice. No rompe el build, no muestra nada.
- **Consecuencia**: Si alguien borra la variable de entorno, el botón simplemente desaparece.

### AD-4: Tooltip solo en hover/desktop
- **Decisión**: Tooltip visible únicamente en hover y desde desktop (`hidden md:group-hover:inline-block`)
- **Motivo**: En mobile el tooltip ocuparía espacio valioso y no agrega valor táctil.
- **Consecuencia**: En mobile el botón es solo el icono, más limpio.

### AD-5: Sin animación perpetua
- **Decisión**: Animación fade-in + scale UNA VEZ al montar, sin loop
- **Motivo**: Animación perpetua (bounce/pulso) trasmite desesperación. Para un dev freelance, confianza > llamar atención agresivamente.
- **Consecuencia**: El botón aparece con una transición suave y después queda estático.

## Estructura de Componentes

```
LayoutAdmin.tsx
├── <ScrollToTop />
├── <WhatsAppFloat />
└── <div className="min-h-screen flex flex-col">
    ├── <Header />
    ├── <Outlet />
    └── <Footer />
    </div>

WhatsAppFloat.tsx (nuevo)
├── Props: ninguna
├── Constantes:
│   ├── WA_PHONE = import.meta.env.VITE_WA_PHONE
│   ├── DEFAULT_MSG = encodeURIComponent("¡Hola! Quisiera consultar sobre sus servicios tecnológicos.")
│   └── if (!WA_PHONE) return null
├── <a href={waLink} target="_blank" rel="noopener noreferrer" aria-label="Contactar por WhatsApp">
│   └── className="fixed bottom-6 right-6 z-50 flex items-center gap-2 group"
│       ├── <span> tooltip (hidden md:group-hover:inline-block)
│       └── <div> icono (w-14 h-14 bg-green-500 rounded-full)
│           └── <FaWhatsapp className="text-white text-2xl" />
└── Export default WhatsAppFloat
```

## Flujo de Datos

```
.env
└── VITE_WA_PHONE="573021120794"
    │
    ▼
WhatsAppFloat.tsx
├── import.meta.env.VITE_WA_PHONE → WA_PHONE constant
├── if (!WA_PHONE) return null
├── `https://wa.me/${WA_PHONE}?text=${encodeURIComponent(mensaje)}`
└── render <a href={...}>
```

Sin estado, sin efectos, sin props. Componente puramente presentacional.

## Estilos

| Elemento | Clases |
|----------|--------|
| Container | `fixed bottom-6 right-6 z-50 flex items-center gap-2 group` |
| (desktop) | `md:bottom-8 md:right-8` |
| Tooltip | `hidden md:group-hover:inline-block bg-white text-green-600 text-sm font-medium px-3 py-1.5 rounded-lg shadow-md` |
| Icono bg | `w-14 h-14 md:w-15 md:h-15 bg-green-500 rounded-full flex items-center justify-center shadow-lg shadow-green-500/30 hover:bg-green-600 hover:scale-105 transition-all` |
| Icono | `text-white text-2xl md:text-3xl` |
| Animación | `animate-[floatIn_0.3s_ease-out]` |

### @keyframes floatIn
```css
@keyframes floatIn {
  from {
    opacity: 0;
    transform: scale(0.5);
  }
  to {
    opacity: 1;
    transform: scale(1);
  }
}
```

## ContactSection Fix

```typescript
// ANTES (hardcodeado)
const waLink = "https://wa.me/573021120794";

// DESPUÉS (variable de entorno)
const WA_PHONE = import.meta.env.VITE_WA_PHONE;
const waLink = `https://wa.me/${WA_PHONE}`;
```

Misma estructura visual, mismos estilos. Solo cambia la fuente del número.

## Riesgos Técnicos

| Riesgo | Probabilidad | Mitigación |
|--------|-------------|------------|
| z-index conflict con footer | Baja | z-50 está por encima de cualquier elemento del layout |
| VITE_WA_PHONE no definido | Baja (ya existe en .env) | return null, no rompe build |
| Dos botones WhatsApp visibles al mismo tiempo (flotante + BtnPrice) | Media | Son contextos distintos. El flotante es lead frío, BtnPrice es lead caliente. Aceptado como tradeoff. |
| Animación no funciona en navegadores viejos | Baja | Tailwind generate CSS prefix automáticamente |

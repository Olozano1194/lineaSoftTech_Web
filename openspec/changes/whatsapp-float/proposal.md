# Proposal: WhatsApp Flotante

## Objetivo
Agregar un botón flotante de WhatsApp visible desde cualquier página para que visitantes puedan contactar al dev freelance de forma inmediata, sin tener que navegar hasta la sección de contacto.

## Antecedentes
- El sitio ya tiene `VITE_WA_PHONE` como variable de entorno usada por `BtnPrice` en los planes
- `ContactSection.tsx` tiene el número **hardcodeado** (`wa.me/573021120794`) — no usa la variable
- `BtnPrice` abre WhatsApp con mensaje contextual ("interesado en el Plan X")
- No hay un punto de contacto persistente visible desde cualquier ruta

## Scope

### Incluido
- Nuevo componente `WhatsAppFloat` en `src/components/ui/`
- Botón fixed en esquina inferior derecha con icono FaWhatsapp
- Tooltip hover/desktop con texto "¡Consúltanos!"
- Animación fade-in + scale al montar (sin bounce perpetuo)
- Renderizado en `LayoutAdmin.tsx` como hermano de `ScrollToTop`
- Safe fallback: si `VITE_WA_PHONE` no existe, no renderiza nada
- Corregir `ContactSection.tsx` para usar `VITE_WA_PHONE` en vez del número hardcodeado

### Excluido
- No modificar `BtnPrice` (sigue funcionando con su mensaje contextual)
- No cambiar formulario de contacto
- No agregar tests (no hay test runner funcional)
- No cambios de estilo en otras secciones

## Enfoque Propuesto

```
WhatsAppFloat (nuevo componente)
├── fixed bottom-6 right-6 (mobile) / bottom-8 right-8 (desktop)
├── z-50 (encima de footer)
├── anchor <a> → wa.me/{VITE_WA_PHONE}?text={mensaje}
├── icono FaWhatsapp en círculo verde (bg-green-500, w-14 h-14)
├── tooltip "¡Consúltanos!" (hidden md:group-hover:inline-block)
├── animación fade-in + scale al montar (sin loop)
└── si !VITE_WA_PHONE → return null

LayoutAdmin.tsx
├── <ScrollToTop />
├── <WhatsAppFloat />  ← nuevo
└── <div> contenido </div>

ContactSection.tsx
└── reemplazar wa.me/573021120794 → wa.me/{VITE_WA_PHONE}
```

## Alternativas Consideradas

1. **Un solo botón flotante, eliminar BtnPrice**
   - Pros: un punto de contacto único
   - Contras: pierde el contexto del plan seleccionado. Alguien que vio "Plan Básico" y hace clic, el mensaje "interesado en el Plan Básico" es más conversivo que uno genérico
   - **Descartado** porque BtnPrice tiene mejor tasa de conversión esperada en contexto de plan

2. **Animación perpetua (bounce/pulso infinito)**
   - Pros: llama atención constantemente
   - Contras: trasmite desesperación, molesta después de segundos. Para un dev freelance que busca clientes, confianza > llamar atención
   - **Descartado** — animación solo al montar

3. **Tooltip siempre visible**
   - Pros: el visitante sabe que es WhatsApp sin hacer hover
   - Contras: ocupa espacio horizontal, compite con el footer en mobile
   - **Descartado** — tooltip solo en hover/desktop

## Riesgos

- **Dos puntos de entrada WhatsApp**: BtnPrice + WhatsAppFloat + link en ContactSection. No es problema porque están en contextos distintos (plan / global / formulario) y todos abren el mismo chat.
- **z-index**: el flotante debe quedar sobre el footer. z-50 es suficiente.
- **Número hardcodeado olvidado**: si alguien cambia `VITE_WA_PHONE` y no actualiza ContactSection, el link del footer queda roto. Por eso lo corregimos junto con este cambio.

## Criterios de Éxito

1. El botón flotante es visible desde todas las rutas (Home, Proyectos, About, Legales)
2. Al hacer clic, abre `wa.me/{numero}` con mensaje predefinido en nueva pestaña
3. Si `VITE_WA_PHONE` no está definido, el botón no se renderiza (no rompe nada)
4. `ContactSection` usa la variable de entorno, no el número hardcodeado
5. El botón tiene `aria-label` para accesibilidad

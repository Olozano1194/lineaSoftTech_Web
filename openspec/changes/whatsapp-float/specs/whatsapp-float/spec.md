# Spec: WhatsApp Floating Button

## Descripción
Botón flotante de WhatsApp visible desde cualquier página del sitio, permitiendo contacto inmediato sin navegar a la sección de contacto.

## Requisitos

| ID | Descripción | Prioridad |
|----|-------------|-----------|
| WHATSAPP-1 | El botón flotante es visible desde todas las rutas (Home, Proyectos, About, Legales) | Alta |
| WHATSAPP-2 | Posición fixed: `bottom-6 right-6` en mobile, `bottom-8 right-8` en desktop | Alta |
| WHATSAPP-3 | Icono FaWhatsapp de react-icons en círculo verde (`bg-green-500`), `w-14 h-14` | Alta |
| WHATSAPP-4 | Tooltip "¡Consúltanos!" visible solo en hover y desde desktop (`hidden md:group-hover:inline-block`) | Media |
| WHATSAPP-5 | Link a `https://wa.me/{VITE_WA_PHONE}?text={mensaje}` con mensaje genérico predefinido | Alta |
| WHATSAPP-6 | Abre en nueva pestaña con `target="_blank" rel="noopener noreferrer"` | Alta |
| WHATSAPP-7 | Animación fade-in + scale al montar, SIN loop/bounce perpetuo | Media |
| WHATSAPP-8 | `aria-label="Contactar por WhatsApp"` para accesibilidad | Alta |
| WHATSAPP-9 | Si `VITE_WA_PHONE` no está definido, `return null` (no rompe nada) | Alta |
| WHATSAPP-10 | `z-50` para estar por encima del footer y otros elementos | Alta |

## Escenarios de Aceptación

### WHATSAPP-1: Visibilidad global
**Dado** un visitante en cualquier ruta del sitio
**Cuando** la página se carga
**Entonces** el botón flotante de WhatsApp es visible en la esquina inferior derecha

### WHATSAPP-2: Posición responsive
**Dado** un visitante en mobile (<768px)
**Cuando** el botón se renderiza
**Entonces** está a `bottom-6 right-6`

**Dado** un visitante en desktop (≥768px)
**Cuando** el botón se renderiza
**Entonces** está a `bottom-8 right-8`

### WHATSAPP-3: Icono y color
**Dado** el botón flotante renderizado
**Cuando** se inspecciona visualmente
**Entonces** tiene un icono FaWhatsapp blanco sobre círculo verde (`bg-green-500`), tamaño `w-14 h-14`

### WHATSAPP-4: Tooltip hover
**Dado** un visitante en desktop
**Cuando** hace hover sobre el botón
**Entonces** aparece un tooltip con texto "¡Consúltanos!" al lado del icono

**Dado** un visitante en mobile
**Cuando** toca el botón
**Entonces** NO se muestra tooltip (solo existe en hover/desktop)

### WHATSAPP-5: Link a WhatsApp
**Dado** que `VITE_WA_PHONE` = "573021120794"
**Cuando** el usuario hace clic en el botón
**Entonces** se abre `https://wa.me/573021120794?text=¡Hola!+Quisiera+consultar+sobre+sus+servicios+tecnológicos.`

### WHATSAPP-6: Nueva pestaña
**Dado** el botón renderizado
**Cuando** se inspecciona el elemento `<a>`
**Entonces** tiene `target="_blank"` y `rel="noopener noreferrer"`

### WHATSAPP-7: Animación
**Dado** que la página se carga
**Cuando** el botón aparece
**Entonces** tiene una animación fade-in + scale que ocurre una sola vez (sin loop)

### WHATSAPP-8: Accesibilidad
**Dado** el botón renderizado
**Cuando** se inspecciona el elemento
**Entonces** tiene `aria-label="Contactar por WhatsApp"`

### WHATSAPP-9: Safe fallback
**Dado** que `VITE_WA_PHONE` NO está definido
**Cuando** el componente se monta
**Entonces** retorna `null` y no renderiza nada en el DOM

### WHATSAPP-10: z-index
**Dado** el botón renderizado
**Cuando** se inspecciona el CSS
**Entonces** tiene `z-index: 50` (z-50)

## Criterios de Verificación
- `npx tsc --noEmit`: 0 errores
- `npx vite build`: build exitoso
- Code review: componente en `src/components/ui/WhatsAppFloat.tsx`, renderizado en `LayoutAdmin.tsx`
- Manual: vérificar visibilidad en Home, /proyecto/fiadoapp, /about, /terminos

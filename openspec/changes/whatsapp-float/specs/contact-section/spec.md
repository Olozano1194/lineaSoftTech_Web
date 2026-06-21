# Spec: ContactSection — Corregir número hardcodeado

## Descripción
Reemplazar el número de WhatsApp hardcodeado en `ContactSection.tsx` por la variable de entorno `VITE_WA_PHONE`, consistente con el resto del sitio.

## Requisitos

| ID | Descripción | Prioridad |
|----|-------------|-----------|
| CONTACT-1 | Reemplazar `wa.me/573021120794` por `wa.me/{VITE_WA_PHONE}` en el botón de WhatsApp de ContactSection | Alta |
| CONTACT-2 | La estructura visual y el texto del botón existente se mantienen idénticos | Alta |

## Escenarios de Aceptación

### CONTACT-1: Usar variable de entorno
**Dado** que `VITE_WA_PHONE` = "573021120794"
**Cuando** se renderiza ContactSection
**Entonces** el link de WhatsApp apunta a `https://wa.me/573021120794`

**Dado** que `VITE_WA_PHONE` cambia a "5491112345678"
**Cuando** se renderiza ContactSection
**Entonces** el link de WhatsApp apunta a `https://wa.me/5491112345678`

### CONTACT-2: Misma apariencia
**Dado** ContactSection renderizado
**Cuando** se compara con la versión anterior
**Entonces** el botón de WhatsApp tiene el mismo texto, color, tamaño y posición que antes

## Criterios de Verificación
- `npx tsc --noEmit`: 0 errores
- Code review: el número hardcodeado ya no existe en ContactSection.tsx
- Manual: el botón de WhatsApp en la sección contacto funciona igual que antes

# Spec: perf-and-polish

## Tarea 1: Validar VITE_WA_PHONE en BtnPrice

**Archivo:** `src/components/ui/BtnPrice.tsx`

**Comportamiento actual:**
- Si `VITE_WA_PHONE` no está configurado, `window.open` recibe `https://wa.me/undefined?...` y el botón parece funcionar pero no redirige correctamente.

**Comportamiento esperado:**
- Si `VITE_WA_PHONE` no está definido o es falsy, el componente debe retornar `null` (no renderizar) y hacer un `console.warn`.
- Si está configurado, el comportamiento es el mismo de hoy.

**Criterios de aceptación:**
- [ ] Sin `VITE_WA_PHONE`, el botón de WhatsApp no se renderiza en los planes.
- [ ] Con `VITE_WA_PHONE` configurado, funciona exactamente como antes.

---

## Tarea 2: Limpiar .env.example

**Archivo:** `.env.example`

**Cambio:**
- Reemplazar `'número de celular de Whatsapp'` por `'your_whatsapp_phone_number'`

**Criterios de aceptación:**
- [ ] El placeholder está en inglés, usando snake_case.

---

## Tarea 3: Arreglar conflicto ScrollToTop vs hash-scroll

**Archivos:** `src/components/ui/ScrollToTop.tsx`, `src/pages/HomePage.tsx`

**Comportamiento actual:**
- Al navegar de `/about` a `/#servicios`, ScrollToTop hace scroll instantáneo a 0, y 100ms después HomePage scrollea a la sección. Resultado: flicker visible.
- `HEADER_OFFSET = 64` está duplicado en ScrollToTop.tsx y HomePage.tsx.
- HomePage usa `setTimeout(100)` que es frágil.
- HomePage usa `window.pageYOffset` (deprecated).

**Comportamiento esperado:**
- ScrollToTop no debe hacer scroll si la URL tiene hash.
- `HEADER_OFFSET` debe ser una constante compartida desde ScrollToTop.tsx o un archivo dedicado.
- El scroll por hash en HomePage debe usar `window.scrollY` en vez de `pageYOffset`.
- El timing del scroll debe usar `requestAnimationFrame` doble en vez de `setTimeout`.

**Criterios de aceptación:**
- [ ] Navegar de `/about` a `/#servicios` no muestra flicker.
- [ ] Navegar de `/about` a `/` (sin hash) hace scroll to top normalmente.
- [ ] `HEADER_OFFSET` está definido en un solo lugar.
- [ ] HomePage no usa `pageYOffset` ni `setTimeout` para hash-scroll.

---

## Tarea 4: Validar VITE_CONTACTFORM_URL en ContactSection

**Archivo:** `src/components/sections/ContactSection.tsx`

**Comportamiento actual:**
- Si `VITE_CONTACTFORM_URL` no está configurado, `fetch(undefined)` lanza un error críptico.

**Comportamiento esperado:**
- Antes del fetch, validar que la URL existe. Si no, mostrar un toast de error y no ejecutar el fetch.

**Criterios de aceptación:**
- [ ] Sin `VITE_CONTACTFORM_URL`, el submit muestra un toast "Error de configuración del formulario".
- [ ] Con la URL configurada, funciona exactamente como antes.

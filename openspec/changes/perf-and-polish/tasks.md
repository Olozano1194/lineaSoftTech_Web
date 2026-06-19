# Tasks: perf-and-polish

## Review Workload Forecast

- **Estimated changed lines:** ~50
- **400-line budget risk:** Low
- **Decision needed before apply:** No
- **Chained PRs recommended:** No

---

## Task 1: Validar VITE_WA_PHONE en BtnPrice

**ID:** T1
**Archivo:** `src/components/ui/BtnPrice.tsx`
**Esfuerzo:** 5 min
**Dependencias:** Ninguna
**Pasos:**
1. Agregar guard `if (!WA_PHONE)` con `console.warn` + `return null`
2. Verificar: sin env var, el botón no aparece en los planes
3. Verificar: con env var, el botón funciona y abre WhatsApp correctamente

---

## Task 2: Limpiar .env.example

**ID:** T2
**Archivo:** `.env.example`
**Esfuerzo:** 1 min
**Dependencias:** Ninguna
**Pasos:**
1. Reemplazar placeholder español por inglés
2. Verificar: `cat .env.example` muestra `VITE_WA_PHONE='your_whatsapp_phone_number'`

---

## Task 3: Arreglar conflicto ScrollToTop vs hash-scroll

**ID:** T3
**Archivos:** `src/components/ui/ScrollToTop.tsx`, `src/pages/HomePage.tsx`
**Esfuerzo:** 15 min
**Dependencias:** Ninguna
**Pasos:**
1. En `ScrollToTop.tsx`:
   - Extraer `const HEADER_OFFSET = 64;` a nivel de módulo
   - Exportar `HEADER_OFFSET`
   - Leer `hash` de `useLocation()`
   - Conditionar el scroll a `if (!hash)`
2. En `HomePage.tsx`:
   - Importar `HEADER_OFFSET` desde `ScrollToTop.tsx`
   - Reemplazar `window.pageYOffset` → `window.scrollY`
   - Reemplazar `setTimeout(100)` → `requestAnimationFrame` doble
   - Eliminar `const headerOffset = 64;`
   - Eliminar props redundantes de `<SEO>` (`image`, `favicon`)
3. Verificar: navegar de `/about` a `/#servicios` sin flicker
4. Verificar: navegar de `/about` a `/` hace scroll to top normalmente
5. Verificar: build pasa sin errores

---

## Task 4: Validar VITE_CONTACTFORM_URL en ContactSection

**ID:** T4
**Archivo:** `src/components/sections/ContactSection.tsx`
**Esfuerzo:** 5 min
**Dependencias:** Ninguna
**Pasos:**
1. Agregar guard después de `const contactUrl = ...`:
   ```tsx
   if (!contactUrl) {
     toast.error("Error de configuración del formulario");
     return;
   }
   ```
2. Verificar: sin env var, el submit muestra toast de error
3. Verificar: con env var, el formulario funciona normalmente

---

## Orden de aplicación sugerido

T2 → T1 → T3 → T4

T2 y T1 son triviales, T3 requiere más cuidado, T4 es rápido. No hay dependencias entre tareas.

# Design: perf-and-polish

## Tarea 1: Validar VITE_WA_PHONE en BtnPrice

**Enfoque:** Guard temprano.
- Después de `const WA_PHONE = import.meta.env.VITE_WA_PHONE;`, agregar:
  ```tsx
  if (!WA_PHONE) {
    console.warn("BtnPrice: VITE_WA_PHONE no está configurado");
    return null;
  }
  ```
- El componente simplemente no se renderiza. El layout de la card se mantiene porque cada `BtnPrice` está dentro de su propio contenedor.

**Dependencias:** Ninguna.

---

## Tarea 2: Limpiar .env.example

**Enfoque:** Reemplazo directo de string.
- `'número de celular de Whatsapp'` → `'your_whatsapp_phone_number'`

**Dependencias:** Ninguna.

---

## Tarea 3: Arreglar conflicto ScrollToTop vs hash-scroll

**Arquitectura:**

1. **ScrollToTop.tsx** (componente existente)
   - Extraer `const HEADER_OFFSET = 64;` a nivel de módulo y exportarlo.
   - Leer `hash` de `useLocation()`.
   - En el `useEffect`:
     ```tsx
     useEffect(() => {
       if (!hash) window.scrollTo({ top: 0, behavior: 'instant' });
     }, [pathname, hash]);
     ```
   - Esto evita el scroll a 0 cuando la URL tiene un hash.

2. **HomePage.tsx**
   - Importar `HEADER_OFFSET` desde `ScrollToTop.tsx`.
   - Reemplazar:
     - `window.pageYOffset` → `window.scrollY`
     - `setTimeout(() => {...}, 100)` → `requestAnimationFrame(() => requestAnimationFrame(() => {...}))`
     - `const headerOffset = 64;` → usar `HEADER_OFFSET` importado

**Flujo de navegación corregido:**
1. Usuario hace clic en "Servicios" desde `/about`
2. Router navega a `/#servicios`
3. ScrollToTop se ejecuta: ve `hash = "#servicios"`, NO hace scroll
4. HomePage se monta, `useEffect` detecta hash, usa rAF doble para esperar al próximo paint
5. Scroll suave a la posición de `#servicios` con offset de 64px

**Dependencias:** `ScrollToTop.tsx` → exporta `HEADER_OFFSET`. `HomePage.tsx` → importa `HEADER_OFFSET`.

---

## Tarea 4: Validar VITE_CONTACTFORM_URL en ContactSection

**Enfoque:** Guard antes del fetch.
- Antes de `const response = await fetch(contactUrl, ...)`, validar:
  ```tsx
  if (!contactUrl) {
    toast.error("Error de configuración del formulario");
    return;
  }
  ```
- El guard va inmediatamente después de `const contactUrl = import.meta.env.VITE_CONTACTFORM_URL;`

**Dependencias:** Ninguna.

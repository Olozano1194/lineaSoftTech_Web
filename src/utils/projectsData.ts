import type { Project } from "./models/types";

export const projects: Project[] = [
    {
        id: 1,
        title: "FiadoApp",
        category: "webapp",
        tag: "Negocios / Tiendas",
        description: "Sistema POS para tiendas de barrio con dashboard de ventas, inventario y control de clientes fiados.",
        image: "/assets/projects/demo-FiadoApp.webp",
        slug: "fiadoapp",
        techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Django REST Framework", "MySQL", "Tauri", "Axios"],
        role: "Full Stack Developer",
        challenges: "Las tiendas de barrio de la región aún manejan su contabilidad en cuadernos, lo que genera pérdida de información, errores en cuentas por cobrar y dificultad para saber qué productos tienen en stock. El dueño necesita un sistema simple que le permita registrar ventas, controlar el fiado a clientes y saber cuándo reponer inventario, sin necesidad de una computadora potente.",
        solution: "Se desarrolló un sistema POS completo con carrito de compras, métodos de pago (efectivo/crédito) y validación de stock en tiempo real. El inventario incluye alertas de stock bajo y categorización de productos. El módulo de clientes fiados lleva control de límite de crédito, historial de pagos y badge de deudor. Se agregaron reportes semanales con gráficos de barras y dashboard con tarjetas de resumen. La app se empaquetó con Tauri para funcionar como aplicación de escritorio en equipos modesta.",
        results: [
            "Sistema funcional POS con ventas, inventario y control de fiado",
            "Exportación de datos a Excel (clientes, productos, ventas)",
            "App de escritorio con Tauri + backend empaquetado con PyInstaller",
            "Tiempos de respuesta bajo 200ms en operaciones críticas"
        ],
        gallery: []
    },
    {
        id: 2,
        title: "ControlFit",
        category: "webapp",
        tag: "Gym / Administración",
        description: "App para gestión de gimnasios con React y Django. Incluye roles de Admin y Usuario, gestión de miembros y diseño responsivo.",
        image: "/assets/projects/demo-ControlFit.webp",
        slug: "control-fit",
        techStack: ["React", "TypeScript", "Vite", "Django REST Framework", "Tailwind CSS", "Axios"],
        role: "Full Stack Developer",
        challenges: "Los gimnasios pequeños de la ciudad llevan el control de sus miembros en hojas de cálculo o papel. No tienen una herramienta centralizada que permita al administrador gestionar membresías y a los usuarios ver su progreso. Se necesitaba una solución con dos roles diferenciados que funcionara tanto en recepción como en dispositivos móviles dentro del gym.",
        solution: "Se construyó una aplicación full-stack con autenticación JWT y multi-tenant (cada administrador gestiona su propio gimnasio). El panel administrativo permite CRUD completo de miembros, asignación de membresías y dashboard con estadísticas. Del lado del usuario, cada miembro puede ver su progreso y rutinas. El diseño responsivo funciona en tablets y celulares dentro del gimnasio.",
        results: [
            "Autenticación JWT con refresh automático y multi-tenant",
            "CRUD completo de miembros con asignación de membresías",
            "Panel de control con estadísticas en tiempo real",
            "Diseño responsivo para uso en dispositivos móviles"
        ],
        gallery: []
    },
    {
        id: 3,
        title: "EduCloud Platform",
        category: "webapp",
        tag: "Educación / Instituciones",
        description: "Plataforma educativa refactorizada con React y TypeScript, optimizando la experiencia de usuario y la escalabilidad.",
        image: "/assets/projects/demo-Institucion.webp",
        slug: "educloud-platform",
        techStack: ["React", "TypeScript", "Express", "MongoDB", "Axios"],
        role: "Full Stack Developer",
        challenges: "Se tenía una plataforma académica funcional pero con una interfaz desactualizada y código difícil de mantener. La versión original estaba construida con HTML5 y JavaScript vanilla, y había llegado a un punto donde agregar nuevas funcionalidades requería cada vez más esfuerzo. El objetivo era migrar a un stack moderno sin perder funcionalidad.",
        solution: "Se refactorizó por completo el frontend migrando a React con TypeScript, implementando una arquitectura de componentes modulares. El backend se mantuvo en Express con MongoDB. Se rediseñó la interfaz manteniendo la misma funcionalidad: CRUD de instituciones educativas, gestión de usuarios con roles (administrador, docente, estudiante) y dashboard con métricas institucionales.",
        results: [
            "Migración exitosa de JavaScript vanilla a React + TypeScript",
            "Reducción de la complejidad del código en un 35%",
            "CRUD completo de instituciones con roles de usuario",
            "Backend API RESTful con Express y MongoDB"
        ],
        gallery: []
    },
    {
        id: 4,
        title: "Tinta Urbana",
        category: "landing",
        tag: "Landing / Servicios",
        description: "Landing page para servicios de estampados personalizados.",
        image: "/assets/projects/demo-Estampados.webp",
        slug: "tinta-urbana",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        role: "Frontend Developer",
        challenges: "El negocio de estampados necesitaba presencia web para mostrar sus servicios y recibir consultas de clientes potenciales. La página debía ser rápida, mostrar los productos de forma atractiva y facilitar el contacto directo.",
        solution: "Se diseñó y desarrolló una landing page responsiva con galería de productos y formulario de contacto integrado. Se optimizaron las imágenes con carga lazy y se priorizó el rendimiento para lograr una experiencia rápida en dispositivos móviles.",
        results: [
            "Landing page responsiva con formulario de contacto",
            "Imágenes optimizadas con carga lazy",
            "Diseño enfocado en conversión de leads"
        ],
        gallery: []
    }
];
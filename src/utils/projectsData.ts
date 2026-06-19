import type { Project } from "./models/types";

export const projects: Project[] = [
    {
        id: 1,
        title: "FiadoApp",
        category: "webapp",
        tag: "Negocios / Fiados",
        description: "Plataforma de administración comercial para tiendas de barrio con dashboard de ventas, inventario inteligente y control de clientes.",
        image: "/assets/projects/demo-FiadoApp.webp"
    },
    {
        id: 2,
        title: "ControlFit",
        category: "webapp",
        tag: "Gym / Administración",
        description: "App para gestión de gimnasios con React y Django. Incluye roles de Admin y Usuario, gestión de miembros y diseño responsivo.",
        image: "/assets/projects/demo-ControlFit.webp"
    },
    {
        id: 3,
        title: "EduCloud Platform",
        category: "webapp",
        tag: "Educación / Instituciones",
        description: "Plataforma educativa refactorizada con React y TypeScript, optimizando la experiencia de usuario y la escalabilidad.",
        image: "/assets/projects/demo-Institucion.webp"
    },
    {
        id: 4,
        title: "Tinta Urbana",
        category: "landing",
        tag: "Landing / Logística",
        description: "Landing page para servicios de estampados para gorras, buzos y camisetas.",
        image: "/assets/projects/demo-Estampados.webp"
    }
];
import type { Project } from "./models/types";

export const projects: Project[] = [
    {
        id: 1,
        title: "GymPro Manager",
        category: "webapp",
        tag: "Gym / Administración",
        description: "Gestión de gimnasios con login multiusuario, CRUD de miembros y membresías. Escalable para varios gimnasios.",
        image: "/assets/projects/demo-Listar.jpg"
    },
    {
        id: 2,
        title: "EduCloud Platform",
        category: "webapp",
        tag: "Educación / Instituciones",
        description: "Plataforma para instituciones con roles y CRUD completo. Funciona para múltiples instituciones.",
        image: "/assets/projects/demo-Institucion.jpg"
    },
    {
        id: 3,
        title: "Tinta Urbana",
        category: "landing",
        tag: "Landing / Logística",
        description: "Landing page para servicios de estampados para gorras, buzos y camisetas.",
        image: "/assets/projects/demo-Estampados.png"
    }
];
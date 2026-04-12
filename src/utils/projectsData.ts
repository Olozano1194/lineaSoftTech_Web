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
        title: "LogiTrack System",
        category: "landing",
        tag: "Software / Logística",
        description: "Software a medida para rastreo de flotas en tiempo real.",
        image: "/assets/images/project-logitrack.jpg"
    }
];
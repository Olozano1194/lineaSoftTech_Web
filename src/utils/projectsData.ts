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
        image: "https://lh3.googleusercontent.com/aida-public/AB6AXuDu9EUhKQ8zOz0g2WD8pRq_iYAmn-lczLyDnhuRbVj7WnsElaMOWZmyMPq0rf4c3svgZ2MzHXKSbC8XPMfNL_zmU8sDVLQ1KU6yvggyeynaicMJymrLp3FNirROG8bsXwqvkzL8PHexRk2xfvAr78Gcqg2g3L8FQq8P7Kq84U_LPuhmqthlLi41zkcpITLPNgZcMgvzn4iL9ce844Ut3VdClAIAJaECNhRa8JcBSzLn776vM1owctBfBqngOlPjDB6ICooVzUd6pX4"
    }
];
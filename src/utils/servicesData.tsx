import { MdOutlineSupportAgent, MdWeb } from "react-icons/md";
import { FaRobot } from "react-icons/fa6";
import { IoMdCode, IoMdSettings } from "react-icons/io";
import type { Service } from "../utils/models/service.types";

export const services: Service[] = [
    {
        id: 1,
        title: "Landing Pages y Páginas Web",
        description: "Creamos páginas web profesionales para que tu negocio tenga presencia en internet y más clientes puedan encontrarte.",
        icon: MdWeb,
        features: [
            { text: "Diseño adaptable a celulares y computadoras" },
            { text: "Formularios de contacto y WhatsApp" },
            { text: "Estructura clara y profesional" },
        ],
    },
    {
        id: 2,
        title: "Desarrollo de Aplicaciones Web",
        description: "Creamos sistemas web básicos para digitalizar procesos como inventarios, registros o gestión interna.",
        icon: IoMdCode,
        features: [
            { text: "Panel administrativo sencillo" },
            { text: "Base de datos estructurada" },
            { text: "Interfaz clara y funcional" },
        ],
    },
    {
        id: 3,
        title: "Automatización Básica de Procesos",
        description: "Automatizamos tareas repetitivas para que tu negocio ahorre tiempo y reduzca errores.",
        icon: FaRobot,
        features: [
            { text: "Formularios automatizados" },
            { text: "Integraciones básicas entre herramientas" },
            { text: "Organización digital de información" },
        ],
    },
    {
        id: 4,
        title: "Soporte Técnico y Mantenimiento",
        description: "Brindamos soporte técnico para equipos de escritorio y portátiles en hogares y pequeños negocios.",
        icon: MdOutlineSupportAgent,
        features: [
            { text: "Mantenimiento preventivo y correctivo" },
            { text: "Formateo e instalación de sistemas operativos" },
            { text: "Instalación de impresoras y periféricos" },
        ],
    },
    {
        id: 5,
        title: "Optimización de Páginas Web",
        description: "Mejoramos páginas web existentes para que carguen más rápido, se vean más profesionales y funcionen correctamente en celulares y computadores.",
        icon: IoMdSettings,
        features: [
            { text: "Mejora de velocidad de carga" },
            { text: "Optimización para celulares" },
            { text: "Ajustes básicos de SEO" },
        ],
    },
];


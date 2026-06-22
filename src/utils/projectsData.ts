import type { Project } from "./models/types";

export const projects: Project[] = [
    {
        id: 1,
        title: "FiadoApp",
        category: "webapp",
        tag: "Negocios / Tiendas",
        status: "pilot",
        description: "Actualmente en fase de prueba piloto en un comercio local de la región. Lo creamos después de trabajar con familiares que tienen tiendas de barrio y vimos cómo anotaban todo en cuadernos.",
        image: "/assets/projects/demo-FiadoApp.webp",
        slug: "fiadoapp",
        techStack: ["React", "TypeScript", "Vite", "Tailwind CSS", "Zustand", "Django REST Framework", "MySQL", "Tauri", "Axios"],
        role: "Full Stack Developer",
        repoUrl: "https://github.com/Olozano1194/FiadoApp",
        challenges: "El dueño de la tienda confiaba en su memoria para saber quién le debía y qué productos se estaban acabando. Anotaba las ventas en un cuaderno, pero la información se perdía, los clientes olvidaban cuánto habían fiado y no había forma de saber a tiempo qué producto necesitaba reposición. Perdía cuentas, perdía ventas, y cada cierre de mes era un dolor de cabeza.",
        solution: "Hoy el dueño registra las ventas en segundos desde cualquier computadora. Sabe al instante quién le debe, cuánto y desde cuándo. El sistema le avisa cuando un producto está por acabarse, y puede llevar el control del fiado sin depender de la memoria. Los reportes semanales le muestran cómo va el negocio sin tener que revisar cuaderno por cuaderno.",
        context: "Trabajamos con familiares que tienen tiendas de barrio en la región. Antes de esta herramienta, llevaban todas sus cuentas en cuadernos, anotando ventas, fiados y pagos a mano. El dueño confiaba en su memoria, pero a veces fallaba: se le olvidaba a quién le había fiado, o no se daba cuenta de que un producto se había acabado hasta que un cliente lo pedía. Nos dimos cuenta de que el problema no era la tecnología, sino que no tenían una forma simple y confiable de registrar lo que pasaba en el negocio día a día.",
        results: [
            "Sistema funcional POS con ventas, inventario y control de fiado",
            "Exportación de datos a Excel (clientes, productos, ventas)",
            "App de escritorio con Tauri + backend empaquetado con PyInstaller",
            "Tiempos de respuesta bajo 200ms en operaciones críticas"
        ],
        gallery: [
            "/assets/projects/gallery/fiadoApp/demo-clientes.webp",
            "/assets/projects/gallery/fiadoApp/demo-inventory.webp",
            "/assets/projects/gallery/fiadoApp/demo-venta.webp"
        ]
    },
    {
        id: 2,
        title: "ControlFit",
        category: "webapp",
        tag: "Gym / Administración",
        status: "portfolio",
        description: "Aplicación que creamos para ayudar a dos gimnasios del pueblo a dejar el papel y llevar el control de sus miembros de forma sencilla.",
        image: "/assets/projects/demo-ControlFit.webp",
        slug: "control-fit",
        techStack: ["React", "TypeScript", "Vite", "Django REST Framework", "Tailwind CSS", "Axios"],
        role: "Full Stack Developer",
        repoUrl: "https://github.com/Olozano1194/GimnasioReactDjango",
        liveUrl: "https://gimnasio-react-django.vercel.app/",
        challenges: "Los dueños de los gimnasios manejaban todo en papel: anotaban las membresías en cuadernos, registraban los pagos a mano y llevaban la cuenta de quién había pagado el mes revisando hoja por hoja. Se perdían registros de miembros, no sabían quién estaba al día y tenían que pasar horas cada semana solo para ordenar la información. El caos administrativo les quitaba tiempo que podían dedicar a sus clientes.",
        solution: "Hoy cada miembro tiene su propio registro. Los dueños saben al instante quién pagó, quién debe y qué membresía tiene cada uno. Los pagos están al día, la información no se pierde, y el tiempo que antes perdían revisando papeles ahora lo usan para entrenar y atender mejor a sus clientes.",
        context: "Conocimos a los dueños de dos gimnasios del pueblo que llevaban años manejando todo en papel. Perdían información de sus miembros, no podían saber rápido quién había pagado el mes, y cada vez que alguien preguntaba por su membresía tenían que revisar cuaderno por cuaderno. Nos pidieron ayuda porque ya no daban abasto. Ahí nos dimos cuenta de que el problema no era único: muchos pequeños negocios necesitaban una forma simple de organizar su información sin depender de sistemas complicados.",
        results: [
            "Autenticación JWT con refresh automático y multi-tenant",
            "CRUD completo de miembros con asignación de membresías",
            "Panel de control con estadísticas en tiempo real",
            "Diseño responsivo para uso en dispositivos móviles"
        ],
        gallery: [
            "/assets/projects/gallery/controlFit/demo-Home.webp",
            "/assets/projects/gallery/controlFit/demo-Listar.webp",
            "/assets/projects/gallery/controlFit/demo-Usuario.webp"
        ]
    },
    {
        id: 3,
        title: "EduCloud Platform",
        category: "webapp",
        tag: "Educación / Instituciones",
        status: "portfolio",
        description: "Una plataforma educativa que refactorizamos por completo para que fuera más fácil de mantener y actualizar. Lo hicimos como proyecto de aprendizaje, aplicando buenas prácticas que habíamos visto en el camino.",
        image: "/assets/projects/demo-Institucion.webp",
        slug: "educloud-platform",
        techStack: ["React", "TypeScript", "Express", "MongoDB", "Axios"],
        repoUrl: "https://github.com/Olozano1194/entidadesReact",
        role: "Full Stack Developer",
        challenges: "La plataforma funcionaba, pero su código se había vuelto difícil de mantener. Cada vez que queríamos agregar algo nuevo, el esfuerzo era mayor. La interfaz se sentía desactualizada y no era cómoda de usar. Sabíamos que podíamos hacerla mejor.",
        solution: "Rediseñamos la interfaz para que fuera más moderna y agradable de usar. Organizamos el código de forma que agregar nuevas funciones sea rápido y sencillo. Hoy la plataforma mantiene toda su funcionalidad original, pero es más fácil de mantener y actualizar.",
        results: [
            "Migración exitosa de JavaScript vanilla a React + TypeScript",
            "Reducción de la complejidad del código en un 35%",
            "CRUD completo de instituciones con roles de usuario",
            "Backend API RESTful con Express y MongoDB"
        ],
        gallery: [
            "/assets/projects/gallery/instituciones/demo-Home.webp",
            "/assets/projects/gallery/instituciones/demo-Listar.webp",
            "/assets/projects/gallery/instituciones/demo-Profile.webp"
        ]
    },
    {
        id: 4,
        title: "Tinta Urbana",
        category: "landing",
        tag: "Landing / Servicios",
        status: "portfolio",
        description: "Una landing page que creamos para un negocio de estampados personalizados que necesitaba presencia web rápida y profesional.",
        image: "/assets/projects/demo-TintaUrbana.webp",
        slug: "tinta-urbana",
        techStack: ["React", "TypeScript", "Tailwind CSS", "Vite"],
        role: "Frontend Developer",
        challenges: "El negocio de estampados necesitaba una página web para mostrar sus productos y recibir consultas de clientes. No tenían tiempo ni presupuesto para algo complejo: necesitaban algo rápido, que se viera bien y que funcionara en celulares.",
        solution: "Les creamos una página moderna con galería de productos y un formulario de contacto directo. La página carga rápido, se ve bien en cualquier dispositivo y está diseñada para que los clientes potenciales encuentren lo que buscan y se comuniquen en segundos.",
        results: [
            "Landing page responsiva con formulario de contacto",
            "Imágenes optimizadas con carga lazy",
            "Diseño enfocado en conversión de leads"
        ],
        gallery: [
            "/assets/projects/gallery/tintaUrbana/demo-Cotizacion.webp",
            "/assets/projects/gallery/tintaUrbana/demo-Hero.webp",
            "/assets/projects/gallery/tintaUrbana/demo-main.webp"
        ]
    }
];
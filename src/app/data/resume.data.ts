import { ResumeData } from '../models/resume.model';

export const RESUME_DATA: ResumeData = {
  personal: {
    name: 'Airton Jairo Sampayo Solano',
    role: 'Desarrollador de Software Full Stack',
    location: 'Bogotá, Colombia',
    email: 'aldairton23@gmail.com',
    linkedin: 'https://www.linkedin.com/in/airton-sampayo/',
    phone: '+57 324 700 6090',
    initials: 'AJS',
    summary:
      'Desarrollador de Software con más de 2 años de experiencia construyendo aplicaciones web modernas y escalables. Especializado en Angular y React para frontend, y Spring Boot, Laravel y PHP para backend, con sólido manejo de bases de datos relacionales (PostgreSQL, MySQL). Experiencia en integración de APIs RESTful, pruebas automatizadas con Cypress y metodologías ágiles. Orientado a la calidad del código, la resolución de problemas y la entrega continua de valor en equipos multidisciplinarios.',
  },

  skills: [
    {
      label: 'Frontend',
      icon: 'pi pi-desktop',
      skills: ['Angular', 'React', 'TypeScript', 'JavaScript', 'HTML5', 'CSS3'],
    },
    {
      label: 'Backend',
      icon: 'pi pi-server',
      skills: ['Spring Boot', 'Laravel', 'PHP'],
    },
    {
      label: 'Bases de datos',
      icon: 'pi pi-database',
      skills: ['PostgreSQL', 'MySQL', 'Diseño de esquemas relacionales'],
    },
    {
      label: 'Herramientas',
      icon: 'pi pi-wrench',
      skills: ['Git', 'GitHub', 'Cypress', 'Postman', 'APIs RESTful'],
    },
    {
      label: 'Metodologías',
      icon: 'pi pi-users',
      skills: ['Scrum', 'Desarrollo ágil', 'Resolución de incidencias', 'Documentación técnica'],
    },
  ],

  experience: [
    {
      company: 'VmlHolding',
      role: 'Desarrollador Full Stack',
      period: 'Nov 2025 – Actualidad',
      location: 'Bogotá, Colombia',
      severity: 'success',
      bullets: [
        'Desarrollo y mantenimiento de aplicaciones web con React, Laravel, PHP y MySQL, implementando requerimientos funcionales del cliente con soluciones eficientes y escalables.',
        'Liderazgo en la creación y mantenimiento de APIs RESTful con endpoints robustos y documentados para integración entre servicios frontend y backend.',
        'Gestión y optimización de bases de datos relacionales, garantizando integridad, rendimiento y escalabilidad.',
        'Diagnóstico y resolución de incidencias mediante sistema de tickets, aplicando mejoras correctivas y preventivas.',
        'Trabajo colaborativo con equipos multidisciplinarios para entrega continua de funcionalidades y mantenimiento evolutivo de sistemas.',
      ],
    },
    {
      company: 'GenteMovil',
      role: 'Desarrollador Front-End',
      period: 'Jul 2024 – Ago 2025',
      location: 'Bogotá, Colombia',
      severity: 'info',
      bullets: [
        'Diseño e implementación de nuevas funcionalidades y módulos en Angular para múltiples clientes y ambientes de despliegue.',
        'Integración con servicios backend en Spring Boot mediante consumo de APIs REST, asegurando comunicación eficiente entre capas.',
        'Análisis y resolución de problemas críticos en la lógica de negocio, optimizando la experiencia del usuario y la integridad de datos.',
        'Implementación y mantenimiento de pruebas automatizadas E2E con Cypress, mejorando la calidad y estabilidad del sistema.',
        'Participación en metodología Scrum para mejorar coordinación y eficiencia del equipo de desarrollo.',
      ],
    },
    {
      company: 'Kodland',
      role: 'Maestro de Programación',
      period: 'May 2023 – Actualidad',
      location: 'Bogotá, Colombia',
      severity: 'warn',
      bullets: [
        'Diseño e impartición de clases de programación para niños menores de 17 años con Scratch, Roblox Studio, Minecraft Education y Python.',
        'Transformación de conceptos técnicos en proyectos prácticos y motivadores, fomentando creatividad y pensamiento computacional.',
        'Seguimiento personalizado con estrategias diferenciadas por nivel de habilidad del estudiante.',
        'Colaboración con educadores y familias para mantener un entorno inclusivo, seguro y motivador.',
      ],
    },
  ],

  education: {
    institution: 'Universidad del Magdalena',
    degree: 'Ingeniería de Sistemas',
    period: 'Graduado diciembre 2025',
  },

  certifications: [
    {
      platform: 'Udemy',
      name: 'Formación Front-End — Angular',
      date: 'Octubre 2024',
    },
    {
      platform: 'Alura',
      name: 'Formación Front-End — React',
      date: 'Octubre 2022',
    },
  ],

  projects: [
    {
      name: 'Factum — Frontend',
      description:
        'Interfaz de un sistema POS completo: inventario, sesiones de caja, devoluciones, reportes y roles ADMIN/USER. Construido con Angular standalone y PrimeNG.',
      stack: ['Angular', 'PrimeNG', 'Tailwind', 'TypeScript'],
      githubUrl: 'https://github.com/JoseQuinteroTC/Factum-Front',
    },
    {
      name: 'Factum — Backend',
      description:
        'API REST del sistema POS con autenticación JWT, gestión de stock, sesiones de caja, compras y movimientos. Documentado con Swagger.',
      stack: ['Spring Boot', 'Java', 'PostgreSQL', 'JWT'],
      githubUrl: 'https://github.com/JoseQuinteroTC/Factum-Back',
    },
    {
      name: 'Facturador',
      description:
        'Sistema de facturación electrónica para gestión de clientes, productos y generación de facturas.',
      stack: ['PHP', 'Laravel', 'MySQL'],
      githubUrl: 'https://github.com/Baltho23/Facturador',
    },
    {
      name: 'Biblioteca',
      description:
        'Aplicación de gestión de biblioteca con módulo de préstamos, inventario de libros y control de usuarios.',
      stack: ['Java', 'Spring Boot', 'MySQL'],
      githubUrl: 'https://github.com/Baltho23/Biblioteca',
    },
    {
      name: 'Space Survival',
      description:
        'Videojuego de supervivencia espacial desarrollado como proyecto personal para explorar mecánicas de juego y lógica de colisiones.',
      stack: ['JavaScript', 'HTML5', 'CSS3'],
      githubUrl: 'https://github.com/Baltho23/Space_Survival',
    },
    {
      name: 'Portafolio',
      description:
        'Este mismo portafolio — SPA construida con Angular 20 standalone, PrimeNG y Tailwind CSS. Diseño profesional con animaciones y formulario WhatsApp.',
      stack: ['Angular', 'PrimeNG', 'Tailwind', 'TypeScript'],
      githubUrl: 'https://github.com/Baltho23/airton-sampayo-porfolio',
    },
  ],

  languages: [
    { name: 'Español', level: 'Nativo' },
    { name: 'Inglés', level: 'Básico (B1)' },
  ],
};

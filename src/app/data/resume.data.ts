import { ResumeData } from '../models/resume.model';

export const RESUME_DATA: ResumeData = {
  personal: {
    name: 'Airton Jairo Sampayo Solano',
    role: 'Desarrollador Full-Stack',
    location: 'Bogotá, Cundinamarca',
    email: 'aldairton23@gmail.com',
    linkedin: 'https://www.linkedin.com/in/airton-sampayo/',
    phone: '+57 324 7006090',
    initials: 'AJS',
    summary:
      'Desarrollador de software con 2 años de experiencia en el desarrollo de aplicaciones web, especializado en tecnologías frontend y backend como Angular, React, Spring Boot, Laravel, PHP, PostgreSQL y MySQL. Con experiencia en consumo e integración de APIs, desarrollo de interfaces modernas y gestión de bases de datos relacionales. Manejo herramientas de control de versiones como Git y pruebas automatizadas con Cypress. Me destaco por mi capacidad analítica, resolución de problemas y trabajo colaborativo en equipos multidisciplinarios.',
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
      skills: ['PostgreSQL', 'MySQL'],
    },
    {
      label: 'Herramientas',
      icon: 'pi pi-wrench',
      skills: ['Git', 'Cypress', 'REST APIs', 'Metodologías ágiles'],
    },
  ],

  experience: [
    {
      company: 'VmlHolding',
      role: 'Desarrollador Full-Stack',
      period: 'Noviembre 2024 – Actualidad',
      location: 'Bogotá',
      severity: 'success',
      bullets: [
        'Desarrollo y mantenimiento de aplicaciones web con React, Laravel, PHP y MySQL.',
        'Implementación de requerimientos funcionales garantizando soluciones escalables.',
        'Resolución de incidencias mediante tickets, diagnóstico y mejoras correctivas/preventivas.',
        'Gestión y optimización de bases de datos relacionales asegurando integridad y rendimiento.',
      ],
    },
    {
      company: 'GenteMovil',
      role: 'Desarrollador Front-End',
      period: 'Julio 2023 – Octubre 2024',
      location: 'Bogotá',
      severity: 'info',
      bullets: [
        'Desarrollo de nuevas funcionalidades y módulos en Angular adaptados a cada cliente.',
        'Consumo de endpoints e integración con servicios backend en Spring Boot.',
        'Análisis y resolución de problemas críticos en lógica de negocio.',
        'Implementación y mantenimiento de pruebas automatizadas con Cypress.',
      ],
    },
    {
      company: 'Kodland',
      role: 'Maestro de Programación',
      period: 'Mayo 2023 – Actualidad',
      location: 'Bogotá',
      severity: 'warn',
      bullets: [
        'Diseño e impartición de clases de programación para niños menores de 13 años.',
        'Uso de Scratch, Roblox Studio, Minecraft Education y Python.',
        'Fomento de creatividad, pensamiento crítico y resolución de problemas.',
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
      name: 'Formación Front-End Angular',
      date: 'Octubre 2024',
    },
    {
      platform: 'Alura',
      name: 'Formación Front-End React',
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
};

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
      name: 'Factum POS',
      description:
        'Sistema completo de Punto de Venta con gestión de inventario, sesiones de caja, devoluciones y reportes. Autenticación JWT con roles ADMIN/USER.',
      stack: ['Angular', 'Spring Boot', 'PostgreSQL', 'PrimeNG', 'Tailwind'],
      githubUrl: 'https://github.com/airton-sampayo',
    },
    {
      name: 'E-Commerce Dashboard',
      description:
        'Panel administrativo para tienda en línea con gestión de productos, pedidos y clientes. Incluye gráficas de ventas en tiempo real.',
      stack: ['React', 'Laravel', 'MySQL', 'Chart.js'],
      githubUrl: 'https://github.com/airton-sampayo',
    },
    {
      name: 'API RESTful de Gestión Escolar',
      description:
        'Backend para plataforma educativa con módulos de cursos, estudiantes, calificaciones y notificaciones. Pruebas automatizadas con Cypress.',
      stack: ['Spring Boot', 'PostgreSQL', 'JWT', 'Cypress'],
      githubUrl: 'https://github.com/airton-sampayo',
    },
  ],
};

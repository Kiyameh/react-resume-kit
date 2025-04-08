import type {Content} from 'react-resume-kit'

export const content: Content = {
  en: {
    // Section names:
    about_title: 'About Me',
    works_title: 'Experience',
    courses_title: 'Education',
    techs_title: 'Technologies',
    soft_skills_title: 'Soft Skills',
    soft_skills_subtitle: 'Highlights',
    projects_title: 'Projects',
    projects_subtitle: 'Features',
    connect_title: 'Contact',

    // Download button text
    download_pdf: 'Download PDF',

    // Language switcher text
    switcher_text: 'Language',
    language_labels: [
      {label: 'English', value: 'en'},
      {label: 'Spanish', value: 'es'},
    ],

    // Header
    name: 'Ginger Silverlake',
    title: 'Full Stack Developer',
    email: 'gin@example.com',
    phone: '+34 600 123 456',
    location: 'Barcelona, ES',
    picture: 'https://i.pravatar.cc/150?img=31',

    // About
    about_text:
      'Developer with experience in web technologies. Passionate about creating intuitive interfaces and user-centered design. Specialized in modern frameworks and agile methodologies.',

    // Experience
    works: [
      {
        title: 'Freelance Developer',
        company: 'Independent Projects',
        date: '2021 - Present',
        location: 'Madrid, ES',
        points: [
          'Collaborated with clients to develop customized digital solutions.',
          'Implemented web applications and optimized user interfaces.',
        ],
      },
      {
        title: 'Technology Specialist',
        company: 'TechCorp Solutions',
        date: '2018 - 2021',
        location: 'Barcelona, ES',
        points: [
          'Supervised technological systems and managed innovative projects.',
          'Provided training and technical support to staff.',
        ],
      },
    ],

    // Education
    courses: [
      {
        degree: 'Bachelor’s Degree in Computer Engineering',
        school: 'Polytechnic University of Madrid',
        date: '2015 - 2019',
      },
      {
        degree: 'Master’s in User Experience and Interface Design',
        school: 'University of Barcelona',
        date: '2020 - 2022',
      },
    ],

    // Technologies
    technologies: [
      {name: 'HTML5', icon: 'SiHtml5'},
      {name: 'CSS3', icon: 'SiCss3'},
      {name: 'JavaScript', icon: 'SiJavascript'},
      {name: 'TypeScript', icon: 'SiTypescript'},
      {name: 'React', icon: 'SiReact'},
      {name: 'Node', icon: 'SiNodedotjs'},
      {name: 'Linux', icon: 'SiLinux'},
      {name: 'Figma', icon: 'SiFigma'},
    ],

    // Soft Skills
    soft_skills: [
      {
        title: 'Effective Communication',
        description:
          'Excellent written and verbal communication skills. Experience in presentations and collaborative work.',
        icon: 'MessageSquare',
      },
      {
        title: 'Problem Solving',
        description:
          'Ability to identify and resolve problems efficiently, even under pressure.',
        icon: 'Brain',
      },
      {
        title: 'Teamwork',
        description:
          'Experience working in multidisciplinary and collaborative teams.',
        icon: 'Users',
      },
    ],

    // Projects
    projects: [
      {
        title: 'ShopEase - E-commerce Platform',
        description:
          'Development of a scalable e-commerce system with payment integration and inventory management.',
        features:
          'Shopping cart, payment gateways, user management, and data analytics system.',
        technologies: [
          'React',
          'Node.js',
          'Firebase',
          'Tailwind CSS',
          'Stripe',
        ],
        link: 'www.shopease.com',
      },
      {
        title: 'GreenPath - Sustainability Platform',
        description:
          'Application for tracking and promoting sustainable practices.',
        features:
          'Project management, activity logging, and gamification for users.',
        technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Docker'],
        link: 'www.greenpath.org',
      },
    ],

    // Footer
    author: 'Ginger Silverlake',
    social_links: [
      {
        name: 'GitHub',
        icon: 'SiGithub',
        url: 'github.com/ginger',
      },
      {
        name: 'LinkedIn',
        icon: 'Linkedin',
        url: 'linkedin.com/in/ginger/',
      },
      {
        name: 'X',
        icon: 'SiX',
        url: 'x.com/ginger',
      },
    ],
  },
  es: {
    // Section names:
    about_title: 'Sobre Mí',
    works_title: 'Experiencia',
    courses_title: 'Educación',
    techs_title: 'Tecnologías',
    soft_skills_title: 'Habilidades Blandas',
    soft_skills_subtitle: 'Destacadas',
    projects_title: 'Proyectos',
    projects_subtitle: 'Características',
    connect_title: 'Contacto',

    // Download button text
    download_pdf: 'Descargar PDF',

    // Language switcher text
    switcher_text: 'Idioma',
    language_labels: [
      {label: 'Inglés', value: 'en'},
      {label: 'Español', value: 'es'},
    ],
    // Header
    name: 'Ginger Silverlake',
    title: 'Desarrolladora Web',
    email: 'gin@example.com',
    phone: '+34 600 123 456',
    location: 'Barcelona, ES',
    picture: 'https://i.pravatar.cc/150?img=31',

    // About
    about_text:
      'Desarrolladora con experiencia en tecnologías web. Apasionada por la creación de interfaces intuitivas y el diseño centrado en el usuario. Especializada en frameworks modernos y metodologías ágiles.',

    // Experience
    works: [
      {
        title: 'Desarrolladora freelance',
        company: 'Proyectos Independientes',
        date: '2021 - Presente',
        location: 'Madrid, ES',
        points: [
          'Colaboración con clientes para desarrollar soluciones digitales personalizadas.',
          'Implementación de aplicaciones web y optimización de interfaces.',
        ],
      },
      {
        title: 'Especialista en Tecnología',
        company: 'TechCorp Solutions',
        date: '2018 - 2021',
        location: 'Barcelona, ES',
        points: [
          'Supervisión de sistemas tecnológicos y gestión de proyectos innovadores.',
          'Capacitación y soporte técnico al personal.',
        ],
      },
    ],

    // Education
    courses: [
      {
        degree: 'Grado en Ingeniería Informática',
        school: 'Universidad Politécnica de Madrid',
        date: '2015 - 2019',
      },
      {
        degree: 'Máster en Experiencia de Usuario y Diseño de Interfaces',
        school: 'Universidad de Barcelona',
        date: '2020 - 2022',
      },
    ],

    // Technologies
    technologies: [
      {name: 'HTML5', icon: 'SiHtml5'},
      {name: 'CSS3', icon: 'SiCss3'},
      {name: 'JavaScript', icon: 'SiJavascript'},
      {name: 'TypeScript', icon: 'SiTypescript'},
      {name: 'React', icon: 'SiReact'},
      {name: 'Node', icon: 'SiNodedotjs'},
      {name: 'Linux', icon: 'SiLinux'},
      {name: 'Figma', icon: 'SiFigma'},
    ],

    // Soft Skills
    soft_skills: [
      {
        title: 'Comunicación Efectiva',
        description:
          'Excelentes habilidades de comunicación tanto escritas como verbales. Experiencia en presentaciones y trabajo colaborativo.',
        icon: 'MessageSquare',
      },
      {
        title: 'Resolución de Problemas',
        description:
          'Capacidad para identificar y solucionar problemas de manera eficiente, incluso bajo presión.',
        icon: 'Brain',
      },
      {
        title: 'Trabajo en Equipo',
        description:
          'Experiencia trabajando en equipos multidisciplinarios y colaborativos.',
        icon: 'Users',
      },
    ],

    // Projects
    projects: [
      {
        title: 'ShopEase - Plataforma de E-commerce',
        description:
          'Desarrollo de un sistema de comercio electrónico escalable con integración de pagos y gestión de inventarios.',
        features:
          'Carrito de compras, pasarelas de pago, gestión de usuarios, y sistema de análisis de datos.',
        technologies: [
          'React',
          'Node.js',
          'Firebase',
          'Tailwind CSS',
          'Stripe',
        ],
        link: 'www.shopease.com',
      },
      {
        title: 'GreenPath - Plataforma de Sostenibilidad',
        description:
          'Aplicación para seguimiento y promoción de prácticas sostenibles.',
        features:
          'Gestión de proyectos, registro de actividades, y gamificación para usuarios.',
        technologies: ['Vue.js', 'Django', 'PostgreSQL', 'Docker'],
        link: 'www.greenpath.org',
      },
    ],

    // Footer
    author: 'Ginger Silverlake',
    social_links: [
      {
        name: 'GitHub',
        icon: 'SiGithub',
        url: 'github.com/ginger',
      },
      {
        name: 'LinkedIn',
        icon: 'Linkedin',
        url: 'linkedin.com/in/ginger/',
      },
      {
        name: 'X',
        icon: 'SiX',
        url: 'x.com/ginger',
      },
    ],
  },
}

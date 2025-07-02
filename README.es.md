# React Resume Kit

<br/>
<br/>
<div align="center">
  <img src="https://github.com/Kiyameh/react-resume-kit/blob/main/public/logo.png" alt="React Resume Kit Logo" width="300"/>
</div>
<br/>
<br/>

Un componente React moderno y personalizable para crear currículums o resumes hermosos y profesionales para tu sitio web. Construido con TypeScript.

## Demo en Vivo

Mira la demo en vivo en [https://react-resume-kit.vercel.app/](https://react-resume-kit.vercel.app/)

## Características

- 🌐 Soporte multiidioma
- 📄 Funcionalidad de descarga PDF
- 🎨 Temas personalizables con variables CSS
- 🎯 Soporte de iconos (cualquier elemento React, recomendado Lucide Icons, Simple Icons, etc.)
- ⚡ Fácil de configurar e integrar
- 📱 Diseño responsivo
- 🎨 UI moderna y limpia
- 🔧 Creación de toolbar personalizado con hook `useToolbar`
- 🎭 Sistema de estilos completo con clases prefijadas `.rrk-`
- 🌙 Soporte para tema claro/oscuro
- 📖 Documentación completa en inglés y español

## Instalación

```bash
npm install react-resume-kit
```

## Inicio Rápido

```tsx
import { ResumeLayout, ResumeHeader } from "react-resume-kit";
import { content } from "./tu-archivo-de-contenido";

function App() {
  return (
    <ResumeLayout resumeContent={content}>
      <ResumeHeader />
    </ResumeLayout>
  );
}
```

## Configuración

PASO 1: Agrega el componente ResumeLayout envolviendo uno o más de los siguientes:

```tsx
 <ResumeHeader/>
 <ResumeAbout/>
 <ResumeWorks/>
 <ResumeCourses/>
 <ResumeTechnologies/>
 <ResumeSoftSkills/>
 <ResumeProjects/>
 <ResumeContact/>
```

PASO 2: Puedes agregar las siguientes props al componente ResumeLayout:

- initialLanguage="es"
- resumeContent={content}
- enableLanguageSwitch
- enablePdfDownload

PASO 3: Copia el archivo data/exampleContent que contiene todos los datos del resume. Actualízalo. El contenido debe seguir esta estructura:

```typescript
import { ReactElement } from "react";

type ResumeContent = {
  // Uno para cada idioma
  en: {
    // Nombres de secciones
    about_title: string;
    works_title: string;
    courses_title: string;
    techs_title: string;
    soft_skills_title: string;
    soft_skills_subtitle: string;
    projects_title: string;
    projects_subtitle: string;
    connect_title: string;

    // Texto del botón de descarga
    download_pdf: string;

    // Selector de idioma
    switcher_text: string;
    language_labels: Array<{ label: string; value: string }>;

    // Header
    name: string;
    title: string;
    email: string;
    phone: string;
    location: string;
    picture?: string;

    // Acerca de
    about_text: string;

    // Experiencia
    works: Array<{
      title: string;
      company: string;
      date: string;
      location: string;
      points: string[];
    }>;

    // Cursos
    courses: Array<{
      degree: string;
      school: string;
      date: string;
    }>;

    // Tecnologías
    technologies: Array<{
      name: string;
      icon: ReactElement;
    }>;

    // Habilidades Blandas
    soft_skills: Array<{
      title: string;
      description: string;
      icon: ReactElement;
    }>;

    // Proyectos
    projects: Array<{
      title: string;
      description: string;
      features: string;
      technologies: string[];
      link?: string;
    }>;

    // Footer
    author: string;
    socialLinks: Array<{
      name: string;
      icon: ReactElement;
      url: string;
    }>;
  };
};
```

### Ejemplo de uso para tecnologías

```tsx
import { SiReact, SiTypescript } from "@icons-pack/react-simple-icons";

const content = {
  en: {
    // ...
    technologies: [
      { name: "React", icon: <SiReact /> },
      { name: "TypeScript", icon: <SiTypescript /> },
      // ...
    ],
    // ...
  },
  // ...
};
```

---

## Iconos

El componente soporta cualquier elemento React como icono. Puedes usar iconos de cualquier librería, como [Simple Icons](https://simpleicons.org) o [Lucide Icons](https://lucide.dev/), importando el componente del icono y pasándolo directamente:

```tsx
import { SiReact } from "@icons-pack/react-simple-icons";

// ...
technologies: [
  { name: "React", icon: <SiReact /> },
  // ...
];
```

Eres responsable de importar y renderizar el icono que quieras. El componente automáticamente inyectará la clase CSS necesaria para un estilo consistente.

---

## Soporte de Idiomas

El componente soporta múltiples idiomas. Necesitas proporcionar el contenido para cada idioma en el objeto de contenido:

```typescript
const content = {
  en: {
    /* Contenido en inglés */
  },
  es: {
    /* Contenido en español */
  },
};
```

## Personalización

### Sistema de Estilos

El paquete incluye un sistema de estilos completo basado en variables CSS y clases específicas. Todos los componentes usan clases que comienzan con `.rrk-` (react-resume-kit) para fácil identificación y personalización.

#### Personalización Rápida

```css
:root {
  --rrk-primary: #3b82f6; /* Tu color principal */
  --rrk-surface-100: #ffffff; /* Color de fondo */
  --rrk-content: #1f2937; /* Color de texto */
  --rrk-radius-medium: 0.75rem; /* Radio de borde */
}
```

#### Personalización Avanzada

- **Variables CSS**: Sobrescribe cualquier variable CSS para cambiar colores, sombras, bordes, etc.
- **Clases de Componentes**: Dirige componentes específicos usando sus clases `.rrk-`
- **Herramientas de Desarrollador**: Inspecciona elementos para ver todas las clases disponibles
- **Repositorio**: Revisa los archivos CSS de los componentes para referencia completa de clases

📖 **Documentación Completa**:

- [Guía del Sistema de Estilos](./docs/styling-system.es.md)
- [Guía de Personalización del Toolbar](./docs/toolbar-customization.es.md)
- [Índice de Documentación](./docs/README.md)

🎨 **Ejemplos de Temas**: [Temas Personalizados](./examples/custom-themes.css)

### Toolbar Personalizado

Crea tu propio toolbar usando el hook `useToolbar`:

```tsx
import { useToolbar } from "react-resume-kit";

function MyCustomToolbar() {
  const { handlePrint, languageLabels, handleLanguageSelect } = useToolbar();

  return (
    <div className="my-toolbar">
      <button onClick={handlePrint}>📄 Descargar</button>
      <select onChange={(e) => handleLanguageSelect(e.target.value)}>
        {languageLabels.map((lang) => (
          <option key={lang.value} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
```

## Contribuir

¡Las contribuciones son bienvenidas! No dudes en enviar un Pull Request.

## Licencia

MIT

## Autor

Andoni Abarzuza (@kiyameh)

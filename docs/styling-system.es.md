# Sistema de Estilos

El paquete `react-resume-kit` incluye un sistema de estilos completo y personalizable basado en variables CSS y clases específicas.

## Variables CSS Disponibles

El paquete utiliza un sistema de variables CSS que puedes sobrescribir para personalizar completamente la apariencia de todos los componentes.

### Colores Principales

```css
--rrk-primary: #1488c2; /* Color principal */
--rrk-primary-soft: color-mix(
  in srgb,
  var(--rrk-primary),
  white 40%
); /* Color principal suave */
```

### Colores de Contenido

```css
--rrk-content: #082f49; /* Texto principal */
--rrk-content-soft: color-mix(
  in srgb,
  var(--rrk-content),
  white 30%
); /* Texto secundario */
```

### Colores de Fondo y Superficie

```css
--rrk-background: white; /* Fondo principal */
--rrk-surface-100: color-mix(
  in srgb,
  var(--rrk-primary),
  white 95%
); /* Superficie clara */
--rrk-surface-200: color-mix(
  in srgb,
  var(--rrk-primary),
  white 85%
); /* Superficie media */
--rrk-surface-300: color-mix(
  in srgb,
  var(--rrk-primary),
  white 75%
); /* Superficie oscura */
```

### Bordes y Sombras

```css
--rrk-shadow-small: 0 1px 2px rgba(0, 0, 0, 0.05); /* Sombra pequeña */
--rrk-shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra media */
--rrk-shadow-large: 0 10px 15px rgba(0, 0, 0, 0.1); /* Sombra grande */
```

### Radios de Borde

```css
--rrk-radius-small: 0.25rem; /* Radio pequeño */
--rrk-radius-medium: 0.5rem; /* Radio medio */
--rrk-radius-large: 1rem; /* Radio grande */
```

## Clases CSS Específicas

Todos los componentes del paquete utilizan clases CSS que comienzan con el prefijo `.rrk-` (react-resume-kit). Esto permite una fácil identificación y personalización.

### Cómo Encontrar las Clases

1. **Developer Tools**: Inspecciona cualquier elemento del componente para ver las clases aplicadas
2. **Repositorio**: Revisa los archivos `.css` de cada componente en el repositorio
3. **Ejemplo de estructura**:
   ```
   src/components/
   ├── ResumeHeader/
   │   ├── ResumeHeader.css    # .rrk-header, .rrk-name, etc.
   ├── ResumeAbout/
   │   ├── ResumeAbout.css     # .rrk-about, .rrk-about-text, etc.
   ├── Toolbar/
   │   ├── Toolbar.css         # .rrk-toolbar, .rrk-download-button, etc.
   ```

### Ejemplos de Clases por Componente

#### Toolbar

````css
.rrk-toolbar                    /* Contenedor principal */
# Sistema de Estilos

El paquete `react-resume-kit` incluye un sistema de estilos completo y personalizable basado en variables CSS y clases específicas.

## Variables CSS Disponibles

El paquete utiliza un sistema de variables CSS que puedes sobrescribir para personalizar completamente la apariencia de todos los componentes.

### Colores Principales

```css
--rrk-primary: #1488c2; /* Color principal */
--rrk-primary-soft: color-mix(
  in srgb,
  var(--rrk-primary),
  white 40%
); /* Color principal suave */
````

### Colores de Contenido

```css
--rrk-content: #082f49; /* Texto principal */
--rrk-content-soft: color-mix(
  in srgb,
  var(--rrk-content),
  white 30%
); /* Texto secundario */
```

### Colores de Fondo y Superficie

```css
--rrk-background: white; /* Fondo principal */
--rrk-surface-100: color-mix(
  in srgb,
  var(--rrk-primary),
  white 95%
); /* Superficie clara */
--rrk-surface-200: color-mix(
  in srgb,
  var(--rrk-primary),
  white 85%
); /* Superficie media */
--rrk-surface-300: color-mix(
  in srgb,
  var(--rrk-primary),
  white 75%
); /* Superficie oscura */
```

### Bordes y Sombras

```css
--rrk-shadow-small: 0 1px 2px rgba(0, 0, 0, 0.05); /* Sombra pequeña */
--rrk-shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.1); /* Sombra media */
--rrk-shadow-large: 0 10px 15px rgba(0, 0, 0, 0.1); /* Sombra grande */
```

### Radios de Borde

```css
--rrk-radius-small: 0.25rem; /* Radio pequeño */
--rrk-radius-medium: 0.5rem; /* Radio medio */
--rrk-radius-large: 1rem; /* Radio grande */
```

## Clases CSS Específicas

Todos los componentes del paquete utilizan clases CSS que comienzan con el prefijo `.rrk-` (react-resume-kit). Esto permite una fácil identificación y personalización.

### Cómo Encontrar las Clases

1. **Developer Tools**: Inspecciona cualquier elemento del componente para ver las clases aplicadas
2. **Repositorio**: Revisa los archivos `.css` de cada componente en el repositorio
3. **Ejemplo de estructura**:
   ```
   src/components/
   ├── ResumeHeader/
   │   ├── ResumeHeader.css    # .rrk-header, .rrk-name, etc.
   ├── ResumeAbout/
   │   ├── ResumeAbout.css     # .rrk-about, .rrk-about-text, etc.
   ├── Toolbar/
   │   ├── Toolbar.css         # .rrk-toolbar, .rrk-download-button, etc.
   ```

### Ejemplos de Clases por Componente

#### Toolbar

```css
.rrk-toolbar                    /* Contenedor principal */
/* Contenedor principal */
.rrk-download-button           /* Botón de descarga */
.rrk-language-switcher         /* Selector de idioma */
.rrk-language-switcher-buttons; /* Menú de idiomas */
```

#### Header

```css
.rrk-header                    /* Contenedor del header */
/* Contenedor del header */
.rrk-name                      /* Nombre principal */
.rrk-title                     /* Título profesional */
.rrk-contact-info; /* Información de contacto */
```

#### Secciones

```css
.rrk-about                     /* Sección Acerca de */
/* Sección Acerca de */
.rrk-works                     /* Sección Experiencia */
.rrk-projects                  /* Sección Proyectos */
.rrk-technologies              /* Sección Tecnologías */
.rrk-soft-skills               /* Sección Habilidades Blandas */
.rrk-courses                   /* Sección Cursos */
.rrk-contact; /* Sección Contacto */
```

## Personalización

### 1. Sobrescribir Variables CSS

Crea un archivo CSS en tu proyecto y sobrescribe las variables:

```css
/* styles/custom-theme.css */
:root {
  /* Tema personalizado */
  --rrk-primary: #3b82f6; /* Azul personalizado */
  --rrk-surface-100: #ffffff; /* Fondo blanco */
  --rrk-content: #1f2937; /* Texto oscuro */
  --rrk-radius-medium: 0.75rem; /* Bordes más redondeados */
  --rrk-shadow-medium: 0 8px 16px rgba(0, 0, 0, 0.15); /* Sombra más pronunciada */
}

/* Tema oscuro */
[data-theme="dark"] {
  --rrk-primary: #60a5fa;
  --rrk-surface-100: #1f2937;
  --rrk-content: #f9fafb;
}
```

### 2. Personalizar Clases Específicas

Puedes sobrescribir cualquier clase específica:

```css
/* Personalizar el toolbar */
.rrk-toolbar {
  background: linear-gradient(135deg, var(--rrk-primary), var(--rrk-accent));
  border: none;
  box-shadow: var(--rrk-shadow-large);
}

/* Personalizar botones */
.rrk-download-button {
  background: var(--rrk-primary);
  color: var(--rrk-primary-content);
  border-radius: var(--rrk-radius-large);
  font-weight: 600;
}

.rrk-download-button:hover {
  background: var(--rrk-accent);
  transform: translateY(-2px);
  transition: all 0.3s ease;
}
```

### 3. Personalizar Componentes Específicos

```css
/* Header más minimalista */
.rrk-header {
  text-align: center;
  padding: 2rem 0;
  border-bottom: 2px solid var(--rrk-primary);
}

.rrk-name {
  font-size: 2.5rem;
  font-weight: 700;
  background: linear-gradient(
    135deg,
    var(--rrk-primary),
    var(--rrk-primary-soft)
  );
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
}

/* Secciones con diseño de tarjetas */
.rrk-about,
.rrk-works,
.rrk-projects {
  background: var(--rrk-surface-100);
  border-radius: var(--rrk-radius-medium);
  padding: 1.5rem;
  margin: 1rem 0;
  box-shadow: var(--rrk-shadow-small);
  border: 1px solid var(--rrk-primary-soft);
}
```

## Ejemplos de Temas Completos

### Tema Minimalista

```css
:root {
  --rrk-primary: #000000;
  --rrk-primary-soft: color-mix(in srgb, #000000, white 40%);
  --rrk-content: #212529;
  --rrk-content-soft: color-mix(in srgb, #212529, white 30%);
  --rrk-background: white;
  --rrk-surface-100: color-mix(in srgb, #000000, white 95%);
  --rrk-surface-200: color-mix(in srgb, #000000, white 85%);
  --rrk-surface-300: color-mix(in srgb, #000000, white 75%);
  --rrk-shadow-small: none;
  --rrk-shadow-medium: none;
  --rrk-shadow-large: none;
  --rrk-radius-small: 0;
  --rrk-radius-medium: 0;
  --rrk-radius-large: 0;
}
```

### Tema Moderno con Gradientes

```css
:root {
  --rrk-primary: #667eea;
  --rrk-primary-soft: color-mix(in srgb, #667eea, white 40%);
  --rrk-content: #2d3748;
  --rrk-content-soft: color-mix(in srgb, #2d3748, white 30%);
  --rrk-background: white;
  --rrk-surface-100: color-mix(in srgb, #667eea, white 95%);
  --rrk-surface-200: color-mix(in srgb, #667eea, white 85%);
  --rrk-surface-300: color-mix(in srgb, #667eea, white 75%);
  --rrk-shadow-medium: 0 10px 25px rgba(0, 0, 0, 0.1);
  --rrk-radius-medium: 1rem;
}

.rrk-toolbar {
  background: linear-gradient(
    135deg,
    var(--rrk-primary),
    var(--rrk-primary-soft)
  );
  color: white;
}
```

### Tema Oscuro Elegante

```css
[data-theme="dark"] {
  --rrk-primary: #60a5fa;
  --rrk-primary-soft: color-mix(in srgb, #60a5fa, white 40%);
  --rrk-content: #f9fafb;
  --rrk-content-soft: color-mix(in srgb, #f9fafb, white 30%);
  --rrk-background: #111827;
  --rrk-surface-100: color-mix(in srgb, #60a5fa, #111827 95%);
  --rrk-surface-200: color-mix(in srgb, #60a5fa, #111827 85%);
  --rrk-surface-300: color-mix(in srgb, #60a5fa, #111827 75%);
  --rrk-shadow-medium: 0 10px 25px rgba(0, 0, 0, 0.3);
}
```

## Consejos de Personalización

1. **Mantén la consistencia**: Usa las mismas variables en todo tu tema
2. **Prueba en ambos temas**: Asegúrate de que tu personalización funcione en modo claro y oscuro
3. **Usa las herramientas de desarrollador**: Inspecciona los elementos para ver qué clases se aplican
4. **Sobrescribe gradualmente**: Comienza con variables globales y luego personaliza componentes específicos
5. **Mantén la accesibilidad**: Asegúrate de que el contraste de colores sea adecuado

## Estructura de Archivos CSS

Cada componente tiene su propio archivo CSS con clases específicas:

```
src/components/
├── ResumeHeader/ResumeHeader.css
├── ResumeAbout/ResumeAbout.css
├── ResumeWorks/ResumeWorks.css
├── ResumeProjects/ResumeProjects.css
├── ResumeTechnologies/ResumeTechnologies.css
├── ResumeSoftSkills/ResumeSoftSkills.css
├── ResumeCourses/ResumeCourses.css
├── ResumeContact/ResumeContact.css
├── Toolbar/Toolbar.css
└── common.css (estilos globales)
```

Revisa estos archivos para ver todas las clases disponibles y sus estilos por defecto.

# Styling System

The `react-resume-kit` package includes a comprehensive and customizable styling system based on CSS variables and specific classes.

## Available CSS Variables

The package uses a CSS variable system that you can override to completely customize the appearance of all components.

### Primary Colors

```css
--rrk-primary: #1488c2; /* Primary color */
--rrk-primary-soft: color-mix(
  in srgb,
  var(--rrk-primary),
  white 40%
); /* Soft primary color */
```

### Content Colors

```css
--rrk-content: #082f49; /* Main text */
--rrk-content-soft: color-mix(
  in srgb,
  var(--rrk-content),
  white 30%
); /* Secondary text */
```

### Background and Surface Colors

```css
--rrk-background: white; /* Main background */
--rrk-surface-100: color-mix(
  in srgb,
  var(--rrk-primary),
  white 95%
); /* Light surface */
--rrk-surface-200: color-mix(
  in srgb,
  var(--rrk-primary),
  white 85%
); /* Medium surface */
--rrk-surface-300: color-mix(
  in srgb,
  var(--rrk-primary),
  white 75%
); /* Dark surface */
```

### Borders and Shadows

```css
--rrk-shadow-small: 0 1px 2px rgba(0, 0, 0, 0.05); /* Small shadow */
--rrk-shadow-medium: 0 4px 6px rgba(0, 0, 0, 0.1); /* Medium shadow */
--rrk-shadow-large: 0 10px 15px rgba(0, 0, 0, 0.1); /* Large shadow */
```

### Border Radius

```css
--rrk-radius-small: 0.25rem; /* Small radius */
--rrk-radius-medium: 0.5rem; /* Medium radius */
--rrk-radius-large: 1rem; /* Large radius */
```

## Specific CSS Classes

All package components use CSS classes that start with the `.rrk-` (react-resume-kit) prefix. This allows for easy identification and customization.

### How to Find Classes

1. **Developer Tools**: Inspect any component element to see the applied classes
2. **Repository**: Check the `.css` files of each component in the repository
3. **Example structure**:
   ```
   src/components/
   ├── ResumeHeader/
   │   ├── ResumeHeader.css    # .rrk-header, .rrk-name, etc.
   ├── ResumeAbout/
   │   ├── ResumeAbout.css     # .rrk-about, .rrk-about-text, etc.
   ├── Toolbar/
   │   ├── Toolbar.css         # .rrk-toolbar, .rrk-download-button, etc.
   ```

### Examples of Classes by Component

#### Toolbar

```css
.rrk-toolbar                    /* Main container */
/* Main container */
/* Main container */
/* Main container */
.rrk-download-button           /* Download button */
.rrk-language-switcher         /* Language selector */
.rrk-language-switcher-buttons; /* Language menu */
```

#### Header

```css
.rrk-header                    /* Header container */
/* Header container */
/* Header container */
/* Header container */
.rrk-name                      /* Main name */
.rrk-title                     /* Professional title */
.rrk-contact-info; /* Contact information */
```

#### Sections

```css
.rrk-about                     /* About section */
/* About section */
/* About section */
/* About section */
.rrk-works                     /* Experience section */
.rrk-projects                  /* Projects section */
.rrk-technologies              /* Technologies section */
.rrk-soft-skills               /* Soft Skills section */
.rrk-courses                   /* Courses section */
.rrk-contact; /* Contact section */
```

## Customization

### 1. Override CSS Variables

Create a CSS file in your project and override the variables:

```css
/* styles/custom-theme.css */
:root {
  /* Custom theme */
  --rrk-primary: #3b82f6; /* Custom blue */
  --rrk-surface-100: #ffffff; /* White background */
  --rrk-content: #1f2937; /* Dark text */
  --rrk-radius-medium: 0.75rem; /* More rounded borders */
  --rrk-shadow-medium: 0 8px 16px rgba(0, 0, 0, 0.15); /* More pronounced shadow */
}

/* Dark theme */
[data-theme="dark"] {
  --rrk-primary: #60a5fa;
  --rrk-surface-100: #1f2937;
  --rrk-content: #f9fafb;
}
```

### 2. Customize Specific Classes

You can override any specific class:

```css
/* Customize toolbar */
.rrk-toolbar {
  background: linear-gradient(135deg, var(--rrk-primary), var(--rrk-accent));
  border: none;
  box-shadow: var(--rrk-shadow-large);
}

/* Customize buttons */
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

### 3. Customize Specific Components

```css
/* More minimalist header */
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

/* Card-style sections */
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

## Complete Theme Examples

### Minimalist Theme

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

### Modern Theme with Gradients

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

### Elegant Dark Theme

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

## Customization Tips

1. **Maintain consistency**: Use the same variables throughout your theme
2. **Test both themes**: Make sure your customization works in both light and dark modes
3. **Use developer tools**: Inspect elements to see what classes are applied
4. **Override gradually**: Start with global variables and then customize specific components
5. **Maintain accessibility**: Ensure color contrast is adequate

## CSS File Structure

Each component has its own CSS file with specific classes:

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
└── common.css (global styles)
```

Check these files to see all available classes and their default styles.

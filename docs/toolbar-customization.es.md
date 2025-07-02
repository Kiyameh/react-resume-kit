# Toolbar Personalizado

El paquete `react-resume-kit` incluye un hook `useToolbar` que te permite crear tu propio toolbar personalizado con las mismas funcionalidades que el toolbar por defecto.

## Uso del Hook

```tsx
import { useToolbar } from "react-resume-kit";

function MyCustomToolbar() {
  const {
    handlePrint,
    handleLanguageSelect,
    handleLanguageButtonClick,
    isLanguageMenuOpen,
    isMounted,
    content,
    languageLabels,
    isLanguageActive,
  } = useToolbar();

  return (
    <div className="my-custom-toolbar">
      {/* Botón de descarga personalizado */}
      <button onClick={handlePrint} className="my-download-btn">
        📄 Descargar PDF
      </button>

      {/* Selector de idioma personalizado */}
      <div className="my-language-selector">
        <button onClick={handleLanguageButtonClick}>
          🌍 {content.switcher_text}
        </button>

        {isMounted && isLanguageMenuOpen && (
          <div className="my-language-menu">
            {languageLabels.map((lang, index) => (
              <button
                key={index}
                onClick={() => handleLanguageSelect(lang.value)}
                className={isLanguageActive(lang.value) ? "active" : ""}
              >
                {lang.label}
              </button>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
```

## API del Hook

### Funciones

- **`handlePrint()`**: Ejecuta la función de impresión del navegador
- **`handleLanguageSelect(langValue: Language)`**: Cambia el idioma y cierra el menú
- **`handleLanguageButtonClick()`**: Abre/cierra el menú de idiomas
- **`isLanguageActive(langValue: Language)`**: Verifica si un idioma está activo

### Estados

- **`isLanguageMenuOpen`**: Indica si el menú de idiomas está abierto
- **`isMounted`**: Indica si el componente está montado (útil para evitar flash)

### Datos

- **`language`**: Idioma actual
- **`content`**: Contenido del idioma actual
- **`languageLabels`**: Lista de idiomas disponibles

## Ejemplo Completo

```tsx
import React from "react";
import { useToolbar } from "react-resume-kit";

function MinimalToolbar() {
  const { handlePrint, languageLabels, handleLanguageSelect } = useToolbar();

  return (
    <div
      style={{
        position: "fixed",
        top: "1rem",
        right: "1rem",
        display: "flex",
        gap: "0.5rem",
        zIndex: 1000,
      }}
    >
      <button onClick={handlePrint}>📄</button>

      <select onChange={(e) => handleLanguageSelect(e.target.value)}>
        {languageLabels.map((lang, index) => (
          <option key={index} value={lang.value}>
            {lang.label}
          </option>
        ))}
      </select>
    </div>
  );
}
```

## Consideraciones

- El hook maneja automáticamente el estado de montaje para evitar flash
- Todas las funciones están tipadas con TypeScript
- El hook es compatible con el contexto de idioma existente
- Puedes usar cualquier framework de CSS o estilos en línea

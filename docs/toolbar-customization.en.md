# Custom Toolbar

The `react-resume-kit` package includes a `useToolbar` hook that allows you to create your own custom toolbar with the same functionality as the default toolbar.

## Hook Usage

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
      {/* Custom download button */}
      <button onClick={handlePrint} className="my-download-btn">
        📄 Download PDF
      </button>

      {/* Custom language selector */}
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

## Hook API

### Functions

- **`handlePrint()`**: Executes the browser's print function
- **`handleLanguageSelect(langValue: Language)`**: Changes the language and closes the menu
- **`handleLanguageButtonClick()`**: Opens/closes the language menu
- **`isLanguageActive(langValue: Language)`**: Checks if a language is active

### States

- **`isLanguageMenuOpen`**: Indicates if the language menu is open
- **`isMounted`**: Indicates if the component is mounted (useful for avoiding flash)

### Data

- **`language`**: Current language
- **`content`**: Content of the current language
- **`languageLabels`**: List of available languages

## Complete Example

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

## Considerations

- The hook automatically handles the mount state to avoid flash
- All functions are typed with TypeScript
- The hook is compatible with the existing language context
- You can use any CSS framework or inline styles

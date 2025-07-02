import { useState, useEffect } from "react";
import { Github, Package, ChevronUp, ChevronDown } from "lucide-react";
import styles from "./PackageLinks.module.css";

interface PackageLinksProps {
  npmUrl: string;
  githubUrl: string;
  packageName: string;
}

const colors = [
  { name: "default", value: "#1488c2" },
  { name: "purple", value: "#8b5cf6" },
  { name: "green", value: "#10b981" },
  { name: "orange", value: "#f59e0b" },
  { name: "red", value: "#ef4444" },
];

export default function PackageLinks({
  npmUrl,
  githubUrl,
  packageName,
}: PackageLinksProps) {
  const [isExpanded, setIsExpanded] = useState(true);
  const [selectedColor, setSelectedColor] = useState("default");

  const changeThemeColor = (colorValue: string) => {
    document.documentElement.style.setProperty("--rrk-primary", colorValue);
  };

  const handleColorClick = (color: { name: string; value: string }) => {
    setSelectedColor(color.name);
    changeThemeColor(color.value);
  };

  useEffect(() => {
    // Establecer el color por defecto al cargar
    changeThemeColor(colors[0].value);
  }, []);

  return (
    <div
      className={`${styles.container} ${!isExpanded ? styles.collapsed : ""}`}
    >
      <button
        onClick={() => setIsExpanded(!isExpanded)}
        className={styles.toggleButton}
      >
        <Package size={18} />
        <span className={styles.packageName}>{packageName}</span>
        {isExpanded ? <ChevronDown size={18} /> : <ChevronUp size={18} />}
      </button>

      <div className={styles.content}>
        <div className={styles.colorSwitcherContainer}>
          <div className={styles.colorGrid}>
            {colors.map((color) => (
              <button
                key={color.name}
                className={`${styles.colorButton} ${
                  selectedColor === color.name ? styles.selected : ""
                }`}
                style={{ backgroundColor: color.value }}
                onClick={() => handleColorClick(color)}
                title={color.name}
                aria-label={`Cambiar a color ${color.name}`}
              />
            ))}
          </div>
        </div>

        <p className={styles.description}>Get this package from:</p>

        <div className={styles.linkContainer}>
          <a
            href={npmUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.npmLink}`}
          >
            <Package size={16} />
            <span>Npm</span>
          </a>

          <a
            href={githubUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={`${styles.link} ${styles.githubLink}`}
          >
            <Github size={16} />
            <span>GitHub</span>
          </a>
        </div>
      </div>
    </div>
  );
}

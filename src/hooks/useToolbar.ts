import { useState, useEffect } from "react";
import { useLanguage } from "../context/language-context";
import { Language } from "../types/types";

export interface UseToolbarReturn {
  // Funciones
  handlePrint: () => void;
  handleLanguageSelect: (langValue: Language) => void;
  handleLanguageButtonClick: () => void;

  // Estados
  isLanguageMenuOpen: boolean;
  isMounted: boolean;

  // Datos del idioma
  language: Language;
  content: any; // ResumeContent type
  languageLabels: Array<{
    value: Language;
    label: string;
  }>;

  // Funciones de utilidad
  isLanguageActive: (langValue: Language) => boolean;
}

export function useToolbar(): UseToolbarReturn {
  const [isLanguageMenuOpen, setIsLanguageMenuOpen] = useState(false);
  const [isMounted, setIsMounted] = useState(false);

  const { language, setLanguage, content } = useLanguage();

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const handlePrint = () => {
    window.print();
  };

  const handleLanguageButtonClick = () => {
    setIsLanguageMenuOpen(!isLanguageMenuOpen);
  };

  const handleLanguageSelect = (langValue: Language) => {
    setLanguage(langValue);
    setIsLanguageMenuOpen(false);
  };

  const isLanguageActive = (langValue: Language): boolean => {
    return language === langValue;
  };

  return {
    // Funciones
    handlePrint,
    handleLanguageSelect,
    handleLanguageButtonClick,

    // Estados
    isLanguageMenuOpen,
    isMounted,

    // Datos del idioma
    language,
    content,
    languageLabels: content.language_labels,

    // Funciones de utilidad
    isLanguageActive,
  };
}

import { createContext, useContext, useEffect, useState } from "react";
import en from "../data/content.en.js";
import es from "../data/content.es.js";

const CONTENT = { en, es };

const LanguageContext = createContext(null);

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    const saved = localStorage.getItem("vs-lang");
    return saved === "es" || saved === "en" ? saved : "en";
  });

  useEffect(() => {
    localStorage.setItem("vs-lang", lang);
    document.documentElement.lang = lang;
  }, [lang]);

  const toggle = () => setLang((l) => (l === "en" ? "es" : "en"));

  return (
    <LanguageContext.Provider value={{ lang, toggle, content: CONTENT[lang] }}>
      {children}
    </LanguageContext.Provider>
  );
}

export function useLanguage() {
  return useContext(LanguageContext);
}

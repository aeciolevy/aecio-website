"use client";
import { createContext, useContext } from "react";

interface LanguageContextProps {
  dictionary: Record<string, string>;
  language: Language;
}

enum Language {
  EN = "en",
  PT = "pt",
}

export const LanguageContext = createContext<LanguageContextProps>({
  dictionary: {},
  language: Language.EN
});

export const useLanguage = () => {
  return useContext(LanguageContext);
};

type LanguageProviderProps = {
  dictionary: Record<string, string>;
  children: React.ReactNode;
  language: Language;
};

export const LanguageProvider = ({
  children,
  dictionary,
  language,
}: LanguageProviderProps) => {
  return (
    <LanguageContext.Provider value={{ dictionary, language }}>
      {children}
    </LanguageContext.Provider>
  );
};


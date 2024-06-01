"use client";
import { createContext, useContext } from "react";

interface LanguageContextProps {
  dictionary: Record<string, string>;
}

export const LanguageContext = createContext<LanguageContextProps>({
  dictionary: {},
});

export const useDictionary = () => {
  return useContext(LanguageContext);
};

type LanguageProviderProps = {
  dictionary: Record<string, string>;
  children: React.ReactNode;
};

export const LanguageProvider = ({
  children,
  dictionary,
}: LanguageProviderProps) => {
  return (
    <LanguageContext.Provider value={{ dictionary }}>
      {children}
    </LanguageContext.Provider>
  );
};

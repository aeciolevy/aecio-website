import { Locale, getDictionary } from "./dictionaries";
import { Header } from "./components/layout/Header";
import { LanguageProvider } from "./context/LanguageContext";
import { Language } from "@/app/types/language";
import { MainPortuguese } from "./components/home/MainPortuguese";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <LanguageProvider dictionary={dictionary} language={lang}>
        <Header dictionary={dictionary} lang={lang} />
        <main
          className={`sm:w-full flex flex-col items-center p-4 sm:p-16 xl:p-24`}
        >
          {lang === Language.PT && <MainPortuguese />}
        </main>
      </LanguageProvider>
    </>
  );
}


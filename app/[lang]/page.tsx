import { Locale, getDictionary } from "./dictionaries";
import { Header } from "./components/layout/Header";
import { LanguageProvider } from "./context/LanguageContext";
import { Language } from "@/app/types/language";
import { MainPortuguese } from "./components/home/MainPortuguese";
import { MainEnglish } from "./components/home/MainEnglish";

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
          className={`sm:w-full flex flex-col items-center space-y-4 sm:space-y-12 p-4 sm:p-16 xl:p-24`}
        >
          {lang === Language.PT && <MainPortuguese />}
          {lang === Language.EN && <MainEnglish />}
        </main>
      </LanguageProvider>
    </>
  );
}


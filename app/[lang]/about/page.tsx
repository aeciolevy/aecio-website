import { Language } from "@/app/types/language";
import { Header } from "@/app/[lang]/components/layout/Header";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { AboutPT } from "./components/AboutPT";
import { AboutEN } from "./components/AboutEN";

type Props = {
  params: {
    lang: Language;
  };
};

export default async function AboutPage({ params: { lang } }: Props) {

  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header lang={lang} dictionary={dictionary} />
      <main className="p-16 lg:p-24 xl:p-32" >
        {lang === Language.PT && <AboutPT />}
        {lang === Language.EN && <AboutEN />}
      </main>

    </>
  );
}


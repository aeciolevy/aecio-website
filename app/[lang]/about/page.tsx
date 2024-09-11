import { Language } from "@/app/types/language";
import { Header } from "@/app/[lang]/components/layout/Header";
import { getDictionary } from "@/app/[lang]/dictionaries";

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
      <main>
        <h1> About page </h1>
      </main>

    </>
  );
}


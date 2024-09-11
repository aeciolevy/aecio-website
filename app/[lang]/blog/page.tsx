import { Language } from "@/app/types/language";
import { Header } from "../components/layout/Header";
import { getDictionary } from "../dictionaries";
import { EnglishBlog } from "./components/EnglishBlog";
import { PortugueseBlog } from "./components/PortugueseBlog";

type Props = {
  params: {
    lang: Language;
  };
};

export default async function Blog({ params: { lang } }: Props) {

  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header lang={lang} dictionary={dictionary} />
      <main>
        {lang === Language.EN && <EnglishBlog />}
        {lang === Language.PT && <PortugueseBlog />}
      </main>

    </>
  );
}


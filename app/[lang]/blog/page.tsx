import { Language } from "@/app/types/language";
import { Header } from "../components/layout/Header";
import { getDictionary } from "../dictionaries";
import { EnglishBlog } from "./components/EnglishBlog";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Newsletter archive | Aécio Levy",
  description: "Read Aécio Levy's blog posts on remote work, accelerated learning, and baby steps on business",
  keywords: "software engineering, remote work, accelerated learning, blog, Aécio Levy",
}

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
      </main>

    </>
  );
}


import { Header } from "../components/layout/Header";
import { getDictionary } from "../dictionaries";
import { Language } from "@/app/types/language";
import { PortugueseBlog } from "./components/PortugueseBlog";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Acervo de Cartas | Aécio Levy",
  description: "Explore o acervo de cartas de Aécio Levy. Sobre trabalho remoto, performance e evolução humana",
  keywords: "cartas, trabalho remoto, performance, evolução humana",
}

type CartasPageProps = {
  params: {
    lang: Language;
  };
};

export default async function CartasPage({ params: { lang } }: CartasPageProps) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header lang={lang} dictionary={dictionary} />
      {lang === Language.PT && <PortugueseBlog />}
    </>

  )
}


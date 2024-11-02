import { Language } from "@/app/types/language";
import { Header } from "@/app/[lang]/components/layout/Header";
import { getDictionary } from "@/app/[lang]/dictionaries";
import { AboutPT } from "./components/AboutPT";
import { AboutEN } from "./components/AboutEN";

export const generateMetadata = ({ params: { lang } }: Props) => {
  if (lang === Language.EN) {
    return {
      title: "Meet Aécio Levy | Engineer, Songwriter, Lifelong Learner",
      description: "Learn about Aécio Levy, a Brazilian software engineer, songwriter, and aspiring entrepreneur living in Canada. Discover his journey in remote work, accelerated learning, and pursuing what he loves.",
      keywords: "about Aécio Levy, software engineer biography, aspiring entrepreneur, Brazilian in Canada, remote work advocate, accelerated learning, songwriter, personal journey, tech enthusiast, lifelong learner",
    };
  } else if (lang === Language.PT) {
    return {
      title: "Conheça Aécio Levy | Engenheiro, Compositor, Aprendiz Eterno",
      description: "Conheça Aécio Levy, um engenheiro de software, compositor e aspirante a empreendedor brasileiro que vive no Canadá. Descubra sua jornada no trabalho remoto, aprendizado acelerado e na busca pelo que ama.",
      keywords: "sobre Aécio Levy, biografia de engenheiro de software, aspirante a empreendedor, brasileiro no Canadá, defensor do trabalho remoto, aprendizado acelerado, compositor, jornada pessoal, entusiasta de tecnologia, aprendiz eterno",
    }
  }
}

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
      <main className="p-6 sm:p-16 lg:p-24 xl:p-32" >
        {lang === Language.PT && <AboutPT />}
        {lang === Language.EN && <AboutEN />}
      </main>

    </>
  );
}


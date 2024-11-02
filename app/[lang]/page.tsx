import { Locale, getDictionary } from "./dictionaries";
import { Header } from "./components/layout/Header";
import { LanguageProvider } from "./context/LanguageContext";
import { Language } from "@/app/types/language";
import { MainPortuguese } from "./components/home/MainPortuguese";
import { MainEnglish } from "./components/home/MainEnglish";

export const generateMetadata = ({ params: { lang } }: Props) => {
  if (lang === Language.EN) {
    return {
      title: "My Remote Work & Business Journey | Insights by Aécio Levy",
      description: "Discover insights from Aécio Levy—a software engineer who believes in taking small steps to achieve big goals. Explore topics on remote work, learning faster, and doing what you love.",
      keywords: "remote work, learning faster, software engineer, aspiring entrepreneur, songwriter, Brazilian living in Canada, personal development, do what you love, business insights, accelerated learning",
    };
  } else if (lang === Language.PT) {
    return {
      title: "Minha Jornada de Trabalho Remoto e Negócios | Insights por Aécio Levy",
      description: "Descubra insights de Aécio Levy—um engenheiro de software que acredita em dar pequenos passos para alcançar grandes objetivos. Explore tópicos sobre trabalho remoto, aprendizado acelerado e fazer o que você ama.",
      keywords: "trabalho remoto, aprendizado acelerado, engenheiro de software, aspirante a empreendedor, compositor, brasileiro morando no Canadá, desenvolvimento pessoal, faça o que você ama, insights de negócios, aprendizado acelerado",
    }
  }
}

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <Header dictionary={dictionary} lang={lang} />
      <main
        className={`sm:w-full flex flex-col items-center space-y-4 sm:space-y-12 p-4 sm:p-16 xl:p-24`}
      >
        {/* <Lambda className="absolute top-32 -left-32 rotate-45" /> */}
        {/* <Lambda className="absolute top-16 -right-48 rotate-45" /> */}

        {lang === Language.PT && <MainPortuguese />}
        {lang === Language.EN && <MainEnglish />}
      </main>
    </>
  );
}

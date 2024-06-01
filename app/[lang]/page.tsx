import { Locale, getDictionary } from "./dictionaries";
import { Banner } from "./components/home/Banner";
import { Blog } from "./components/home/Blog";
import { cormorant } from "./fonts";
import { About } from "./components/home/About";
import { Header } from "./components/layout/Header";
import { LanguageProvider } from "./context/LanguageContext";

type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
  return (
    <>
      <LanguageProvider dictionary={dictionary}>
        <Header dictionary={dictionary} />
        <main className={`${cormorant.variable} w-full p-4`}>
          <Banner />
          <Blog />
          <About />
        </main>
      </LanguageProvider>
    </>
  );
}

import { Locale, getDictionary } from "./dictionaries";
import SwitchLang from "./components/SwitchLang";
import { Banner } from "./components/home/Banner";
import { BlogSummary } from "./components/home/BlogSummary";
import { Blog } from "./components/home/Blog";
import { cormorant } from "./fonts";
import { About } from "./components/home/About";
import { Header } from "./components/layout/Header";
type Props = {
  params: {
    lang: Locale;
  };
};

export default async function Home({ params: { lang } }: Props) {
  const dictionary = await getDictionary(lang);
  console.log("### dictionary:", dictionary);
  return (
    <>
      <Header dictionary={dictionary} />
      <main className={`${cormorant.variable} w-full p-4`}>
        <Banner />
        <Blog />
        <About />
      </main>
    </>
  );
}

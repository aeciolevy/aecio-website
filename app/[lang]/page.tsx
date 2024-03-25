import { Locale, getDictionary } from './dictionaries'
import SwitchLang from "./components/SwitchLang";
import { Banner } from './components/home/Banner';
import { BlogSummary } from './components/home/BlogSummary';
import { Blog } from './components/home/Blog';
import { cormorant } from './fonts';
type Props = {
  params: {
    lang: Locale;
  }
}

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang)

  return (
    <main className={`${cormorant.variable} w-full p-4`}>
      <Banner />
      <Blog />
    </main>
  );
}


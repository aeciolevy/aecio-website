import { Locale, getDictionary } from './dictionaries'
import SwitchLang from "./components/SwitchLang";
import { Banner } from './components/home/Banner';

type Props = {
  params: {
    lang: Locale;
  }
}

export default async function Home({ params: { lang } }: Props) {
  const intl = await getDictionary(lang)

  return (
    <>
      <Banner />
    </>
  );
}


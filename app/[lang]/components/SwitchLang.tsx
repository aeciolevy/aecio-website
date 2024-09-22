'use client'

import { Locale } from '@/app/[lang]/dictionaries'
import { usePathname, useRouter } from 'next/navigation'
import { useLanguage } from '@/app/[lang]/context/LanguageContext'
import { FC } from 'react'
import { Language } from '@/app/types/language'

function replaceLanguageInPath(pathname: string, newLang: string): string {
  if (!pathname || pathname === "/") {
    return `/${newLang}`;
  }

  const segments = pathname.split('/');

  if (segments.length > 1 && segments[1]) {
    segments[1] = newLang; // Replace the language segment
  } else {
    segments.splice(1, 0, newLang); // Insert the language for root or empty cases
  }

  return segments.join('/');
}

type Props = {}

export const SwitchLang: FC<Props> = () => {
  const router = useRouter();
  const pathname = usePathname();
  const { language } = useLanguage();

  const switchLang = (lang: Locale) => {
    const newPath = replaceLanguageInPath(pathname, lang);
    router.push(`${newPath}`);
  }

  const activeLanguageStyle = "font-bold text-2xl"

  return (
    <div>
      <button className={`${language === Language.EN ? activeLanguageStyle : ""}`} onClick={() => switchLang(Language.EN)}>
        🇺🇸
      </button>
      <span className="text-2xl"> | </span>
      <button className={`${language === Language.PT ? activeLanguageStyle : ""}`} onClick={() => switchLang(Language.PT)}>
        🇧🇷
      </button>
    </div >
  )
}



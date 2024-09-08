'use client'

import { Locale } from '@/app/[lang]/dictionaries'
import { useRouter } from 'next/navigation'
import { useLanguage } from '@/app/[lang]/context/LanguageContext'
import { FC } from 'react'
import { Language } from '@/app/types/language'

type Props = {}

export const SwitchLang: FC<Props> = () => {
  const router = useRouter()
  const { language } = useLanguage();

  const switchLang = (lang: Locale) => {
    router.push(`/${lang}`)
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



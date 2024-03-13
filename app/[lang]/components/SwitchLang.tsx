'use client'

import { Locale } from '@/app/[lang]/dictionaries'
import { useRouter } from 'next/navigation'
import { FC } from 'react'

type Props = {}

const SwitchLang: FC<Props> = () => {
  const router = useRouter()

  const switchLang = (lang: Locale) => {
    router.push(`/${lang}`)
  }

  return (
    <div>
      <button className="" onClick={() => switchLang('en')}>
        English
      </button>
      <button className="" onClick={() => switchLang('pt')}>
        Português
      </button>
    </div >
  )
}

export default SwitchLang


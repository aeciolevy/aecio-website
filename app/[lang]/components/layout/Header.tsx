import React from "react";
import { HamburgerNavMenu } from "./HamburguerNavMenu";
import { Language } from "@/app/types/language";
import { SwitchLang } from "../SwitchLang";
import Link from "next/link";
import { Levy } from "@/app/[lang]/components/icons/Levy";

type HeaderProps = {
  dictionary: Record<string, string>;
  lang: Language
};

export const Header = ({ dictionary, lang }: HeaderProps) => {
  const linkStyle = "text-[#dfe5f5] hover:text-primary-500";
  const blogHref = lang === Language.EN ? "/blog" : "/carta";

  return (
    <div className="flex justify-between items-center py-4 px-4 sm:px-16 w-full bg-slate-950">
      <Link href={`/${lang}`} className="cursor-pointer" >
        <Levy />
      </Link>
      <HamburgerNavMenu lang={lang} />
      <div className="hidden sm:flex items-start gap-16">

        <Link href={blogHref} className={`${linkStyle}`}>{dictionary.letters}</Link>
        {lang === Language.PT && (
          <Link href="/composicoes" className={`${linkStyle}`}>{dictionary.songLyrics}</Link>
        )
        }
        <Link href="/about" className={`${linkStyle}`}>{dictionary.about}</Link>
      </div>
      <SwitchLang />
    </div>
  );
};


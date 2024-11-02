"use client";
import { useState } from "react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { useLanguage } from "../../context/LanguageContext";
import { Language } from "@/app/types/language";
import Link from "next/link";

type HamburgerNavMenuProps = {
  lang: Language;
}

const HamburgerNavMenu = ({ lang }: HamburgerNavMenuProps) => {
  const [isOpen, setIsOpen] = useState(false);
  const { dictionary, language } = useLanguage();
  console.log('### dictionary:', dictionary);
  console.log('### language:', language);
  const blogHref = lang === Language.EN ? "/blog" : "/carta";

  return (
    <div className="sm:hidden sm:ml-auto text-2xl ">
      <DropdownMenu onOpenChange={(state) => setIsOpen(state)}>
        <DropdownMenuTrigger asChild>
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link href={blogHref}>
            <DropdownMenuItem>{dictionary.blog}</DropdownMenuItem>
          </Link >
          {language === Language.PT && (
            <Link href="/composicoes">
              <DropdownMenuItem>{dictionary.songLyrics}</DropdownMenuItem>
            </Link>
          )}
          <Link href="/about">
            <DropdownMenuItem>{dictionary.about}</DropdownMenuItem>
          </Link>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export { HamburgerNavMenu };


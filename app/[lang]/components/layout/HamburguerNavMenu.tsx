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

const HamburgerNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dictionary, language } = useLanguage();
  return (
    <div className="sm:hidden sm:ml-auto">
      <DropdownMenu onOpenChange={(state) => setIsOpen(state)}>
        <DropdownMenuTrigger asChild>
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <Link href="/blog">
            <DropdownMenuItem>{dictionary.blog}</DropdownMenuItem>
          </Link >
          <DropdownMenuItem>{dictionary.letters}</DropdownMenuItem>
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


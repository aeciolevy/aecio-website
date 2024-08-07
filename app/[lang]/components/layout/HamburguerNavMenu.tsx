"use client";
import { useState } from "react";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/DropdownMenu";
import { useDictionary } from "../../context/LanguageContext";

const HamburgerNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { dictionary } = useDictionary();
  return (
    <div className="sm:hidden ml-auto">
      <DropdownMenu onOpenChange={(state) => setIsOpen(state)}>
        <DropdownMenuTrigger asChild>
          {isOpen ? <XIcon size={24} /> : <MenuIcon size={24} />}
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>{dictionary.letters}</DropdownMenuItem>
          <DropdownMenuItem>{dictionary.songLyrics}</DropdownMenuItem>
          <DropdownMenuItem>{dictionary.about}</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
};

export { HamburgerNavMenu };

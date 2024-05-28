"use client";
import { useState } from "react";
import {
  Menubar,
  MenubarButton,
  MenubarList,
  MenubarListItem,
} from "@/components/ui/Menubar";
import { Menu as MenuIcon, X as XIcon } from "lucide-react";
const HamburgerNavMenu = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="sm:hidden relative">
      <button onClick={toggleMenu} className="p-2 focus:outline-none">
        {isOpen ? (
          <XIcon className="w-6 h-6" />
        ) : (
          <MenuIcon className="w-6 h-6" />
        )}
      </button>
      {isOpen && (
        <Menubar className="absolute top-0 left-0 w-full bg-gray-800 bg-opacity-75">
          <MenubarList>
            <MenubarListItem>
              <a href="#home" className="text-white block py-2 px-4">
                Home
              </a>
            </MenubarListItem>
            <MenubarListItem>
              <a href="#about" className="text-white block py-2 px-4">
                About
              </a>
            </MenubarListItem>
            <MenubarListItem>
              <a href="#services" className="text-white block py-2 px-4">
                Services
              </a>
            </MenubarListItem>
            <MenubarListItem>
              <a href="#contact" className="text-white block py-2 px-4">
                Contact
              </a>
            </MenubarListItem>
          </MenubarList>
        </Menubar>
      )}
    </div>
  );
};

export { HamburgerNavMenu };

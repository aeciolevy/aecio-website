import { Space_Grotesk } from "next/font/google";
import { Cormorant } from "next/font/google";
import { Fira_Sans } from "next/font/google";
import { Dancing_Script } from "next/font/google";

export const dancing = Dancing_Script({ subsets: ["latin"], variable: '--font-dancing' });
export const fira = Fira_Sans({ subsets: ["latin"], variable: '--font-fira', weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"] });
export const grotesk = Space_Grotesk({ subsets: ["latin"], variable: '--font-grotesk' });
export const cormorant = Cormorant({ subsets: ["latin"], variable: '--font-cormorant' });



import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { dancing, fira } from "./fonts";
import { GoogleTagManager } from '@next/third-parties/google'
import { getDictionary } from "./dictionaries";
import { LanguageProvider } from "./context/LanguageContext";
import { Language } from "../types/language";

export const metadata: Metadata = {
  title: "Aécio Levy",
  description: "Website about Aécio Levy",
};

export default async function RootLayout({
  params,
  children,
}: {
  children: React.ReactNode;
  params: {
    lang: Language;
  };
}) {
  const { lang } = params;
  const dictionary = await getDictionary(lang);

  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      <LanguageProvider dictionary={dictionary} language={lang}>
        <body className={`${fira.variable} ${dancing.variable}`}>{children}</body>
      </LanguageProvider>
    </html>
  );
}


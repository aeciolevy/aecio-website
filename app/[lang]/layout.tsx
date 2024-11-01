import React from "react";
import type { Metadata } from "next";
import "./globals.css";
import { dancing } from "./fonts";
import { GoogleTagManager } from '@next/third-parties/google'

export const metadata: Metadata = {
  title: "Aécio Levy",
  description: "Website about Aécio Levy",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <GoogleTagManager gtmId={process.env.NEXT_PUBLIC_GTM_ID || ""} />
      <body className={`font-fira ${dancing.variable}`}>{children}</body>
    </html>
  );
}


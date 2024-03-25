import type { Metadata } from "next";
import "./globals.css";
import { Header } from "./components/layout/Header";
import * as Fonts from './fonts';

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
      <body className={`${Fonts.grotesk.variable}`}>
        <Header />
        {children}
      </body>
    </html >
  );
}


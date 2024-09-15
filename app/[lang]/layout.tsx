import type { Metadata } from "next";
import "./globals.css";
import { dancing } from "./fonts";

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
      <body className={`font-fira ${dancing.variable}`}>{children}</body>
    </html>
  );
}


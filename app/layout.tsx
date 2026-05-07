import type { Metadata } from "next";
import { Montserrat, Raleway } from "next/font/google";
import "./globals.css";

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["300", "400", "600", "700"],
});

const raleway = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
  weight: ["200", "300", "400"],
});

export const metadata: Metadata = {
  title: "sudeNEXUS — Connecting ideas. Creating impact.",
  description: "Expert consultancy for Erasmus+, Horizon, and EU-funded programmes.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${montserrat.variable} ${raleway.variable}`}>
      <body>{children}</body>
    </html>
  );
}
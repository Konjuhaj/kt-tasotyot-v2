import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

import Navbar from "./components/navbar/Navbar";
import ClientOnly from "./components/ClientOnly";
import ContactModal from "./components/modal/ContactModal";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import References from "./components/references/References";
import Benefits from "./components/benefits/Benefits";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "KT-Tasotyot",
  description: "Rakenamme yhdessä tulevaisuuden",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ClientOnly>
          <Navbar />
          <Hero />
          <Services />
          <References />
          <Benefits />
          <ContactModal />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}

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
import Showcase from "./components/showcase/Showcase";
import Testimony from "./components/slideshow/Testimony";
import Team from "./components/team/Team";
import Footer from "./components/footer/Footer";

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
          <Showcase />
          <Testimony />
          <Team />
          <ContactModal />
          <Footer />
        </ClientOnly>
        {children}
      </body>
    </html>
  );
}

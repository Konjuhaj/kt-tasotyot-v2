import Image from "next/image";
import Hero from "./components/hero/Hero";
import Services from "./components/services/Services";
import References from "./components/references/References";
import Benefits from "./components/benefits/Benefits";
import Showcase from "./components/showcase/Showcase";
import Testimony from "./components/slideshow/Testimony";
import Team from "./components/team/Team";
import ContactModal from "./components/modal/ContactModal";

export default function Home() {
  return (
    <>
      <Hero />
      <Services />
      <References />
      <Benefits />
      <Showcase />
      <Testimony />
      <Team />
      <ContactModal />
    </>
  );
}

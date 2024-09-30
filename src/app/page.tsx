import Image from "next/image";
import styles from "./page.module.css";
import Hero from "./sections/Hero/Hero";
import About from "./sections/About/About";
import Menu from "./sections/Menu/Menu";

export default function Home() {
  return (
    <>
      <Hero />
      <main id="main">
        <About />
        <Menu />
      </main>
    </>
    
  );
}

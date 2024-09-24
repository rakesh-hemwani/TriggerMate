import Image from "next/image";
import { AppBar } from "./components/AppBar";
import { Hero } from "./components/Hero";
import { HeroVideo } from "./components/HeroVideo";

export default function Home() {
  return (
    <main className="pb-40">
      <AppBar/>
      <Hero/>
      <HeroVideo/>
    </main>
  );
}

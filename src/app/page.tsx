"use client"
import HomePage from "./component/homePage";
import { useEffect } from "react";
import Lenis from "@studio-freight/lenis";



export default function Home() {

  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);

  return (
    <main>
      <div className=" relative z-0 bg-gradient-to-r from-[#0f0f0f] via-[#0b1b33] to-[#000000] w-full h-auto">   
        <HomePage />
      </div>
    </main>
  );
}

"use client";
import { useEffect } from "react";
import Data from "@/components/Data_Container";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
import Hero from "@/components/Hero";
import Stack from "@/components/Stack";
import Experience from "@/components/Experience";
import Contact from "@/components/Contact";
import Projects from "@/components/Projects";
export default function Home() {
  return (
    <main className="relative w-full text-[#adb1b8]">
      <Data>
        <Hero />
        <Stack />
        <Projects />
        <Experience />
        <Contact />
      </Data>
    </main>
  );
}

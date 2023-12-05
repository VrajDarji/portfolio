"use client";
import React, { useEffect, useRef } from "react";

const Backgroud = () => {
  const spotlightRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const spotlightElem = spotlightRef.current;
      if (!spotlightElem) return;
      const offsetX = spotlightElem.offsetWidth / 2;
      const offsetY = spotlightElem.offsetHeight / 2;
      spotlightElem.style.top = e.clientY - offsetY + "px";
      spotlightElem.style.left = e.clientX - offsetX + "px";
    };
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return (
    <div className="fixed inset-0 z-10 flex pointer-events-none">
      <div className="absolute top-0 -translate-y-1/2 left-1/2 -translate-x-1/2 rounded-full w-[250px] sm:w-[500px] aspect-square bg-[hsl(218,6.5%,22.1%)]"></div>
      <div className="absolute bottom-0 translate-y-1/2 left-0 -translate-x-1/2 rounded-full w-[250px] sm:w-[500px] aspect-square bg-[hsl(218,6.5%,22.1%)]"></div>
      <div className="absolute bottom-0 translate-y-1/2 right-0 translate-x-1/2 rounded-full w-[250px] sm:w-[500px] aspect-square bg-[hsl(218,6.5%,22.1%)]"></div>
      <div
        ref={spotlightRef}
        className="top-[171px] left-[611px] lg:block absolute rounded-full w-[100px] aspect-square bg-[hsl(202,5.8%,37.5%)]"
      ></div>
      <div className="absolute inset-0 bg-[rgba(24,24,26,.5)] backdrop-blur-[100px] backdrop-saturate-200"></div>
    </div>
  );
};

export default Backgroud;

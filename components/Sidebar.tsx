"use client";

import { User, Building, Layers, FileCode2, Mail } from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { cn } from "@/lib/utils";
import Link from "next/link";
const icons = [
  {
    icon: <User className="h-5 w-5" strokeWidth={1} />,
    tag: "About",
    href: "#",
  },
  {
    icon: <Layers className="h-5 w-5" strokeWidth={1} />,
    tag: "Stack",
    href: "#stack",
  },
  {
    icon: <FileCode2 className="h-5 w-5" strokeWidth={1} />,
    tag: "Projects",
    href: "#projects",
  },
  {
    icon: <Building className="h-5 w-5" strokeWidth={1} />,
    tag: "Work Experience",
    href: "#experience",
  },
];

const Sidebar = () => {
  const [pathname, SetPathname] = useState<string>("#");
  useEffect(() => {
    const onScroll = () => {
      const fromTop = window.scrollY;
      for (const item of icons) {
        const section = document.getElementById(item.href);
        if (section) {
          const isActive =
            section.offsetTop -
              (parseFloat(getComputedStyle(section).scrollMarginTop) || 0) <=
              fromTop && section.offsetTop + section.offsetHeight > fromTop;
          if (isActive) {
            SetPathname(item.href);
            break;
          }
        }
      }
    };
    document.addEventListener("scroll", onScroll);
    return () => {
      document.removeEventListener("scroll", onScroll);
    };
  }, []);

  const scrollToSection = (sectionId: string) => {
    let sId = sectionId;
    if (sectionId === "#") {
      sId = "#container";
    }
    console.log(sectionId);
    const section = document.getElementById(sId);
    if (section) {
      const fromTop = window.scrollY;
      section.scrollIntoView({
        behavior: "smooth",
        // block: "start",
        // inline: "nearest",
      });
      setTimeout(() => {
        SetPathname(sectionId);
      }, 250);
      // console.log(pathname);
    }
  };

  return (
    <div className="z-20 fixed top-0 left-0 w-20 h-[100vh] bg-[rgba(39,40,45,.5)] flex flex-col items-center justify-center gap-3 px-2 text-[#acb0b7]">
      {icons.map((icon) => {
        return (
          <TooltipProvider key={icon.tag}>
            <Tooltip>
              <TooltipTrigger>
                <button
                  className={cn(
                    "p-3 rounded-md ",
                    icon.href === pathname
                      ? "bg-[#edeef0] text-black"
                      : "hover:bg-[rgba(255,255,255,0.1)]"
                  )}
                  onClick={() => {
                    scrollToSection(icon.href);
                  }}
                >
                  {icon.icon}
                </button>
              </TooltipTrigger>
              <TooltipContent side="right" align="center">
                <p>{icon.tag}</p>
              </TooltipContent>
            </Tooltip>
          </TooltipProvider>
        );
      })}
    </div>
  );
};

export default Sidebar;

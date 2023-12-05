"use client";

import { User, Building, Layers, FileCode2, Mail } from "lucide-react";
import React, { useEffect } from "react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { useParams, usePathname, useRouter } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";
const icons = [
  {
    icon: <User className="h-5 w-5" strokeWidth={1} />,
    tag: "About",
    href: "/",
  },
  {
    icon: <Layers className="h-5 w-5" strokeWidth={1} />,
    tag: "Stack",
    href: "/stack",
  },
  {
    icon: <FileCode2 className="h-5 w-5" strokeWidth={1} />,
    tag: "Projects",
    href: "/projects",
  },
  {
    icon: <Building className="h-5 w-5" strokeWidth={1} />,
    tag: "Work Experience",
    href: "/experience",
  },
  {
    icon: <Mail className="h-5 w-5" strokeWidth={1} />,
    tag: "Contact",
    href: "/contact",
  },
];

const Sidebar = () => {
  const pathname = usePathname();
  const router = useRouter();
  console.log(pathname);
  useEffect(() => {
    console.log(pathname);
  }, [pathname]);
  return (
    <div className="z-20 fixed top-0 left-0 w-20 h-[100vh] bg-[#202025] flex flex-col items-center justify-center gap-3 px-2 text-[#acb0b7]">
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
                    router.push(icon.href);
                  }}
                >
                  {/* <Link href={icon.href}>{icon.icon}</Link> */}
                  {icon.icon}
                </button>
              </TooltipTrigger>
              <TooltipContent>
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

"use client";
import Image from "next/image";
import React, { useState } from "react";
import { Github, Twitter, Linkedin, Download, X } from "lucide-react";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "./ui/tooltip";
import { Button } from "./ui/button";
import { cn } from "@/lib/utils";
import { useRouter } from "next/navigation";

const socials = [
  {
    icon: <Github className="h-5 w-5 text-xs " strokeWidth={1} />,
    link: "https://github.com/VrajDarji",
    tag: "Github",
  },
  {
    icon: <Twitter className="h-5 w-5 text-xs " strokeWidth={1} />,
    link: "https://twitter.com/Vraj_Darji_/",
    tag: "Twitter",
  },
  {
    icon: <Linkedin className="h-5 w-5 text-xs " strokeWidth={1} />,
    link: "https://www.linkedin.com/in/vraj-darji-160932281?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    tag: "LinkedIn",
  },
];

const Profile = () => {
  const [isEnlarged, setIsEnlarged] = useState(false);
  const Enlarge = () => {
    setIsEnlarged((prev) => !prev);
  };
  const router = useRouter();
  return (
    <>
      <div
        className={cn(
          "fixed transition-all duration-0 top-[50%] left-[50%] transform translate-x-[-50%] translate-y-[-50%] z-50 backdrop-blur-sm flex justify-center items-center overflow-hidden",
          isEnlarged ? "w-full h-full" : "w-0 h-0"
        )}
      >
        <Image
          height={500}
          width={500}
          src={
            "https://pbs.twimg.com/profile_images/1723735651647168512/6cRnjEXW_400x400.jpg"
          }
          alt="image"
          className={"object-cover rounded-full"}
        />
        <button
          className="absolute top-3 left-3 p-3 rounded-full bg-[rgba(0,0,0,0.5)] text-white"
          onClick={() => Enlarge()}
        >
          <X className="h-5 w-5" />
        </button>
      </div>
      <div className="fixed z-10 top-0 left-20 w-[18rem] h-[100vh] bg-[#202025] flex flex-col items-center py-10 gap-4 px-5 border-l-[0.1px] border-r-[0.1px] border-[#2e3034]">
        <div
          className={
            "w-[65%] relative aspect-square rounded-full overflow-hidden cursor-pointer"
          }
          onClick={() => {
            Enlarge();
          }}
        >
          <Image
            fill
            src={
              "https://pbs.twimg.com/profile_images/1723735651647168512/6cRnjEXW_400x400.jpg"
            }
            alt="profile"
            className="object-cover"
          />
        </div>
        <div className="text-center mt-5 text-[#EDEEF0]">
          <h1 className="text-xl font-semibold">Vraj Darji</h1>
          <p className="text-lg font-light text-[#A2A5AC]">
            Aspiring Web Devloper
          </p>
        </div>
        <div className="w-full flex flex-row items-center justify-center gap-5">
          {socials.map((social) => {
            return (
              <TooltipProvider key={social.tag}>
                <Tooltip>
                  <TooltipTrigger>
                    <button className="text-[#A2A5AC] hover:text-white">
                      <a
                        href={social.link}
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        {social.icon}
                      </a>
                    </button>
                  </TooltipTrigger>
                  <TooltipContent>
                    <p>{social.tag}</p>
                  </TooltipContent>
                </Tooltip>
              </TooltipProvider>
            );
          })}
        </div>
        <div>{/* Info */}</div>
        <div className="flex flex-col gap-2 w-full mb-auto">
          <Button variant={"outline2"}>
            <a href="/Vraj_Resume.pdf" download className="flex flex-row">
              <Download className="mr-2 h-4 w-4" /> Download Resume
            </a>
          </Button>
          <Button
            variant={"outline"}
            onClick={() => {
              router.push("/contact");
            }}
          >
            Contact
          </Button>
        </div>
      </div>
    </>
  );
};

export default Profile;

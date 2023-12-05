"use client";
import { useEffect } from "react";
import Data from "@/components/Data_Container";
import Image from "next/image";
import { usePathname, useRouter } from "next/navigation";
export default function Home() {
  return (
    <main className="relative w-full text-[#adb1b8]">
      <Data>
        <div className="flex flex-row justify-between items-center">
          <div className="flex flex-col gap-2">
            <h1 className="text-[3.75rem] font-bold tracking-[-0.025rem] leading-[4.25rem] text-[#edeef0]">
              Hello! I&apos;m <br />
              <span className="text-[#49dfbe]">Vraj Darji .</span>
            </h1>
            <p className="text-[1.125rem] leading-[1.625rem] tracking-[-.025rem]">
              Your <span className="text-[#49dfbe]">vision</span>, my{" "}
              <span className="text-[#49dfbe]">code</span> – let&apos;s create
              something extraordinary.
            </p>
          </div>
          <Image
            src={
              "https://kevinwolf.cr/_next/image?url=%2Fimages%2Fabout%2Fhero.png&w=384&q=75"
            }
            height={300}
            width={300}
            alt="ff"
          />
        </div>
        <div>
          {/* About */}
          <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. In
            temporibus, saepe neque excepturi explicabo a aperiam dolore
            expedita cul=pa repellat, quisquam, commodi at fuga reprehenderit.
            Magnam deserunt nesciunt ut aut officia natus? Libero illo sequi
            mollitia alias fugiat natus fugit ut, autem, iste expedita dicta,
            minima consequatur error accusantium quos quaerat nostrum sapiente?
            Voluptatem debitis ullam consectetur, sint cupiditate earum minima
            molestiae exercitationem, tempora aliquid quia obcaecati, impedit
            modi culpa deleniti ipsam optio veritatis velit at? Repudiandae
            autem voluptate iure voluptatem minima maxime pariatur fugit
            consequatur, soluta, quia mollitia necessitatibus perferendis rem
            cupiditate ex alias nihil adipisci blanditiis exercitationem
            ratione?
          </p>
        </div>
      </Data>
    </main>
  );
}

import React from "react";
import Image from "next/image";
const Hero = () => {
  return (
    <div id="#" className="pb-[4rem]">
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
        <h1 className="font-semibold text-3xl text-white">A Bit About Me</h1>
        <p>
          From &quot;Hello World!&quot; to complex projects: My journey in a
          nutshell.{" "}
        </p>
        <div className="flex flex-col gap-5 pt-8">
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            mollitia ducimus autem, obcaecati quis tempora, nihil ad consectetur
            rem ipsum officia commodi excepturi placeat praesentium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            mollitia ducimus autem, obcaecati quis tempora, nihil ad consectetur
            rem ipsum officia commodi excepturi placeat praesentium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            mollitia ducimus autem, obcaecati quis tempora, nihil ad consectetur
            rem ipsum officia commodi excepturi placeat praesentium?
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Vitae
            mollitia ducimus autem, obcaecati quis tempora, nihil ad consectetur
            rem ipsum officia commodi excepturi placeat praesentium?
          </p>
        </div>
      </div>
    </div>
  );
};

export default Hero;

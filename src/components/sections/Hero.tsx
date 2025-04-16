import React from "react";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { images } from "../../../public";
import Link from "next/link";

const Hero = () => {
  return (
    <section
      id="home"
      className="relative w-full min-h-[85vh] pt-2 flex flex-col justify-center"
    >
      {/* Background image */}

      <Image
        src={images.herobg}
        alt="Background Wave"
        fill
        style={{
          objectFit: "cover",
          objectPosition: "center",
        }}
        quality={100}
        priority
      />

      <div className="w-full max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between px-6 sm:px-8 md:px-12 xl:px-20">
        {/* Text Content */}
        <div className="text-center lg:text-left max-w-xl z-10">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight text-black drop-shadow-lg mb-4">
            Modern Websites <br className="hidden lg:block" />
            for <span className="text-black">Growing Businesses</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            at RESTWeb Dev we build fast, mobile-friendly websites that make
            your brand stand out online.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 pb-8 px-10 justify-center lg:justify-start">
            <Link href="#contact">
              <Button className="bg-purple text-white px-4 shadow-xs cursor-pointer hover:bg-purple/80">
                Get a Free Quote
              </Button>
            </Link>
            <Link href="#work">
              <Button variant="secondary" className="cursor-pointer px-4">
                View Work
              </Button>
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="z-10 pb-2">
          <Image
            src={images.hero}
            width={200}
            height={500}
            alt="Phone showing modern website"
            priority
          />
        </div>
      </div>
    </section>
  );
};

export default Hero;

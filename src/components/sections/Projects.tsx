"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import { FaCheckSquare } from "react-icons/fa";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
  type CarouselApi,
} from "@/components/ui/carousel";
import Link from "next/link";

const Projects = () => {
  const [api, setApi] = useState<CarouselApi>();
  const [selectedIndex, setSelectedIndex] = useState(0);

  const slides = [
    { src: "/images/project1.jpg", href: "https://joellgarcia.com" },
    { src: "/images/project2.jpg", href: "https://cubabakery.com" },
    {
      src: "/images/project3.jpg",
      href: "https://lee-construction.vercel.app/",
    },
  ];

  useEffect(() => {
    if (!api) return;

    setSelectedIndex(api.selectedScrollSnap());

    api.on("select", () => {
      setSelectedIndex(api.selectedScrollSnap());
    });
  }, [api]);

  return (
    <section id="work" className="py-16 px-4 scroll-mt-24 bg-white">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center justify-between gap-12">
        {/* Left: Carousel */}
        <div className="w-full lg:w-1/2 text-center">
          <h1 className="text-3xl font-bold mb-8 drop-shadow-lg lg:text-left">
            Recent Projects
          </h1>

          <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden border border-gray-200 w-full max-w-md mx-auto">
            {/* Mac-style top bar */}
            <div className="bg-gray-300 flex items-center gap-2 px-3 py-2 rounded-t-lg">
              <span className="w-3 h-3 bg-red-500 rounded-full" />
              <span className="w-3 h-3 bg-yellow-500 rounded-full" />
              <span className="w-3 h-3 bg-green-500 rounded-full" />
            </div>

            {/* Carousel */}
            <div className="w-full">
              <Carousel setApi={setApi}>
                <CarouselContent>
                  {slides.map((slide, i) => (
                    <CarouselItem key={i}>
                      <div className="relative h-72 w-full overflow-hidden">
                        <Link
                          href={slide.href}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          <Image
                            src={slide.src}
                            alt={`Project ${i + 1}`}
                            fill
                            className="object-cover"
                          />
                        </Link>
                      </div>
                    </CarouselItem>
                  ))}
                </CarouselContent>

                <CarouselPrevious className="text-darkblue" />
                <CarouselNext className="text-darkblue" />
              </Carousel>

              {/* Dot Pagination */}
              <div className="flex justify-center gap-2 mt-2 pb-2">
                {slides.map((_, i) => (
                  <button
                    key={i}
                    onClick={() => api?.scrollTo(i)}
                    className={`h-2.5 w-2.5 rounded-full transition-all duration-200 ${
                      i === selectedIndex
                        ? "bg-blue-600 scale-110"
                        : "bg-gray-400 opacity-50"
                    }`}
                    aria-label={`Go to slide ${i + 1}`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Right: Features */}
        <div className="w-full lg:w-1/2">
          <h2 className="text-3xl font-bold drop-shadow-lg mb-4">
            We Can Do More
          </h2>
          <p className="text-gray-600 mb-6">
            We’re not just about front-end development. With expertise in
            back-end services and database management, we can help build
            complete, robust solutions tailored to your needs
          </p>

          <ul className="space-y-4">
            <li className="flex items-start gap-3">
              <FaCheckSquare className="text-orange text-2xl" />
              <span className="font-semibold">RESTful API Integration</span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckSquare className="text-orange text-2xl" />
              <span className="font-semibold">
                Authentication and User Management
              </span>
            </li>
            <li className="flex items-start gap-3">
              <FaCheckSquare className="text-orange text-2xl" />
              <span className="font-semibold">
                Database Design and Optimization
              </span>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default Projects;

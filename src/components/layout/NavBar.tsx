"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MdOutlineClose } from "react-icons/md";
import { AnimatePresence, motion } from "framer-motion";
import { icons } from "../../../public";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`w-full sticky top-0 z-50 px-4 transition-all duration-300 ${
        isScrolled
          ? "bg-white/70 backdrop-blur-sm backdrop-saturate-150"
          : "bg-white"
      }`}
    >
      <div className="max-w-content mx-auto flex items-center justify-between py-4">
        {/* Logo */}
        <div className="flex items-center gap-2">
          <Link href="/">
            <Image
              src={icons.logo2}
              alt="RESTweb Dev Logo"
              width={120}
              height={100}
            />
          </Link>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex items-center gap-30 px-20 text-black text-lg font-semibold">
          {["work", "about", "contact"].map((section) => (
            <li key={section}>
              <Link
                href={`#${section}`}
                className="relative text-black font-semibold after:absolute after:left-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-purple after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
              >
                {section.charAt(0).toUpperCase() + section.slice(1)}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Toggle */}
        <Button
          variant="ghost"
          className="md:hidden font-semibold text-blue"
          onClick={() => setShowMenu(!showMenu)}
        >
          {showMenu ? <MdOutlineClose /> : <RxHamburgerMenu />}
        </Button>

        {/* Mobile Menu */}
        <AnimatePresence>
          {showMenu && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.3 }}
              className="absolute top-full left-0 w-full bg-white/60 backdrop-blur-md shadow-sm flex flex-col items-center py-4 md:hidden"
            >
              <ul className="flex flex-col items-center gap-4 text-md text-black font-medium">
                {["work", "about", "contact"].map((section) => (
                  <li key={section} onClick={() => setShowMenu(false)}>
                    <Link
                      href={`#${section}`}
                      className="relative text-black font-semibold after:absolute after:left-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-purple after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
                    >
                      {section.charAt(0).toUpperCase() + section.slice(1)}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;

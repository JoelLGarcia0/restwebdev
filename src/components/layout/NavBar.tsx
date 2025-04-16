"use client";

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { MdOutlineClose } from "react-icons/md";
import { usePathname, useRouter } from "next/navigation";
import { AnimatePresence, motion } from "framer-motion";
import { icons } from "../../../public";
import { RxHamburgerMenu } from "react-icons/rx";

const NavBar = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const router = useRouter();
  const pathname = usePathname();

  const handleContactClick = (e: React.MouseEvent) => {
    e.preventDefault();
    const contactSection = document.getElementById("contact");

    if (pathname === "/") {
      if (contactSection) {
        const offset = 120;
        const position =
          contactSection.getBoundingClientRect().top + window.scrollY;
        window.scrollTo({ top: position - offset, behavior: "smooth" });
      }
    } else {
      router.push("/#contact");
      setTimeout(() => {
        const contactSection = document.getElementById("contact");
        if (contactSection) {
          const offset = 105;
          const position =
            contactSection.getBoundingClientRect().top + window.scrollY;
          window.scrollTo({ top: position - offset, behavior: "smooth" });
        }
      }, 500);
    }
  };

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
        isScrolled ? "bg-white/60 backdrop-blur-md shadow-sm" : "bg-white"
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
          <li>
            <Link
              href="#work"
              className="relative text-black font-semibold after:absolute after:left-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-purple after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              Work
            </Link>
          </li>
          <li>
            <Link
              href="#about"
              className="relative text-black font-semibold after:absolute after:left-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-purple after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              About
            </Link>
          </li>
          <li>
            <Link
              href="#contact"
              className="relative text-black font-semibold after:absolute after:left-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-purple after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
            >
              Contact
            </Link>
          </li>
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
                <li onClick={() => setShowMenu(false)}>
                  <Link
                    href="#work"
                    className="relative text-black font-semibold after:absolute after:left-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-purple after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
                  >
                    Work
                  </Link>
                </li>
                <li onClick={() => setShowMenu(false)}>
                  <Link
                    href="#about"
                    className="relative text-black font-semibold after:absolute after:left-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-purple after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
                  >
                    About
                  </Link>
                </li>
                <li onClick={() => setShowMenu(false)}>
                  <Link
                    href="#contact"
                    className="relative text-black font-semibold after:absolute after:left-1/2 after:bottom-[-4px] after:w-0 after:h-[2px] after:bg-purple after:transition-all after:duration-300 hover:after:left-0 hover:after:w-full"
                  >
                    Contact
                  </Link>
                </li>
              </ul>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default NavBar;

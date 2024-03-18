"use client";
import Image from "next/image";
import React, { useCallback, useState } from "react";
import logo from "@/Assets/shared/logo.svg";
import openIcon from "@/Assets/shared/icon-hamburger.svg";
import closeIcon from "@/Assets/shared/icon-close.svg";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Barlow_Condensed } from "next/font/google";
import { motion } from "framer-motion";
import { useDisclosure } from "@mantine/hooks";

const pages = [
  {
    name: "Home",
    href: "/",
  },
  {
    name: "Destination",
    href: "/destination",
  },
  {
    name: "Crew",
    href: "/crew",
  },
  {
    name: "Technology",
    href: "/technology",
  },
];

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  weight: "400",
  variable: "--barlowcondensed-font",
});

function Navbar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const path = usePathname();

  const isActive = useCallback((href: string) => path === href, [path]);

  return (
    <header
      className={`${barlowCondensed.variable} relative z-30 flex justify-between items-center px-6 md:px-0 md:pl-10 lg:pt-10`}
    >
      <Image
        src={logo}
        alt="Logo Image"
        className="my-6 w-10 h-10 md:w12 md:h12" //amount of units for medium sized screens, equivalent to 48px my=margin-y
      />

      <button
        onClick={() => {
          setIsOpen((state) => !state);
        }}
        className="relative z-20 w-6 h-5 md:hidden"
      >
        <Image
          src={openIcon}
          alt="Menu Open"
          className={`transition ${
            isOpen && "opacity-0"
          } absolute top-1/2 right-0 translate-y-1/2 w-full h-full`}
        />

        <Image
          src={closeIcon}
          alt="Menu Closed"
          className={`transition ${
            isOpen && "opacity-100"
          } opacity-0 absolute top-1/2 right-0 translate-y-1/2 w-full h-full`}
        />
      </button>
      <div className="bar grow hidden lg:block h-0.5 bg-white/70 translate-x-9 relative z-20"></div>
      <ul
        className={` list-none bg-[#97979729] transition rounded-l-md backdrop-blur-lg fixed top-0 right-0 h-screen w-64 z-0 pt-28 pl-8 md:relative md:h-24 md:w-fit md:px-12 md:pt-0 md:translate-x-0 md:flex md:justify-center md:items-center md:gap-x-12 lg:min-w-[50vw] ${
          !isOpen
            ? "translate-x-80"
            : isOpen
            ? "-translate-x-0"
            : "-translate-x-0"
        }`}
      >
        {pages.map((item, index) => {
          return (
            <Link
              href={item.href}
              key={index}
              className="nav-text font-primary uppercase relative text-white tracking-[2.7px] font-extralight md:h-full"
            >
              <li
                className={`flex items-center mb-12 w-full transition border-r-2 border-transparent gap-x-3 [&:not(.active)]:hover:border-white/50
                [&.active]:hover:border-white md:mb-0 md:w-fit md:border-r-0 md:border-b-4 md:h-full ${
                  isActive(item.href) && "active"
                }`}
              >
                <span className="block font-bold min-w-[20px]">0{index}</span>
                <span className="block">{item.name}</span>
                {isActive(item.href) && (
                  <motion.span
                    layoutId="underline"
                    className="absolute bottom-0 right-0 h-full w-1 md:w-full md:h-1 bg-white"
                  />
                )}
              </li>
            </Link>
          );
        })}
      </ul>
    </header>
  );
}

export default Navbar;

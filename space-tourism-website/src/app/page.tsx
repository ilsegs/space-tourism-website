"use client";

import Image from "next/image";
import MotionDiv from "@/Components/MotionDiv";
import Background from "@/Components/Background";
import mobile from "@/Assets/home/background-home-mobile.jpg";
import tablet from "@/Assets/home/background-home-tablet.jpg";
import desktop from "@/Assets/home/background-home-desktop.jpg";
import { motion } from "framer-motion";
import { SLIDE_LEFT, SCALE_UP } from "./lib/data";

export default function Home() {
  return (
    <MotionDiv>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />

      <main className="relative z-10 min-h-[80vh] flex flex-col justify-evenly items-center lg:flex-row lg:items-end lg:justify-between lg:p-32 ">
        <motion.div
          variants={SLIDE_LEFT}
          className="font-primary text-secondary text-center px-4 md:max-w-lig md:mx-auto lg:mx-0 lg:text-left"
        >
          <span className="nav-text font-primary text-lg tracking-[2.7px] md:tracking-[4.75px] uppercase lg:-translate-x-8 lg:text-3xl">
            SO, YOU WANT TO TRAVEL TO
          </span>
          <span>
            <h1 className="text-white my-6 uppercase font-secondary">SPACE</h1>
            <p className="text-secondary font-third leading-8 lg:text-[18px]">
              {`Let’s face it; if you want to go to space, you might as well
              genuinely go to outer space and not hover kind of on the edge of
              it. Well sit back, and relax because we’ll give you a truly out of
              this world experience!`}
            </p>
          </span>
        </motion.div>
        <motion.div
          variants={SCALE_UP}
          className=" bg-white rounded-full flex flex-ro items-center justify-center font-primary tracking-[1.25px] uppercase relative group w-48 h-48 md:w-60 md:h-60 lg:w-72 lg:h-72 right-0 aspect-square"
        >
          <div className="absolute inset-0 bg-white/10 rounded-full scale-50 transition ease-in-out duration-[700ms!important] cursor-pointer group-hover:scale-150"></div>
          <span className="relative hover:cursor-pointer z-10 text-primary font-secondary text-lg md:text-4xl">
            EXPLORE
          </span>
        </motion.div>

        <div className=" fixed bottom-0 right-0 w-full bg-transparent text-center py-2 tracking-wider">
          <p className="text-xs text-secondary font-third">
            Developed by{" "}
            <a
              href="https://ilse.io"
              target="_blank"
              className="text-white underline uppercase"
            >
              ilse.io
            </a>{" "}
            <span className=" font-third text-secondary/50">
              {" "}
              - Project by Frontend Mentor
            </span>
          </p>
        </div>
      </main>
    </MotionDiv>
  );
}

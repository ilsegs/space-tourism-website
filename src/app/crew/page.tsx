"use client";

import React from "react";
import Background from "@/Components/Background";
import MotionDiv from "@/Components/MotionDiv";
import PageTitle from "@/Components/PageTitle";
import Image from "next/image";
import { useState, useMemo } from "react";
import { usePrevious } from "@mantine/hooks";
import { SLIDE_LEFT, SLIDE_RIGHT } from "../lib/data";
import { AnimatePresence, motion } from "framer-motion";

//backgrounds
import mobile from "@/Assets/crew/background-crew-mobile.jpg";
import tablet from "@/Assets/crew/background-crew-tablet.jpg";
import desktop from "@/Assets/crew/background-crew-desktop.jpg";

//images
import douglas from "@/Assets/crew/image-douglas-hurley.png";
import mark from "@/Assets/crew/image-mark-shuttleworth.png";
import victor from "@/Assets/crew/image-victor-glover.png";
import anousheh from "@/Assets/crew/image-anousheh-ansari.png";

//Data
const crew = [
  {
    title: "Commander",
    name: "Douglas Hurley",
    image: douglas,
    description:
      "Douglas Gerald Hurley is an American engineer, former Marine Corps pilot and former NASA astronaut. He launched into space for the third time as commander of Crew Dragon Demo-2.",
  },
  {
    title: "Mission Specialist",
    name: "Mark Shuttleworth",
    image: mark,
    description:
      "Mark Richard Shuttleworth is the founder and CEO of Canonical, the company behind the Linux-based Ubuntu operating system. Shuttleworth became the first South African to travel to space as a space tourist.",
  },
  {
    title: "Pilot",
    name: "Victor Glover",
    image: victor,
    description:
      "Pilot on the first operational flight of the SpaceX Crew Dragon to the International Space Station. Glover is a commander in the U.S. Navy where he pilots an F/A-18.He was a crew member of Expedition 64, and served as a station systems flight engineer.",
  },
  {
    title: "Flight Engineer",
    name: "Anousheh Ansari",
    image: anousheh,
    description:
      "Anousheh Ansari is an Iranian American engineer and co-founder of Prodea Systems. Ansari was the fourth self-funded space tourist, the first self-funded woman to fly to the ISS, and the first Iranian in space.",
  },
];

function CrewPage() {
  const [actual, setActual] = useState(0);
  const previous = usePrevious(actual);
  const member = useMemo(() => crew[actual], [actual]);
  const variant = useMemo(() => {
    if (previous === undefined) return SLIDE_RIGHT;
    if (actual > previous) return SLIDE_LEFT;
    return SLIDE_RIGHT;
  }, [actual, previous]);

  return (
    <MotionDiv>
      <Background
        mobile={mobile.src}
        tablet={tablet.src}
        desktop={desktop.src}
      />

      <main className=" relative z-10 flex flex-col-reverse p-6 md:px-24 lg:pt-12 lg:min-h[80vh] lg:grid lg:grid-cols-2 items-center">
        <div className="flex flex-col-reverse relative z-10 lg:flex-col lg:justify-between">
          <div className=" w-fit mx-auto mb-8 md:mx-0 md:-ml-10 hidden lg:block">
            <PageTitle number={2} title="Meet Your Crew" />
          </div>

          <div className="text-secondary text-center lg:text-left w-[327px] md:w-[458px]">
            <h4 className="uppercase mb-4 text-[16px] md:text-[24px] lg:text-[32px]">
              {""}
              {member.title}
              {""}
            </h4>
            <h3 className="uppercase text-[24px] md:text-[40px] lg:text-[56px] text-white mb-7">
              {""}
              {member.name}
              {""}
            </h3>
            <p className=" font-third leading-8 space-y-px lg:text-[18px]">
              {""}
              {member.description}
            </p>
          </div>
          <div className=" flex gap-x-6 my-8 justify-center lg:justify-start">
            {crew.map(({ name }, index) => {
              return (
                <div
                  key={index}
                  className={`w-3 rounded-full aspect-square transition cursor-pointer opacity-20 bg-white ${
                    member.name == name && "active"
                  }
                  [&.active]:opacity-100 [&:not(.active)]:hover:opacity-50
                  
                  `}
                  onClick={() => setActual(index)}
                />
              );
            })}
          </div>
        </div>
        <motion.div className=" border-b border-white/50 w-full md:fixed md:bottom-0 md:right-0 md:w-screen md:h-[532px] lg:h-[712px]">
          <AnimatePresence>
            <motion.div
              className="block mx-auto w-auto h-[222px] md:h-full lg:mx-0 lg:ml-auto lg:mr-20"
              key={member.name}
              variants={variant}
            >
              <Image
                src={member.image}
                alt={member.name}
                className="block mx-auto w-auto h-[222px] md:h-full lg:mx-0 lg:ml-auto lg:mr-20 "
              />
            </motion.div>
          </AnimatePresence>
        </motion.div>
        <div className="w-fit mx-auto mb-8 md:mx-0 md:-ml-10 lg:hidden">
          <PageTitle number={2} title="Meet Your Crew" />
        </div>
      </main>
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
    </MotionDiv>
  );
}

export default CrewPage;

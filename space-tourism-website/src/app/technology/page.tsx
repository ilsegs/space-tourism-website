"use client";
import React from "react";
import Image from "next/image";
import Background from "@/Components/Background";
import MotionDiv from "@/Components/MotionDiv";
import PageTitle from "@/Components/PageTitle";
import { useState, useMemo } from "react";
import { usePrevious } from "@mantine/hooks";
import { SLIDE_LEFT, SLIDE_RIGHT, FADE } from "../lib/data";
import { AnimatePresence, motion } from "framer-motion";

//backgrounds
import mobile from "@/Assets/technology/background-technology-mobile.jpg";
import tablet from "@/Assets/technology/background-technology-tablet.jpg";
import desktop from "@/Assets/technology/background-technology-desktop.jpg";

//images
import launchvehicle_ls from "@/Assets/technology/image-launch-vehicle-landscape.jpg";
import launchvehicle_pt from "@/Assets/technology/image-launch-vehicle-portrait.jpg";
import spacecapsule_ls from "@/Assets/technology/image-space-capsule-landscape.jpg";
import spacecapsule_pt from "@/Assets/technology/image-space-capsule-portrait.jpg";
import spaceport_ls from "@/Assets/technology/image-spaceport-landscape.jpg";
import spaceport_pt from "@/Assets/technology/image-spaceport-portrait.jpg";

//data
const technology = [
  {
    title: "Launch Vehicle",
    image_ls: launchvehicle_ls,
    image_pt: launchvehicle_pt,
    description:
      "A launch vehicle or carrier rocket is a rocket-propelled vehicle used to carry a payload from Earth's surface to space, usually to Earth orbit or beyond. Our WEB-X carrier rocket is the most powerful in operation. Standing 150 metres tall, it's quite an awe-inspiring sight on the launch pad!",
  },
  {
    title: "Spaceport",
    image_ls: spaceport_ls,
    image_pt: spaceport_pt,
    description:
      "A spaceport or cosmodrome is a site for launching (or receiving) spacecraft, by analogy to the seaport for ships or airport for aircraft. Based in the famous Cape Canaveral, our spaceport is ideally situated to take advantage of the Earth’s rotation for launch.",
  },
  {
    title: "Space capsule",
    image_ls: spacecapsule_ls,
    image_pt: spacecapsule_pt,
    description:
      "A space capsule is an often-crewed spacecraft that uses a blunt-body reentry capsule to reenter the Earth's atmosphere without wings. Our capsule is where you'll spend your time during the flight. It includes a space gym, cinema, and plenty of other activities to keep you entertained.",
  },
];

function TechnologyPage() {
  const [actual, setActual] = useState(0);
  const previous = usePrevious(actual);
  const tech = useMemo(() => technology[actual], [actual]);
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
      <main className="relative z-10 w-full mt-10 lg:pl-44">
        <div className=" w-fit mx-auto mb-8 md:mx-2">
          <PageTitle number={3} title="Space Launch 101" />
        </div>
        <div className=" flex flex-col lg:flex-row-reverse">
          <div className="w-full lg:w-[35%] lg:min-h-[35vh]">
            <motion.picture key={tech.title} variants={FADE} className="block">
              <source media="(min-width:1024px)" srcSet={tech.image_pt.src} />
              <Image
                src={tech.image_ls}
                alt={tech.title}
                className="object-cover w-full h-auto"
              />
            </motion.picture>
          </div>
          <div className="flex flex-col items-center mt-8 md:mt-14 lg:flex-row lg:grow lg:mt-0">
            <div className="w-fit flex gap-4 mb-6 md:mb-11 lg:flex-col lg:mb-0 lg:gap-8">
              {technology.map(({ title }, index) => {
                return (
                  <div
                    key={title + index}
                    onClick={() => setActual(index)}
                    className={`w-10 md:w-14 aspect-square flex items-center justify-center text-white border rounded-full border-white/20 transition cursor-pointer font-secondary ${
                      tech.title === title && "active"
                    } [&.active]:border-transparent [&.active]:bg-white [&.active]:text-primary [&:not(.active)]:hover:border-white`}
                  >
                    {index + 1}
                  </div>
                );
              })}
            </div>
            <div className="  text-secondary text-center px-6 md:max-w-lg md:mx-auto lg:text-left lg:max-w-xl">
              <span className=" font-primary block nav text uppercase mb-2 text-[14px] md:text-[16px] tracking-[2.7px]">
                THE TERMINOLOGY ...
              </span>
              <h3 className="font-secondary text-white uppercase text-[24px] md:text-[40px] lg:text-[56px] mb-4">
                {""}
                {tech.title}
                {""}
              </h3>
              <p className="font-third text-secondary leading-relaxed lg:leading-loose text-[16px] lg:text-[18px]">
                {""}
                {tech.description}
                {""}
              </p>
            </div>
          </div>
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

export default TechnologyPage;

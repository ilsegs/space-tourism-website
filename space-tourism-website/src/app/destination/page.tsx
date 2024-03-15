"use client";

import React from "react";
import Background from "@/Components/Background";
import PageTitle from "@/Components/PageTitle";
import Image from "next/image";
import MotionDiv from "@/Components/MotionDiv";
import { motion, AnimatePresence } from "framer-motion";
import { SLIDE_LEFT, SLIDE_RIGHT } from "../lib/data";
import { useState, useMemo } from "react";
import { usePrevious } from "@mantine/hooks";

//backgrounds
import mobile from "@/Assets/destination/background-destination-mobile.jpg";
import tablet from "@/Assets/destination/background-destination-tablet.jpg";
import desktop from "@/Assets/destination/background-destination-desktop.jpg";

//images
import moon from "@/Assets/destination/image-moon.png";
import mars from "@/Assets/destination/image-mars.png";
import europa from "@/Assets/destination/image-europa.png";
import titan from "@/Assets/destination/image-titan.png";

//data
const planets = [
  {
    name: "Moon",
    image: moon,
    distance: "384,400 KM",
    time: "3 days",
    description:
      "See our planet as you’ve never seen it before. A perfect relaxing trip away to help regain perspective and come back refreshed. While you’re there, take in some history by visiting the Luna 2 and Apollo 11 landing sites.",
  },

  {
    name: "Mars",
    image: mars,
    distance: "225 mil. km",
    time: "9 months",
    description:
      "Don’t forget to pack your hiking boots. You’ll need them to tackle Olympus Mons, the tallest planetary mountain in our solar system. It’s two and a half times the size of Everest!",
  },

  {
    name: "Europa",
    image: europa,
    distance: "628 mil. km",
    time: "3 years",
    description:
      "The smallest of the four Galilean moons orbiting Jupiter, Europa is a winter lover’s dream. With an icy surface, it’s perfect for a bit of ice skating, curling, hockey, or simple relaxation in your snug wintery cabin.",
  },

  {
    name: "Titan",
    image: titan,
    distance: "1.6 bil. km",
    time: "9 years",
    description:
      "The only moon known to have a dense atmosphere other than Earth, Titan is a home away from home (just a few hundred degrees colder!). As a bonus, you get striking views of the Rings of Saturn.",
  },
];

function DestinationPage() {
  const [actual, setActual] = useState(0);
  const previous = usePrevious(actual);
  const planet = useMemo(() => planets[actual], [actual]);
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
      <main className=" relative z-10 p-6 md:px-24 md:pb-0">
        <PageTitle number={1} title="Pick Your Destination" />

        <motion.div
          variants={SLIDE_LEFT}
          className="w-fit mx.auto mb-8 md:mx-0 md:-ml-10"
        ></motion.div>
        <div className="grid gap-40 lg:grid-cols-2 lg:pt-12">
          <AnimatePresence>
            <motion.div
              key={planet.name}
              variants={variant}
              className="flex justify-center my-6"
            >
              <Image
                className="w-60 md:w-80 lg:w-[440px] aspect-square"
                src={planet.image}
                alt={`planet ${planet.name}`}
              />
            </motion.div>
          </AnimatePresence>
          <div>
            <div className=" uppercase flex items-center justify-center text-secondary font-primary tracking-[2.36px] md:tracking-[2.7px] space-x-6 nav-text md:text-[16px] lg:justify-start">
              {planets.map(({ name }, index) => (
                <div
                  key={name}
                  onClick={() => setActual(index)}
                  className={`relative py-2 border-b-2 border-transparent cursor-pointer transition [&:not(.active)]:hover:border-current [&.active]:text-white ${
                    !index && "active"
                  }`}
                >
                  {name}
                  {planet.name === name && (
                    <motion.span
                      layoutId="planetUnderLine"
                      className="absolute bottom-0 left-0 w-full h-1 bg-white"
                    />
                  )}
                </div>
              ))}
            </div>
            <div className="text-secondary text-center lg:text-left">
              <h3 className="mt-5 uppercase text-white lg:text-[100px]">
                {planets[actual].name}
              </h3>
              <p className="leading-relaxed lg:text-[18px]">
                {""}
                {planets[actual].description}
              </p>
              <hr className="my-8 border-secondary/25"></hr>
              <div className="grid md:grid-cols-2 gap-8 ">
                <div className="w-fit mx-auto uppercase lg:mx-0">
                  <span className="block subheading-2 tracking-widest text-white">
                    Avg. distance
                  </span>
                  <span className="block subheading-1 text-white">
                    {""}
                    {planets[actual].distance}
                    {""}
                  </span>
                </div>
                <div className="w-fit mx-auto uppercase lg:mx-0">
                  <span className="block subheading-2 text-white">
                    Est. travel time
                  </span>
                  <span className="block subheading-1 text-white">
                    {""}
                    {planets[actual].time}
                    {""}
                  </span>
                </div>
              </div>
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

export default DestinationPage;

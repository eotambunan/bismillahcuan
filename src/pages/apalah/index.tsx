"use client";
import React, { RefObject, useEffect, useRef, useState } from "react";
import { motion, useScroll } from "framer-motion";
import WidthWrapper from "@/components/WidthWrapper";
import About from "@/components/About";
import Skills from "@/components/Skills";
import Experiences from "@/components/Experiences";
import MainImage from "@/components/MainImage";
import Image from "next/image";
import { fadingMotion } from "@/lib/motions";
import { cn } from "@/lib/utils";
import { playfair, qwitcher } from "..";

const COVER_PHOTO = "/photo/cover.jpeg"
const NAME_INVITATION = "ALBANTANI & JAMANANI"
const TIME_INVITATION = "Kiamat, 99 Desember 2999"

const IMAGES = [
  {
    photo: "/photo/1.jpeg"
  },
  {
    photo: "/photo/2.jpeg"
  },
  {
    photo: "/photo/3.jpeg"
  },
  {
    photo: "/photo/4.jpeg"
  },
  {
    photo: "/photo/5.jpeg"
  },
  {
    photo: "/photo/cover.jpeg"
  },
]


const AboutPage = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [currentSlide, setCurrentSlide] = useState<number>(0);
  const [fade, setFade] = useState<boolean>(true);

  const { scrollYProgress } = useScroll({
    container: containerRef,
  });

  console.log({ scrollYProgress });

  useEffect(() => {
    const interval = setInterval(() => {
      setFade(false);
      setTimeout(() => {
        setCurrentSlide((prev) => (prev === IMAGES.length - 1 ? 0 : prev + 1));
        setFade(true);
      }, 500);
    }, 4000);

    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <motion.div
      initial={{ y: "-200vh" }}
      animate={{ y: "0" }}
      transition={{ duration: 1.5 }}
      className="h-[calc(100vh)] bg-[#D2E0FB]"
    >
      {/* CONTAINER */}
      <div ref={containerRef} className="h-full overflow-y-scroll lg:flex">
        <WidthWrapper className="flex px-0 sm:px-0 sm:mx-0 md:px-0 md:mx-0 flex-col gap-24 md:gap-32 lg:gap-48 xl:gap-64 lg:w-2/3 xl:w-1/2">
          <motion.div
            variants={fadingMotion}
            initial="initial"
            whileInView={"whileInView"}
            className={cn("flex min-h-screen h-full relative",
              fade
                ? "opacity-100 transform translate-x-0 transition-all duration-3000 ease-in-out overflow-x-hidden"
                : "opacity-0 transform translate-x-full transition-all duration-2000 ease-in-out overflow-x-hidden")}
          >
            <div className="bg-gradient-to-b from-red-700  w-full h-1/3">
              <Image
                src={IMAGES[currentSlide].photo}
                width={720}
                height={1280}
                className="w-full min-h-screen h-full object-cover rounded shadow-lg"
                alt="Photo 1"
              />
            </div>
            <div className="absolute inset-0 flex flex-col justify-end items-center text-center">
              <div className="bg-gradient-to-t from-black text-white w-full h-1/3">
                <div className="p-4">
                  <h1 className={`${qwitcher.className} text-lg w-full`}>
                    The Wedding of
                  </h1>
                  <h1 className={`${playfair.className} text-3xl w-full`}>
                    {NAME_INVITATION}
                  </h1>
                  <h1 className={`${playfair.className} text-sm w-full `}>
                    {TIME_INVITATION}
                  </h1>
                </div>
              </div>
            </div>
          </motion.div>
          <About />
          <Skills />
          <Experiences />
        </WidthWrapper>
        <div className="hidden lg:block w-1/3 xl:w-1/2 sticky top-0">
          <MainImage coverPhoto={COVER_PHOTO} />
        </div>
      </div>
    </motion.div>
  );
};

export default AboutPage;
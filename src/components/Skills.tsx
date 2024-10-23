"use client";
import { SKILLS } from "@/lib/constants";
import {
  fadingChildrenMotion,
  fadingStaggerMotion,
  fromLeftMotion,
} from "@/lib/motions";
import { alegreya, renderer } from "@/pages";
import { motion } from "framer-motion";
import Countdown from "react-countdown";


const Skills = () => {
  return (
    <div className="skill w-screen flex flex-col justify-center gap-12 bg-[#FEF9D9] px-8 py-28">
      <motion.h2
        variants={fromLeftMotion}
        initial="initial"
        whileInView="whileInView"
        className={`${alegreya.className} font-bold text-2xl justify-center`}
      >
        Menuju hari bahagia
      </motion.h2>
      <motion.div
        variants={fromLeftMotion}
        initial="initial"
        whileInView="whileInView"
        className="flex flex-row w-full"
      >
        <Countdown
          date={Date.now() + 10000000} // 10 detik dari sekarang
          renderer={renderer}
        />
      </motion.div>
    </div>
  );
};

export default Skills;
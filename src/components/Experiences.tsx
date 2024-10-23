import {
  fadingChildrenMotion,
  fadingExpStaggerMotion,
  fromLeftMotion,
} from "@/lib/motions";
import { motion } from "framer-motion";
import ExperienceList from "./ExperienceList";
import { EXPERIENCES } from "@/lib/constants";
import { alegreya } from "@/pages";

const Experiences = () => {
  return (
    <div className="bio flex flex-col justify-center gap-12 pb-48 px-8">
      <motion.h2
        variants={fromLeftMotion}
        initial="initial"
        whileInView="whileInView"
        className={`font-bold text-2xl justify-center ${alegreya.className}`}
      >
        Our Love Story
      </motion.h2>
      <motion.div
        variants={fadingExpStaggerMotion}
        initial="initial"
        whileInView="whileInView"
        className="itemlists"
      >
        <ExperienceList jobs={EXPERIENCES} />
      </motion.div>
    </div>
  );
};

export default Experiences;
"use client";
import Link from "next/link";
import Image from "next/image";
import { motion, useTransform } from "framer-motion";
import { playfair, qwitcher, roboto, sail } from "@/pages";

const NAME_INVITATION = "ALBANTANI & JAMANANI"
const TIME_INVITATION = "Kiamat, 99 Desember 2999"


const MainImage = ({ coverPhoto }: any) => {

  return (
    <div className="w-full h-full relative ">
      <Image
        src={coverPhoto}
        alt="Cover Photo"
        fill
        className="object-cover" />
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
          <div className="p-5">
            <h1 className={`${qwitcher.className} text-lg w-full `}>
              Kepada Yth.
            </h1>
            <h1 className={`${playfair.className} text-lg w-full `}>
              Ahmad Sumbul
            </h1>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainImage;
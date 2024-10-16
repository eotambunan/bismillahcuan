import { Button } from "@mui/material";
import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Qwitcher_Grypen, Sail, Roboto } from "next/font/google";
import LockOpenIcon from "@mui/icons-material/LockOpen";
import { Howl } from "howler";
import { IParallax, Parallax, ParallaxLayer } from "@react-spring/parallax";
import ExpandLessIcon from "@mui/icons-material/ExpandLess";
import MusicNoteIcon from "@mui/icons-material/MusicNote";
import MusicOffIcon from "@mui/icons-material/MusicOff";
import BankCard from "@/components/BankCard";
import Drag from "@/components/scrollAnimation/Drag";
import Image from "next/image";
import Countdown from "react-countdown";
import Fade from "@/components/scrollAnimation/Fade";

const qwitcher = Qwitcher_Grypen({
  weight: "400",
  subsets: ["latin"],
});
const sail = Sail({
  weight: "400",
  subsets: ["latin"],
});
const roboto = Roboto({
  weight: "400",
  subsets: ["latin"],
});

export default function Home() {
  const [isOpened, setIsOpened] = useState<boolean>(false);
  const [sound, setSound] = useState<Howl | null>(null);
  const [isMusicPlay, setIsMusicPlay] = useState<boolean>(true);
  const parallaxRef = useRef<IParallax | null>(null);

  const playMusic = () => {
    if (sound) {
      sound.stop();
    }

    const audioUrl = "/tezzz.mp3";

    const newSound = new Howl({
      src: [audioUrl],
      autoplay: true,
      loop: true,
      volume: 0.5,
      onend: function () {
        console.log("Finished!");
      },
    });

    newSound.play();
    setSound(newSound); // Simpan instance sound
  };

  const scrollToTop = () => {
    if (parallaxRef.current) {
      parallaxRef.current.scrollTo(0); // Scroll to the top of the first layer
    }
  };

  const renderer = ({ days, hours, minutes, seconds, completed }: any) => {
    if (completed) {
      // Render setelah countdown selesai
      return <span>Countdown selesai!</span>;
    } else {
      // Render countdown
      return (
        <div className="flex justify-evenly">
          <div>
            <h2 className="text-8xl">{days}</h2>
            <p className="text-4xl">Hari</p>
          </div>
          <div>
            <h2 className="text-8xl">{hours}</h2>
            <p className="text-4xl">Jam</p>
          </div>
          <div>
            <h2 className="text-8xl">{minutes}</h2>
            <p className="text-4xl">Menit</p>
          </div>
          <div>
            <h2 className="text-8xl">{seconds}</h2>
            <p className="text-4xl">Detik</p>
          </div>
        </div>
      );
    }
  };

  return (
    <>
      <AnimatePresence>
        {/* Screen Pertama */}
        {!isOpened ? (
          <motion.div
            key={"landing"}
            className="w-full h-screen bg-slate-300 flex justify-center items-center text-white"
            style={{
              backgroundImage:
                "url(https://images.unsplash.com/photo-1728241189683-b6ab36c9beb3?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxmZWF0dXJlZC1waG90b3MtZmVlZHwyMnx8fGVufDB8fHx8fA%3D%3D)",
            }}
            initial={{ opacity: 0, y: 200, scale: 0.5 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -200, scale: 0.5 }}
            transition={{ duration: 0.5 }}
          >
            <div className="absolute inset-0 bg-black opacity-50"></div>
            <div className="flex flex-col justify-center items-center z-10">
              <div className={sail.className}>
                <h1 className="text-5xl">The Wedding of</h1>
              </div>
              <div className={`${qwitcher.className} text-center`}>
                <h2 className="text-8xl p-2">Kontol and Memeq</h2>
              </div>
              <div className={`${sail.className} text-center p-1`}>
                <p className="text-xl p-1">Kepada Yth. Bapak / Ibu</p>
                <h3 className="text-4xl p-1">Fauzan Azhari</h3>
                <i>*Mohon maaf jika ada kesalahan dalam penulisan nama</i>
              </div>
              <Button
                variant="contained"
                color="success"
                className="m-20"
                onClick={() => {
                  playMusic(); // Memutar musik
                  setIsOpened(true); // Set isOpened ke true
                }}
              >
                <LockOpenIcon />
                Buka Undangan
              </Button>
            </div>
          </motion.div>
        ) : (
          // Screen Kedua
          <Parallax pages={3} ref={parallaxRef} className="bg-black">
            <div className="w-3/4 m-auto relative">
              <motion.div
                key={"content"}
                className="h-screen w-full bg-gray-100 flex flex-col items-center overflow-hidden relative p-4"
                initial={{ opacity: 0, y: 200, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1486754735734-325b5831c3ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              >
                <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
                <div className="relative flex flex-col bg-green-200 h-screen w-full">
                  <div className="flex h-[50%] bg-yellow-500">
                    <div className="bg-slate-300 flex-1 relative">
                      <Fade key="1" direction="right">
                        <Image
                          src="/2.svg"
                          alt="Deskripsi Gambar"
                          fill
                          objectFit="contain"
                          quality={75}
                        />
                      </Fade>
                    </div>
                    <div className="bg-orange-600 flex-1 relative overflow-visible">
                      <Fade key="1" direction="right">
                        <Image
                          src="/1.svg"
                          alt="Deskripsi Gambar"
                          fill
                          objectFit="contain"
                          quality={75}
                          style={{ backgroundColor: 'white' }}
                        />
                      </Fade>
                    </div>
                  </div>
                  <div className="flex absolute bottom-0 h-[60%] w-full z-10">
                    <div className="flex-1 relative">
                      <Fade key="1" direction="right">
                        <Image
                          src="/3.svg"
                          alt="Deskripsi Gambar"
                          fill
                          objectFit="cover"
                          objectPosition="50% 50%"
                          quality={75}
                          style={{
                            transform: 'scale(.4)',
                            transformOrigin: 'center',
                            backgroundImage: 'red'
                          }}
                        />
                      </Fade>
                    </div>
                    <div className="bg-orange-600 flex-1 relative overflow-visible">
                      <Fade key="1" direction="right">
                        <Image
                          src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Deskripsi Gambar"
                          fill
                          objectFit="contain"
                          quality={75}
                          style={{ backgroundColor: 'white' }}
                        />
                      </Fade>
                    </div>
                  </div>
                </div>
                {/* <div className="flex justify-around h-max w-full">
                    <div className="w-full h-1/3 relative rounded-3xl overflow-hidden">
                      <Fade key="1" direction="right">
                        <Image
                          src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                          alt="Deskripsi Gambar"
                          fill
                          objectFit="cover"
                          quality={75}
                        />
                      </Fade>
                    </div>
                    <Drag key="2" direction="right">
                      <Image
                        src="/1.svg"
                        alt="Deskripsi Gambar"
                        fill
                        style={{ objectFit: 'cover' }}
                        quality={75}
                      />
                    </Drag>
                </div> */}
                {/* <div className="w-full flex justify-around absolute bottom-0">
                  <Drag key="1" direction="left">
                    <Image
                      src="/3.svg"
                      alt="Deskripsi Gambar"
                      width={400}
                      height={300}
                      layout="intrinsic"
                      quality={75}
                    />
                  </Drag>
                  <Drag key="1" direction="right">
                    <Image
                      src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Deskripsi Gambar"
                      width={700}
                      height={400}
                      layout="intrinsic"
                      quality={75}
                    />
                  </Drag>
                </div> */}
              </motion.div>
              <motion.div
                key={"content"}
                className="h-screen bg-gray-100 flex flex-col items-center overflow-hidden relative p-12"
                initial={{ opacity: 0, y: 200, scale: 0.5 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 1 }}
                style={{
                  backgroundImage:
                    "url(https://images.unsplash.com/photo-1486754735734-325b5831c3ad?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                }}
              >
                <div className="absolute inset-0 bg-white opacity-70 z-0"></div>
                <Fade key="1" direction="left">
                  <div
                    className={`${sail.className} flex flex-col text-center w-full p-1 z-10 justify-center`}
                    style={{ color: "#9f5b4c" }}
                  >
                    <p className="text-4xl p-1">Menuju Hari Bahagia</p>
                    <Countdown
                      date={Date.now() + 10000000} // 10 detik dari sekarang
                      renderer={renderer}
                    />
                    <p
                      className={`font text-xl p-1 mt-12 italic`}
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      "Dan di antara tanda-tanda (kebesaran)-Nya ialah Dia
                      menciptakan pasangan-pasangan untukmu dari jenismu
                      sendiri, agar kamu cenderung dan merasa tenteram
                      kepadanya, dan Dia menjadikan di antaramu rasa kasih dan
                      sayang. Sungguh, pada yang demikian itu benar-benar
                      terdapat tanda-tanda (kebesaran Allah) bagi kaum yang
                      berpikir."
                    </p>
                    <p
                      className={`font text-xl p-1 mt-12 italic font-extrabold`}
                      style={{ fontFamily: "Roboto, sans-serif" }}
                    >
                      - QS. Ar-Rum : 21 -
                    </p>
                  </div>
                </Fade>
                <div className="w-full h-1/3 relative rounded-3xl overflow-hidden">
                  <Fade key="1" direction="right">
                    <Image
                      src="https://images.unsplash.com/photo-1494774157365-9e04c6720e47?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                      alt="Deskripsi Gambar"
                      fill
                      objectFit="cover"
                      quality={75}
                    />
                  </Fade>
                </div>
              </motion.div>

              <ParallaxLayer
                style={{
                  display: "flex",
                  justifyContent: "flex-end",
                  alignItems: "end",
                }}
                speed={-0.9}
              >
                <motion.div
                  className="flex flex-col bg-slate-400 opacity-70 h-fit w-fit rounded-full"
                  whileHover={{ opacity: 1 }}
                >
                  <motion.button
                    className="bg-orange-500 rounded-full w-12 h-12 m-2"
                    onClick={() => {
                      setIsMusicPlay(!isMusicPlay);
                    }}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    {isMusicPlay ? <MusicNoteIcon /> : <MusicOffIcon />}
                  </motion.button>
                  <motion.button
                    className="bg-orange-500 rounded-full w-12 h-12 m-2"
                    onClick={scrollToTop}
                    whileHover={{ scale: 1.2 }}
                    whileTap={{ scale: 0.9 }}
                    transition={{ type: "spring", stiffness: 400, damping: 17 }}
                  >
                    <ExpandLessIcon />
                  </motion.button>
                </motion.div>
              </ParallaxLayer>
              <div>
                <BankCard
                  accountHolder="Evander Oktapian"
                  bankLogo="/bca.png"
                  bankName="BCA"
                  accountNumber="23123123"
                />
              </div>
            </div>
          </Parallax>
        )}
      </AnimatePresence>
    </>
  );
}

import { Box, Button, Container, Typography } from "@mui/material"
import { useEffect, useRef, useState } from "react"
import styles from "./Evander.module.css"
import { motion, AnimatePresence, color } from "framer-motion";
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';
import PinDropIcon from '@mui/icons-material/PinDrop';
import VideocamIcon from '@mui/icons-material/Videocam';
import { fadingMotion, fromBottomMotion, fromLeftMotion, fromRightMotion } from "@/lib/motion";
import Counter from "@/components/Counter/Counter";
import MyCarousel from "@/components/evander/MyCarousel";


export default function Evander() {
    const [isOpened, setIsOpened] = useState<Boolean>(false)
    const handleOpen = () => {
        setTimeout(
            () => setIsOpened(!isOpened), 500
        )
    }

    const Header = () => {
        return (
            <Container className={`h-screen text-center flex justify-center items-center`}>
                <div className="relative w-[98%] h-[95%] m-auto border-none">
                    <div className="absolute inset-0 bg-gradient-to-tr from-amber-300 via-yellow-700 to-amber-500 p-[8px] rounded-lg">
                        <div className="w-full h-full bg-white py-20">
                            <div className={`${styles.myTitle} h-1/2`}>
                                <h1 className={`${styles.h1}`}>Evander Oktapian</h1>
                                <h2 className={styles.h2}>&</h2>
                                <h1 className={`${styles.h1}`}>Jimbo Liyana</h1>
                            </div>
                            <div className="h-1/2">
                                <p className={`${styles.p2}`}>Yth Bapak/Ibu/Saudara/i</p>
                                <p className={`${styles.p1}`}>Kintilidin</p>
                                <h3 className={`${styles.p2}`}></h3>
                                <p className={`${styles.p2}`}>Anda diundang dengan hormat ke pernikahan kami</p>
                                <motion.button
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="bg-gradient-to-tr from-blue-600 to-blue-800 text-yellow-500 font-bold mt-12 normal-case p-4 rounded-full"
                                    onClick={handleOpen}
                                >Buka Undangan</motion.button>
                            </div>

                        </div>
                    </div>
                </div>
            </Container>
        )
    }
    const Body1 = () => {
        return (
            <>
                <Box className="flex flex-col h-full items-center">
                    <h1 className={`${styles.h1}`}>Mempelai</h1>
                    <motion.div
                        variants={fromLeftMotion}
                        initial="initial"
                        whileInView={"whileInView"}
                        style={{
                            width: 350,
                            height: 350,
                            borderRadius: '50%',
                            background: 'linear-gradient(to top, #eab308, gold)',
                            padding: '4px',
                            display: 'inline-block',
                            position: 'relative'
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                background: 'url(/2.svg)',
                                borderRadius: '50%'
                            }}
                        />
                    </motion.div>
                    <motion.div
                        variants={fromRightMotion}
                        initial="initial"
                        whileInView={"whileInView"}
                        className="text-center"
                    >
                        <h1 className={`${styles.h1}`}>Jimbo</h1>
                        <h3 className={`${styles.h3}`}>Pengantin Pria</h3>
                    </motion.div>
                    <motion.div
                        variants={fromBottomMotion}
                        initial="initial"
                        whileInView={"whileInView"}
                        className="text-center flex flex-row gap-4"
                    >
                        <a href="https://google.com" target="_blank">
                            <InstagramIcon sx={{ color: '#eab308' }} />
                        </a>
                        <a href="https://google.com" target="_blank">
                            <FacebookIcon sx={{ color: '#eab308' }} />
                        </a>
                    </motion.div>
                    <motion.div
                        variants={fromLeftMotion}
                        initial="initial"
                        whileInView={"whileInView"}
                        style={{
                            width: 350,
                            height: 350,
                            borderRadius: '50%',
                            background: 'linear-gradient(to top, #eab308, gold)',
                            padding: '4px',
                            display: 'inline-block',
                            position: 'relative',
                            marginTop: '150px'
                        }}
                    >
                        <Box
                            sx={{
                                width: '100%',
                                height: '100%',
                                background: 'url(https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)',
                                backgroundSize: '100%',
                                borderRadius: '50%'
                            }}
                        />
                    </motion.div>
                    <motion.div
                        variants={fromRightMotion}
                        initial="initial"
                        whileInView={"whileInView"}
                        className="text-center"
                    >
                        <h1 className={`${styles.h1}`}>Liyana</h1>
                        <h3 className={`${styles.h3}`}>Pengantin Wanita</h3>
                    </motion.div>
                    <motion.div
                        variants={fromBottomMotion}
                        initial="initial"
                        whileInView={"whileInView"}
                        className="text-center flex flex-row gap-4"
                    >
                        <a href="https://google.com" target="_blank">
                            <InstagramIcon sx={{ color: '#eab308' }} />
                        </a>
                        <a href="https://google.com" target="_blank">
                            <FacebookIcon sx={{ color: '#eab308' }} />
                        </a>
                    </motion.div>
                </Box>
            </>
        )
    }

    const Body2 = () => {
        return (
            <>
                <Container className={`h-full text-center flex flex-col justify-center items-center`}>
                    <div className="relative w-[98%] h-full m-auto border-none">
                        <div className="relative h-auto inset-0 bg-gradient-to-tr from-amber-300 via-yellow-700 to-amber-500 p-[8px] rounded-lg">
                            <div className="w-full h-full bg-white py-20 px-8">
                                <motion.h1
                                    variants={fromBottomMotion}
                                    initial="initial"
                                    whileInView={"whileInView"}
                                    className={`${styles.h1}`}>
                                    Hari Pernikahan
                                </motion.h1>
                                <Counter />
                                <motion.div
                                    variants={fromBottomMotion}
                                    initial="initial"
                                    whileInView={"whileInView"}
                                >
                                    <p className={`${styles.h1} mt-20`}>Akad Nikah</p>
                                    <p className={`${styles.p3} mt-12`}>Tanggal</p>
                                    <p className={`${styles.p2}`}>26 Okt 2024</p>
                                </motion.div>
                                <motion.div
                                    variants={fromBottomMotion}
                                    initial="initial"
                                    whileInView={"whileInView"}
                                >
                                    <p className={`${styles.p3} mt-12`}>Waktu</p>
                                    <p className={`${styles.p2}`}>09.00 WIB</p>
                                </motion.div>
                                <motion.div
                                    variants={fromBottomMotion}
                                    initial="initial"
                                    whileInView={"whileInView"}
                                >
                                    <p className={`${styles.p3} mt-12`}>Tempat</p>
                                    <p className={`${styles.p3}`}>Kediaman Mempelai Wanita</p>
                                    <p className={`${styles.p4}`}>Jl.mawar 3, no.32, RT02/RW08, kp.karang mulya, desa, Karangsatria, Kec. Tambun Utara, Kabupaten Bekasi, Jawa Barat 17510</p>
                                </motion.div>
                                <motion.div
                                    variants={fromBottomMotion}
                                    initial="initial"
                                    whileInView={"whileInView"}
                                >
                                </motion.div>
                                <motion.button
                                    variants={fadingMotion}
                                    initial="initial"
                                    whileInView={"whileInView"}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="bg-gradient-to-tr from-indigo-800 to-sky-700 text-yellow-500 font-bold mt-12 normal-case p-4 rounded-full border-4 border-yellow-500 w-60"
                                ><PinDropIcon sx={{ color: '#facc15' }} /> Buka Map </motion.button>
                                <motion.div
                                    variants={fromBottomMotion}
                                    initial="initial"
                                    whileInView={"whileInView"}
                                >
                                    <p className={`${styles.h1} mt-20`}>Resepsi</p>
                                    <p className={`${styles.p3} mt-12`}>Tanggal</p>
                                    <p className={`${styles.p2}`}>26 Okt 2024</p>
                                </motion.div>
                                <motion.div
                                    variants={fromBottomMotion}
                                    initial="initial"
                                    whileInView={"whileInView"}
                                >
                                    <p className={`${styles.p3} mt-12`}>Waktu</p>
                                    <p className={`${styles.p2}`}>12.00 WIB</p>
                                </motion.div>
                                <motion.div
                                    variants={fromBottomMotion}
                                    initial="initial"
                                    whileInView={"whileInView"}
                                >
                                    <p className={`${styles.p3} mt-12`}>Tempat</p>
                                    <p className={`${styles.p3}`}>Kediaman Mempelai Wanita</p>
                                    <p className={`${styles.p4}`}>Jl.mawar 3, no.32, RT02/RW08, kp.karang mulya, desa, Karangsatria, Kec. Tambun Utara, Kabupaten Bekasi, Jawa Barat 17510</p>
                                </motion.div>
                                <motion.button
                                    variants={fadingMotion}
                                    initial="initial"
                                    whileInView={"whileInView"}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="bg-gradient-to-tr from-indigo-800 to-sky-700 text-yellow-500 font-bold mt-12 normal-case p-4 rounded-full border-4 border-yellow-500 w-60"
                                ><PinDropIcon sx={{ color: '#facc15' }} /> Buka Map </motion.button>
                                <motion.div
                                    variants={fromBottomMotion}
                                    initial="initial"
                                    whileInView={"whileInView"}
                                >
                                    <p className={`${styles.p3} mt-12`}>Live Stream</p>
                                    <p className={`${styles.p4} `}>Kami akan menyiarkan upacara pernikahan secara virtual</p>
                                </motion.div>
                                <motion.button
                                    variants={fadingMotion}
                                    initial="initial"
                                    whileInView={"whileInView"}
                                    whileHover={{ scale: 1.1 }}
                                    whileTap={{ scale: 0.9 }}
                                    transition={{ type: "spring", stiffness: 400, damping: 10 }}
                                    className="bg-gradient-to-tr from-indigo-800 to-sky-700 text-yellow-500 font-bold mt-12 normal-case p-4 rounded-full border-4 border-yellow-500 w-60"
                                ><VideocamIcon sx={{ color: '#facc15' }} /> Live Stream </motion.button>
                            </div>
                        </div>
                    </div>
                </Container>

            </>
        )
    }

    const images = [
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

    const Body3 = () => {
        return (
            <div className='flex flex-col justify-center items-center'>
                <h1 className={`${styles.h1}`}>Momen Kami</h1>
                <MyCarousel images={images}/>
            </div>
        )
    }

    return (
        <AnimatePresence>
            {!isOpened ? (
                <motion.div
                    key={"header"}
                    initial={{ opacity: 0, y: -200, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 300, scale: 0 }}
                    transition={{ duration: 1 }}
                >
                    <Header />
                </motion.div>
            ) : (
                <motion.div
                    key={"body"}
                    initial={{ opacity: 0, y: -200, scale: 0.5 }}
                    animate={{ opacity: 1, y: 0, scale: 1 }}
                    exit={{ opacity: 0, y: 200, scale: 0 }}
                    transition={{ duration: 1, delay: 1 }}
                >
                    <Body1 />
                    <Body2 />
                    <Body3 />
                    <Box className='h-screen'></Box>
                </motion.div>
            )}
        </AnimatePresence>
    )
}
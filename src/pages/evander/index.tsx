import { Button, Container } from "@mui/material"
import { useState } from "react"
import styles from "./Evander.module.css"
import { motion, AnimatePresence } from "framer-motion";


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
                                <h1 className="text-6xl font-bold text-yellow-500">Evander Oktapian</h1>
                                <h1 className="text-5xl text-yellow-700">&</h1>
                                <h1 className="text-6xl font-bold text-yellow-500">Jimbo Liyana</h1>
                            </div>
                            <div className="h-1/2">
                                <p className={`${styles.myPar} text-2xl`}>Yth Bapak/Ibu/Saudara/i</p>
                                <p className={`${styles.myPar} text-3xl text-yellow-700 my-4`}>Kintilidin</p>
                                <h3 className={`${styles.myPar} text-2xl`}></h3>
                                <p className={`${styles.myPar} text-2xl`}>Anda diundang dengan hormat ke pernikahan kami</p>
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
                    <Header />
                </motion.div>
            )}
        </AnimatePresence>
    )
}
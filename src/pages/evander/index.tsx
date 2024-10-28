import {
  Box,
  Button,
  Container,
  FormControl,
  FormControlLabel,
  FormLabel,
  Radio,
  RadioGroup,
  TextField,
  Typography,
} from "@mui/material";
import { useEffect, useRef, useState } from "react";
import styles from "./Evander.module.css";
import { motion, AnimatePresence, color } from "framer-motion";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import PinDropIcon from "@mui/icons-material/PinDrop";
import VideocamIcon from "@mui/icons-material/Videocam";
import {
  fadingChildrenMotion,
  fadingMotion,
  fromBottomMotion,
  fromLeftMotion,
  fromRightMotion,
  fromTopMotion,
} from "@/lib/motions";
import Counter from "@/components/Counter/Counter";
import MyCarousel from "@/components/evander/MyCarousel";
import { Controller, SubmitHandler, useForm } from "react-hook-form";
import { useToast } from "@/hooks/use-toast";
import { Toaster } from "@/components/ui/toaster";
import { MyToaster } from "@/components/evander/MyToaster";

type JobType = {
  title: string;
  description: string;
  date: string;
};

interface IFormInput {
  name: string;
  confirmation: string
  message: string;
}

export default function Evander() {
  const [isOpened, setIsOpened] = useState<Boolean>(false);
  const { toast } = useToast()
  const { control, handleSubmit, reset } = useForm<IFormInput>({
    defaultValues: {
      name: "",
      confirmation: "",
      message: "",
    },
  });
  const handleOpen = () => {
    setTimeout(() => setIsOpened(!isOpened), 500);
  };
  const onSubmit: SubmitHandler<IFormInput> = (data) => {
    toast({
      description: "Your message has been sent.",
    })
    reset()
    console.log(data);
  };

  const Header = () => {
    return (
      <Container
        className={`h-screen text-center flex justify-center items-center`}
      >
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
                <p className={`${styles.p2}`}>
                  Anda diundang dengan hormat ke pernikahan kami
                </p>
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-gradient-to-tr from-blue-600 to-blue-800 text-yellow-500 font-bold mt-12 normal-case p-4 rounded-full"
                  onClick={handleOpen}
                >
                  Buka Undangan
                </motion.button>
              </div>
            </div>
          </div>
        </div>
      </Container>
    );
  };
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
              borderRadius: "50%",
              background: "linear-gradient(to top, #eab308, gold)",
              padding: "4px",
              display: "inline-block",
              position: "relative",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background: "url(/2.svg)",
                borderRadius: "50%",
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
              <InstagramIcon sx={{ color: "#eab308" }} />
            </a>
            <a href="https://google.com" target="_blank">
              <FacebookIcon sx={{ color: "#eab308" }} />
            </a>
          </motion.div>
          <motion.div
            variants={fromLeftMotion}
            initial="initial"
            whileInView={"whileInView"}
            style={{
              width: 350,
              height: 350,
              borderRadius: "50%",
              background: "linear-gradient(to top, #eab308, gold)",
              padding: "4px",
              display: "inline-block",
              position: "relative",
              marginTop: "150px",
            }}
          >
            <Box
              sx={{
                width: "100%",
                height: "100%",
                background:
                  "url(https://images.unsplash.com/photo-1492175742197-ed20dc5a6bed?q=80&w=1438&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D)",
                backgroundSize: "100%",
                borderRadius: "50%",
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
              <InstagramIcon sx={{ color: "#eab308" }} />
            </a>
            <a href="https://google.com" target="_blank">
              <FacebookIcon sx={{ color: "#eab308" }} />
            </a>
          </motion.div>
        </Box>
      </>
    );
  };

  const Body2 = () => {
    return (
      <>
        <Container
          className={`h-full text-center flex flex-col justify-center items-center`}
        >
          <div className="relative w-[98%] h-full m-auto border-none">
            <div className="relative h-auto inset-0 bg-gradient-to-tr from-amber-300 via-yellow-700 to-amber-500 p-[8px] rounded-lg">
              <div className="w-full h-full bg-white py-20 px-8">
                <motion.h1
                  variants={fromBottomMotion}
                  initial="initial"
                  whileInView={"whileInView"}
                  className={`${styles.h1}`}
                >
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
                  <p className={`${styles.p4}`}>
                    Jl.mawar 3, no.32, RT02/RW08, kp.karang mulya, desa, Karangsatria,
                    Kec. Tambun Utara, Kabupaten Bekasi, Jawa Barat 17510
                  </p>
                </motion.div>
                <motion.div
                  variants={fromBottomMotion}
                  initial="initial"
                  whileInView={"whileInView"}
                ></motion.div>
                <motion.button
                  variants={fadingMotion}
                  initial="initial"
                  whileInView={"whileInView"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-gradient-to-tr from-indigo-800 to-sky-700 text-yellow-500 font-bold mt-12 normal-case p-4 rounded-full border-4 border-yellow-500 w-60"
                >
                  <PinDropIcon sx={{ color: "#facc15" }} /> Buka Map{" "}
                </motion.button>
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
                  <p className={`${styles.p4}`}>
                    Jl.mawar 3, no.32, RT02/RW08, kp.karang mulya, desa, Karangsatria,
                    Kec. Tambun Utara, Kabupaten Bekasi, Jawa Barat 17510
                  </p>
                </motion.div>
                <motion.button
                  variants={fadingMotion}
                  initial="initial"
                  whileInView={"whileInView"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-gradient-to-tr from-indigo-800 to-sky-700 text-yellow-500 font-bold mt-12 normal-case p-4 rounded-full border-4 border-yellow-500 w-60"
                >
                  <PinDropIcon sx={{ color: "#facc15" }} /> Buka Map{" "}
                </motion.button>
                <motion.div
                  variants={fromBottomMotion}
                  initial="initial"
                  whileInView={"whileInView"}
                >
                  <p className={`${styles.p3} mt-12`}>Live Stream</p>
                  <p className={`${styles.p4} `}>
                    Kami akan menyiarkan upacara pernikahan secara virtual
                  </p>
                </motion.div>
                <motion.button
                  variants={fadingMotion}
                  initial="initial"
                  whileInView={"whileInView"}
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  className="bg-gradient-to-tr from-indigo-800 to-sky-700 text-yellow-500 font-bold mt-12 normal-case p-4 rounded-full border-4 border-yellow-500 w-60"
                >
                  <VideocamIcon sx={{ color: "#facc15" }} /> Live Stream{" "}
                </motion.button>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  };

  const images = [
    {
      photo: "/photo/1.jpeg",
    },
    {
      photo: "/photo/2.jpeg",
    },
    {
      photo: "/photo/3.jpeg",
    },
    {
      photo: "/photo/4.jpeg",
    },
    {
      photo: "/photo/5.jpeg",
    },
    {
      photo: "/photo/cover.jpeg",
    },
  ];

  const Body3 = () => {
    return (
      <div className="flex flex-col justify-center items-center">
        <h1 className={`${styles.h1}`}>Momen Kami</h1>
        <MyCarousel images={images} />
      </div>
    );
  };

  const stories = [
    {
      title: "Pertemuan",
      description: `Kita adalah teman masa kecil saat SD dan SMP namun berpisah saat SMA dan kuliah akhirnya dipertemukan kembali melalui sosial media seiiring berjalannya waktu kami terus berkomunikasi dan bertukar cerita hingga akhirnya kita menjalani komitemen satu sama lain`,
      date: "18 Oktober 2021",
    },
    {
      title: "Lamaran",
      description: `Setelah bebrapa tahun kami saling mengenal membuat kami yakin satu sama lain untuk menjalin hubungan yang lebih serius akhirnya a ihsan menyatakan keseriusan nya dengan membawa orangtuanya.`,
      date: "29 Juni 2024",
    },
    {
      title: "Menikah",
      description: `Pernikahan kita bukan hanya sekadar sebuah acara, tetapi awal dari sebuah babak baru dalam hidup kita. Sebuah babak yang dipenuhi dengan cinta, kerja sama, dan impian-impian yang akan kita wujudkan bersama. Kita sadar bahwa perjalanan ini tidak selalu mudah, tetapi kita percaya bahwa dengan saling mendukung, kita akan mampu menghadapi segala sesuatu yang akan datang.
     `,
      date: "26 Oktober 2024",
    },
    {
      title: "Perceraian",
      description: `Tamat`,
      date: "27 Oktober 2024",
    },
  ];

  const Body4 = () => {
    return (
      <>
        <h1 className={`${styles.h1} text-center`}>Cerita Cinta Kami</h1>
        {stories.map((story, index) => (
          <motion.div
            key={index}
            variants={fadingChildrenMotion}
            className={`flex ${index % 2 == 0 ? "flex-row" : "flex-row-reverse"
              }  justify-between`}
          >
            <motion.div
              variants={index % 2 == 0 ? fromLeftMotion : fromRightMotion}
              initial="initial"
              whileInView={"whileInView"}
              className="left flex-[2]"
            >
              <h2 className={`${styles.h2}`}>{story.title}</h2>
              <h3 className="text-sm italic p-3">{story.description}</h3>
              <h4 className={`${styles.h4}`}>{story.date}</h4>
            </motion.div>
            <motion.div
              variants={fromTopMotion}
              initial="initial"
              whileInView={"whileInView"}
              className="center flex-[1] flex justify-center"
            >
              <div className="line w-px h-full bg-[#ceaf59] rounded relative">
                <div className="h-6 w-6 bg-white ring-4 ring-[#eab308] absolute top-1/2 -translate-y-1/2 -left-3 rounded-full" />
              </div>{" "}
            </motion.div>
            <div className="right flex-[2] "></div>
          </motion.div>
        ))}
      </>
    );
  };

  const confirmationList = [
    {
      label: 'Ya',
      value: 1
    },
    {
      label: 'Tidak',
      value: 0
    },
    {
      label: 'Ya',
      value: .5
    },
  ]

  const Body5 = () => {
    return (
      <>
        <Container
          className={`h-full text-center flex flex-col justify-center items-center`}
        >
          <div className="relative w-[98%] h-full m-auto border-none">
            <div className="relative h-auto inset-0 bg-gradient-to-tr from-amber-300 via-yellow-700 to-amber-500 p-[8px] rounded-lg">
              <div className="w-full h-full bg-white py-20 px-8 flex flex-col gap-8">
                <h1 className={`${styles.h1}`}>Reservation</h1>
                <Controller
                  name="name"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      id="standard-basic"
                      label="Nama Lengkap"
                      variant="outlined"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
                <div>
                  <p className={`${styles.p4} text-left`}>
                    Bersedia hadir di acara kami ?
                  </p>
                  <Controller
                    name="confirmation"
                    control={control}
                    render={({ field: { onChange, onBlur, value } }) => (
                      <RadioGroup
                        row
                        aria-labelledby="demo-form-control-label-placement"
                        name="position"
                        defaultValue="top"
                        onChange={onChange}
                        value={value}
                        onBlur={onBlur}
                      >
                        {confirmationList?.map((list, i) => {
                          return (
                            <FormControlLabel
                              key={i}
                              value={list?.value}
                              control={<Radio
                                sx={{
                                  '&.Mui-checked': {
                                    color: '#ceaf59',
                                  },
                                }}
                              />}
                              label={list?.label}
                            />
                          )
                        })}
                      </RadioGroup>
                    )}
                  />
                </div>
                <Controller
                  name="message"
                  control={control}
                  render={({ field: { onChange, onBlur, value } }) => (
                    <TextField
                      id="standard-basic"
                      label="Kirim Ucapan"
                      variant="outlined"
                      multiline
                      rows={10} // Sesuaikan jumlah baris sesuai kebutuhan
                      className="w-full"
                      onChange={onChange}
                      onBlur={onBlur}
                      value={value}
                    />
                  )}
                />
                <motion.button
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.9 }}
                  transition={{ type: "spring", stiffness: 400, damping: 10 }}
                  onClick={handleSubmit(onSubmit)}
                  className="bg-gradient-to-tr from-indigo-800 to-sky-700 text-yellow-500 font-bold mt-12 normal-case p-4 rounded-full border-4 border-yellow-500 w-1/2"
                >
                  Kirim
                </motion.button>
              </div>
            </div>
          </div>
        </Container>
      </>
    );
  };

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
        <>
          <MyToaster />
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
            <Body4 />
            <Body5 />
            <Box className="h-screen"></Box>
          </motion.div>
        </>
      )}
    </AnimatePresence>
  );
}

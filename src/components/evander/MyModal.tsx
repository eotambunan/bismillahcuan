import * as React from 'react';
import Button from '@mui/material/Button';
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';
import useEmblaCarousel from 'embla-carousel-react'
import { EmblaOptionsType } from 'embla-carousel'
import styles from "./MyModal.module.css"
import { MyCarousel } from './MyCarousel';
import { motion, AnimatePresence, color } from "framer-motion";
import CloseIcon from '@mui/icons-material/Close';


type MyModal = {
    isOpen: boolean,
    setIsOpen: React.Dispatch<React.SetStateAction<boolean>>,
    images: {
        photo: string
    }[],
    options?: EmblaOptionsType
}

type PropType = {
    selected: boolean
    index: string
    onClick: () => void
}

const Thumb: React.FC<PropType> = (props) => {
    const { selected, index, onClick } = props

    return (
        <div
            className={`${styles.emblaThumbs__slide} ${selected && styles.selectedEmblaThumbs}`}
        >
            <button
                onClick={onClick}
                type="button"
                className={`${styles.emblaThumbs__slide__number} bg-black opacity-100 rounded-lg h-20 w-16 overflow-hidden`}
            >
                <img
                    src={index}
                    alt={`Image ${index + 1}`}
                />

            </button>
        </div>
    )
}

export default function MyModal(props: MyModal) {
    const { isOpen, setIsOpen, images, options } = props
    console.log(images)
    const [emblaMainRef, emblaMainApi] = useEmblaCarousel(options)
    const [emblaThumbsRef, emblaThumbsApi] = useEmblaCarousel({
        containScroll: 'keepSnaps',
        dragFree: true
    })
    const [selectedIndex, setSelectedIndex] = React.useState(0)
    const theme = useTheme();
    const fullScreen = useMediaQuery(theme.breakpoints.down('md'));

    // const handleClickOpen = () => {
    //     setOpen(true);
    // };

    const handleClose = () => {
        setIsOpen(false);
    };
    const onThumbClick = React.useCallback(
        (index: number) => {
            if (!emblaMainApi || !emblaThumbsApi) return
            emblaMainApi.scrollTo(index)
        },
        [emblaMainApi, emblaThumbsApi]
    )

    return (
        <React.Fragment >
            <Dialog
                fullScreen={fullScreen}
                open={isOpen}
                onClose={handleClose}
                aria-labelledby="responsive-dialog-title"

            >
                <DialogTitle
                    id="responsive-dialog-title"
                    className='flex justify-center'
                >
                    <span className={`${styles.h4} text-center`}>Poto poto</span>
                </DialogTitle>
                <DialogContent >


                    <div className={`${styles.embla}`}>
                        <div className={`${styles.embla__viewport}`} ref={emblaMainRef}>
                            <div className={`${styles.embla__container}`}>
                                {images?.map((image, index) => (
                                    <div className={`${styles.embla__slide}`} key={index}>
                                        <div className={`${styles.embla__slide__number}`}>
                                            <img
                                                src={image?.photo}
                                                alt={`Image ${index + 1}`}
                                            // className="w-full h-full object-cover cursor-pointer"
                                            />
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className={`${styles.emblaThumbs}`}>
                            <div className={`${styles.emblaThumbs__viewport}`} ref={emblaThumbsRef}>
                                <div className={`${styles.emblaThumbs__container}`}>
                                    {images?.map((image, index) => (
                                        <Thumb
                                            key={index}
                                            onClick={() => onThumbClick(index)}
                                            selected={index === selectedIndex}
                                            index={image.photo}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </div>



                </DialogContent>
                <DialogActions
                className='flex justify-center'
                >
                    <motion.button
                        initial="initial"
                        whileInView={"whileInView"}
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        transition={{ type: "spring", stiffness: 400, damping: 10 }}
                        className="bg-gradient-to-tr from-indigo-800 to-sky-700 text-yellow-500 font-bold normal-case p-4 rounded-full border-4 border-yellow-500 w-20"
                        onClick={handleClose}
                    ><CloseIcon sx={{ color: '#facc15' }} /> </motion.button>

                </DialogActions>
            </Dialog>
        </React.Fragment>
    );
}
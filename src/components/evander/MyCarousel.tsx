import { Card, CardContent } from "@/components/ui/card"
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    CarouselNext,
    CarouselPrevious,
} from "@/components/ui/carousel"
import Autoplay from "embla-carousel-autoplay"
import { useRef, useState } from "react"
import MyModal from "./MyModal";
import { EmblaOptionsType } from 'embla-carousel'

export type MyCarousel = {
    images: {
        photo: string
    }[]
};

const MyCarousel = (props: MyCarousel) => {

    const [isOpen, setIsOpen] = useState<boolean>(false)
    const plugin = useRef(
        Autoplay({ delay: 3000, stopOnInteraction: false })
    )

    const OPTIONS: EmblaOptionsType = {}
    const SLIDE_COUNT = 10
    const SLIDES = Array.from(Array(SLIDE_COUNT).keys())
    return (
        <>
            <MyModal
                isOpen={isOpen}
                setIsOpen={setIsOpen}
                images={props.images}
                options={OPTIONS}
            />
            <Carousel
                plugins={[plugin.current]}
                className="w-full max-w-xs"
                opts={{
                    loop: true,
                }}
            >
                <CarouselContent>
                    {props.images.map((image, index) => (
                        <CarouselItem key={index}>
                            <div className="p-1">
                                <Card>
                                    <CardContent className="flex aspect-square items-center justify-center p-6">
                                        <img
                                            src={image?.photo}
                                            alt={`Image ${index + 1}`}
                                            className="w-full h-full object-cover cursor-pointer"
                                            onClick={() => { setIsOpen(true) }}
                                        />
                                    </CardContent>
                                </Card>
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
        </>
    )
}

export default MyCarousel
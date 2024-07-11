"use client";

import Image from "next/image";

interface SlideProps {
    imgSrc: string
    name: string
    title?: string
    quote: string
}

const Slide: React.FC<SlideProps> = ({
    imgSrc,
    name,
    title,
    quote
}) => {
    return (
        <div className="
            flex
            flex-row
            items-center
            justify-around
            gap-3
            px-6
            py-3
            w-[95vw]
        ">
            <div className="flex flex-col gap-3 items-start">
                <Image
                    alt="profile picture"
                    src={imgSrc}
                    height={100}
                    width={100}
                    className="
                    rounded-full 
                    h-24 
                    w-24
                    bg-neutral-100"
                />
                <div className="text-xl font-semibold text-neutral-800">
                    {name}
                </div>
                <div className="text-l font-light text-neutral-800">
                    {title}
                </div>
            </div>
            <div className="
            text-2xl
            font-semibold 
            w-3/4
            text-black
            ">
                <div className="
                    flex
                    flex-row
                    items-center
                    justify-center
                ">
                    "{quote}"
                </div>
            </div>
        </div>
    )
}

export default Slide;
"use client";

import { ReactNode, useEffect, useRef, useState } from "react";
import Container from "../Container";

interface SlideshowProps {
    slides: ReactNode[];
}

const Slideshow: React.FC<SlideshowProps> = ({
    slides,
}) => {
    const [index, setIndex] = useState(0);
    let timeoutReturn: undefined | ReturnType<typeof setTimeout>;
    const timeoutRef = useRef(timeoutReturn);

    const resetTimeout = () => {
        if (timeoutRef.current) {
            clearTimeout(timeoutRef.current);
        }
    }

    useEffect(() => {
        resetTimeout();
        timeoutRef.current = setTimeout(() => {
            setIndex(() => {
                return index === slides.length - 1 ? 0 : index + 1;
            })
        }, 2500);
        return () => {
            resetTimeout();
        }
    }, [index, slides.length])

    return (
        <Container>
            <>
                <div className={`
                    bg-blue-200/70 
                    rounded-3xl 
                    px-2
                    py-4
                    flex
                    flex-row
                    overflow-hidden
                    `}>
                    {slides.map((slide, idx) => (
                        <div
                            key={idx}
                            className={`
                                transform
                                inline-block
                                transition
                                duration-1000
                                translate-x-[-${index * 100}%]`}
                        >
                            {slide}
                        </div>
                    ))}
                </div>
                <div className="text-center">
                    {slides.map((_, idx) => (
                        <div
                            key={idx}
                            className={`
                                inline-block 
                                h-4
                                w-4
                                rounded-full
                                cursor-pointer
                                mt-4
                                mx-2
                                ${index === idx ? "bg-neutral-600" : " bg-neutral-300"}
                                `}
                            onClick={() => setIndex(idx)}
                        >
                        </div>
                    ))}
                </div>
            </>

        </Container>
    )
}

export default Slideshow;
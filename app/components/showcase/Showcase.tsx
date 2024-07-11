"use client";

import Image from "next/image";
import Container from "../Container";

const Showcase = () => {
    return (
        <Container>
            <div className="
                flex
                flex-col md:flex-row
                items-center
                justify-between
                gap-2
                h-full
            ">
                <Image
                    alt="Builduing front"
                    src="/images/showcase/building-front-1.jpg"
                    height={100}
                    width={100}
                    className="
                    h-full md:h-3/5 
                    w-full md:w-3/5 
                    rounded-3xl"
                />
                <Image
                    alt="Builduing front"
                    src="/images/showcase/employees-1.jpg"
                    height={100}
                    width={100}
                    className="
                    h-full md:h-2/5 
                    w-full md:w-2/5 
                    rounded-3xl"
                />
            </div>

        </Container>
    )
}

export default Showcase
"use client"

import Image from "next/image";
import Container from "../Container";
import Heading from "../Heading";
import BulletPoint from "../BulletPoint";
import { FaArrowRight, FaCheckCircle, FaRegLightbulb, FaRocket } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";
import Button from "../Button";


const Hero = () => {

    return (
        <div
            className="
                mb-8
                h-screen
                bg-hero-image
                bg-no-repeat
                bg-cover
                grid
                items-center
                md:items-end
                "
        >
            <Container>
                <div className="
                grid
                grid-cols-2
                grid-rows-2
                items-center
                justify-between
                gap-4
                ">
                    <Heading
                        title="Rakennetaan tulevaisuutta yhdessä"
                        primary
                    />
                    <div></div>
                    <div className="
                        block
                        w-full
                    ">
                        <div className="
                            hidden
                            md:flex
                            flex-row 
                            items-center
                            justify-between
                            gap-4
                        ">
                            <BulletPoint
                                icon={FaRegLightbulb}
                                label="Unelmia rakentamassa projekti kerrallaan"
                            />
                            <BulletPoint
                                icon={FaRocket}
                                label="Vision toteuttaminen yhdessä"
                            />
                            <BulletPoint
                                icon={FaCheckCircle}
                                label="Taatua laatua jokaisessa projektissa"
                            />
                        </div>
                        <div className="m-4"></div>
                        <Button
                            label="Pyydä Tarjous"
                            onClick={() => { }}
                        />
                    </div>

                </div>

            </Container>
        </div>
    )
}

export default Hero;
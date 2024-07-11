"use client"

import Container from "../Container";
import Heading from "../Heading";
import BulletPoint from "../BulletPoint";
import { FaCheckCircle, FaRegLightbulb, FaRocket } from "react-icons/fa";
import Button from "../Button";
import Spacer from "../Spacer";
import { useRouter } from "next/navigation";


const Hero = () => {
    const router = useRouter();
    return (
        <div
            className="
                mb-8
                h-[80%] md:h-screen
                bg-hero-image
                bg-no-repeat
                bg-cover
                grid
                items-end
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
                        <Spacer />
                        <Button
                            label="Pyydä Tarjous"
                            onClick={() => router.push("/#contact")}
                        />
                    </div>

                </div>

            </Container>
        </div>
    )
}

export default Hero;
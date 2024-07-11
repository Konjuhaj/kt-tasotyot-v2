"use client";

import { useRouter } from "next/navigation";
import Button from "..//Button";
import Container from "..//Container";
import Heading from "..//Heading";

interface HeroProps {
    title: string,
    buttonLabel?: string
}

const HeroBlank: React.FC<HeroProps> = ({
    title,
    buttonLabel
}) => {
    const router = useRouter();
    return (
        <div className="
        mb-8
        h-[60%]
        bg-hero-image
        bg-no-repeat
        bg-cover
        grid
        items-center
        ">
            <Container>
                <div className="
                flex
                flex-col
                items-center
                justify-center
                gap-4
                ">
                    <Heading
                        title={title}
                        primary
                        center
                    />

                    {buttonLabel && (
                        <Button
                            label={buttonLabel}
                            onClick={() => router.push("/#contact")}
                        />
                    )}
                </div>
            </Container>
        </div>
    );
};

export default HeroBlank;
"use client";

import Container from "../Container";
import Heading from "../Heading";
import ProfilePicture from "./ProfilePicture";

const Team = () => {
    return (
        <Container>
            <div className="flex flex-col justify-center items-center gap-8">
                <Heading
                    title="Tutustu ammattitaitoiseen rakennusalan asiantuntijatiimiimme"
                    secondary
                    center
                />
                <div className="
                flex 
                flex-col 
                md:flex-row
                items-center
                justify-center
                gap-8">
                    <ProfilePicture
                        imgSrc="/image.png" />
                </div>
            </div>
        </Container>
    )
}

export default Team;
"use client";

import Container from "../Container";
import ProfilePicture from "./ProfilePicture";

const Team = () => {
    return (
        <Container>
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
        </Container>
    )
}

export default Team;
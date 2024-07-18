"use client";

import Image from "next/image";
import Heading from "../Heading";

interface ProfilePictureProps {
    imgSrc: string;
    title: string;
    subtitle: string;
}

const ProfilePicture: React.FC<ProfilePictureProps> = ({
    imgSrc,
    title,
    subtitle
}) => {
    return (
        <div className="
            flex 
            flex-col 
            items-center 
            justify-between 
            gap-4">
            <Image
                alt="Profile picture"
                height={100}
                width={100}
                src={imgSrc}
                className="
                    object-cover 
                    h-64 
                    w-52 
                    rounded-3xl
                    border-b-[1px]
                    hover:shadow-sm"
            />
            <Heading
                title={title}
                subtitle={subtitle}
                secondary
                size="text-2xl" />
        </div>


    )
}

export default ProfilePicture;
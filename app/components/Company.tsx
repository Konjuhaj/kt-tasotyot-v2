"use client";

import Image from "next/image";

interface CompanyProps {
    label: string
    src: string
}

const Company: React.FC<CompanyProps> = ({
    label,
    src
}) => {
    return (
        <div className="
            flex
            items-center
            justify-between
            md:mx-4 mx-2
            my-1 md:my-2
            bg-white
            rounded-xl
            p-1
            md:p-4
        ">
            <Image
                alt={label}
                src={src}
                height={80}
                width={80}
            />
        </div>
    )
}

export default Company;
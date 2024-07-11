"use client";

interface HeadingProps {
    title: string;
    primary?: boolean;
    secondary?: boolean;
    subtitle?: string;
    center?: boolean;
    centerMobile?: boolean;
    size?: string;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    primary,
    secondary,
    subtitle,
    center,
    centerMobile,
    size
}) => {
    return (
        <div className={`
            w-full
            m-4
            ${center ? "text-center" : "text-left"}
            ${centerMobile ? "text-center md:text-left" : "text-left"}
            ${primary || secondary ? "text-neutral-800" : "text-white"}        
        `}>
            <div className={`
                ${size ? size
                    : primary ? "text-4xl md:text-8xl font-normal" : "text-2xl font-bold"}
                `}>
                {title}
            </div>
            <div className="
            font-light 
            text-neutral-500 
            mt-2
            text-sm xl:text-lg">
                {subtitle}
            </div>
        </div>
    )
}

export default Heading;
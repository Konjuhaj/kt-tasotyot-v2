"use client";

interface HeadingProps {
    title: string;
    primary?: boolean;
    secondary?: boolean;
    subtitle?: string;
    center?: boolean
}

const Heading: React.FC<HeadingProps> = ({
    title,
    primary,
    secondary,
    subtitle,
    center
}) => {
    return (
        <div className={`
            w-full
            ${center ? "text-center" : "text-left"}
            ${primary || secondary ? "text-neutral-800" : "text-white"}        
        `}>
            <div className={`
                ${primary ? "text-6xl md:text-8xl font-normal" : "text-2xl font-bold"}
                `}>
                {title}
            </div>
            <div className="font-light text-neutral-500 mt-2">
                {subtitle}
            </div>
        </div>
    )
}

export default Heading;
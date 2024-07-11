"use client";

interface HeadingProps {
    title: string;
    primary?: boolean;
    secondary?: boolean;
    subtitle?: string;
    center?: boolean;
    size?: string;
}

const Heading: React.FC<HeadingProps> = ({
    title,
    primary,
    secondary,
    subtitle,
    center,
    size
}) => {
    return (
        <div className={`
            w-full
            ${center ? "text-center" : "text-left"}
            ${primary || secondary ? "text-neutral-800" : "text-white"}        
        `}>
            <div className={`
                ${size ? size
                    : primary ? "text-6xl md:text-8xl font-normal" : "text-4xl font-bold"}
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
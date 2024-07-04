"use client";

interface HeadingProps {
    title: string;
    primary?: boolean;
    subtitle?: string;
    center?: boolean
}

const Heading: React.FC<HeadingProps> = ({
    title,
    primary,
    subtitle,
    center
}) => {
    return (
        <div className={`
            ${center ? "text-center" : "text-left"}
            ${primary ? "text-black" : "text-white"}
        
        `}>
            <div className="text-2xl font-bold">
                {title}
            </div>
            <div className="font-light text-neutral-500 mt-2">
                {subtitle}
            </div>
        </div>
    )
}

export default Heading;
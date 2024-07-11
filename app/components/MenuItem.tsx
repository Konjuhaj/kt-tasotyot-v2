"use client";

interface MeniItemProps {
    onClick: () => void;
    title: string;
}

const MenuItem: React.FC<MeniItemProps> = ({
    onClick,
    title
}) => {
    return (
        <div
            onClick={onClick}
            className="
                py-4
                px-3
                hover:bg-neutral-100 md:hover:bg-transparent md:hover:opacity-80
                transition
                font-semibold
                md:text-slate-600
            "
        >{title}</div>
    )
}

export default MenuItem;
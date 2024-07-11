"use client";

import { IconType } from "react-icons";
import { FaArrowRight } from "react-icons/fa";

interface BulletPointProps {
    icon?: IconType,
    label: string,
    small?: boolean
}

const BulletPoint: React.FC<BulletPointProps> = ({
    icon: Icon = FaArrowRight,
    label,
    small
}) => {
    return (
        <div className={`
            flex
            ${small ? "flex-row" : "flex-col"}
            items-start
            justify-start
            gap-5
            mb-2
        `}>
            <Icon
                size={32}
            />
            <div className={`
                text-neutral-600
                ${small ? "" : "text-xl"}
                font-medium
            `}
            >
                {label}

            </div>
        </div >
    )
}

export default BulletPoint;
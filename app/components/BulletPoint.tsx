"use client";

import { IconType } from "react-icons";

interface BulletPointProps {
    icon: IconType,
    label: string,
    small?: boolean
}

const BulletPoint: React.FC<BulletPointProps> = ({
    icon: Icon,
    label,
    small
}) => {
    return (
        <div className={`
            flex
            ${small ? "flex-row" : "flex-col"}
            items-start
            justify-between
            gap-1
        `}>
            <Icon
                size={32}
            />
            <div className="
                text-neutral-800
                text-xl
                font-medium
            ">


                {label}

            </div>
        </div>
    )
}

export default BulletPoint;
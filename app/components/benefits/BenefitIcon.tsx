"use client"

import { IconType } from "react-icons";
import Heading from "../Heading";

interface BenefitIconProps {
    icon: IconType;
    title: string
    subtitle: string
}

const BenefitIcon: React.FC<BenefitIconProps> = ({
    icon: Icon,
    title,
    subtitle,
}) => {
    return (
        <div className="flex flex-col items-center justify-start gap-3">
            <Icon
                className="text-blue-600/80"
                size={44}
            />
            <Heading
                title={title}
                subtitle={subtitle}
                secondary
                center
            />
        </div>
    );
}

export default BenefitIcon;
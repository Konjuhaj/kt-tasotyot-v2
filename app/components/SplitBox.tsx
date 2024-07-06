"use client"

import { ReactNode } from "react";
import Container from "./Container";

interface SplitBoxProps {
    leftChild: ReactNode;
    rightChild: ReactNode;
    reverse?: boolean
    rounded?: boolean
}

const SplitBox: React.FC<SplitBoxProps> = ({
    leftChild,
    rightChild,
    reverse,
    rounded
}) => {
    return (
        <div className={`
            flex
            flex-col
            ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
            items-center
            justify-center
            gap-4
            p-4
            ${rounded ? "bg-[#E7EEF8] rounded-2xl" : ""}
        `}>
            <Container>
                {leftChild}
            </Container>
            <Container>
                {rightChild}
            </Container>
        </div>
    );
}

export default SplitBox;
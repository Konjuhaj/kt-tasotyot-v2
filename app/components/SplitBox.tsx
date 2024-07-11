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
        <Container>
            <div className={`
            flex
            flex-col
            ${reverse ? "lg:flex-row-reverse" : "lg:flex-row"}
            items-center
            justify-between
            gap-4
            p-6
            ${rounded ? "bg-[#E7EEF8] rounded-3xl" : ""}
        `}>
                <div className="basis-2/5">
                    <Container>
                        {leftChild}
                    </Container>
                </div>
                <div className="basis-3/5">
                    <Container>
                        {rightChild}
                    </Container>
                </div>
            </div>
        </Container>
    );
}

export default SplitBox;
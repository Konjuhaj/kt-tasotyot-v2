"use client";

interface ContainerProps {
    children: React.ReactNode,
    bottomMargin?: boolean
}

const Container: React.FC<ContainerProps> = ({
    children,
    bottomMargin = true

}
) => {
    return (
        <div className={`
        ${bottomMargin ? "mb-10" : ""}
        relative
        max-w-[2520]
        mx-auto
        xl:px-20
        md:px-10
        sm:px-2
        px-4
        `}
        >
            {children}
        </div>
    )
}

export default Container;
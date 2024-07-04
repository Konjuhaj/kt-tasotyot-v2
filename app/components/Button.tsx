"use client";

interface ButtonProps {
    label: string,
    onClick: (e: React.MouseEvent<HTMLButtonElement>) => void,
    outline?: boolean
    secondary?: boolean
    small?: boolean
    mobile?: boolean
}

const Button: React.FC<ButtonProps> = ({
    label,
    onClick,
    outline,
    secondary,
    small,
    mobile
}) => {
    return (
        <button
            onClick={onClick}
            className={`
                relative
                rounded-lg
                hover:opacity-80
                transition
                w-auto
                ${outline ? "bg-transparent" : "bg-blue-700"}
                ${outline ? "border-blue-500" : "border-blue-700"}
                ${outline ? "text-blue-500" : "text-white"}
                ${secondary ? "bg-white" : ""}
                ${secondary ? "border-none" : ""}
                ${secondary ? "text-blue-600" : ""}
                ${small ? "py-1" : "py-2"}
                ${small ? "px-2" : "px-4"}
                ${small ? "text-sm" : "text-md"}
                ${small ? "font-light" : "font-semibold"}
                ${small ? "border-[1px" : "border-2"}
                ${mobile ? "md:hidden" : "hidden md:block"}
                `
            }
        >
            {label}
        </button >
    )
}

export default Button;
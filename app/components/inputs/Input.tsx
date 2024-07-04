"use client";

import {
    FieldErrors,
    FieldValues,
    UseFormRegister
} from "react-hook-form"

interface InputProps {
    id: string;
    label: string;
    type?: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
    errors: FieldErrors;
}

const Input: React.FC<InputProps> = ({
    id,
    label,
    type = "text",
    disabled,
    required,
    register,
    errors
}) => {


    return (
        <div className="w-full relative">
            <input
                id={id}
                disabled={disabled}
                type={type}
                placeholder=" "
                {...register(id, { required })}
                className={`
                    peer
                    w-full
                    p-4
                    pt-6
                    font-light
                    bg-white
                    rounded-md
                    outline-none
                    trastition
                    disabled:opacity-70
                    disabled:cursor-not-allowed
                    ${errors[id] ? "border-red-500" : "border-neutral-300"}
                    ${errors[id] ? "focus:border-red-500" : "focus:border-blue-500"}
                    `}
            />
            <label className={`
                    absolute
                    text-md
                    duration-150
                    transform
                    -translate-y-3
                    top-5
                    z-10
                    origin-[0]
                    left-4
                    peer-placeholder-shown:text-lg
                    peer-placeholder-shown:translate-y-0
                    peer-focus:scale-75
                    peer-focus:-translate-y-4
                `}>
                {label}
            </label>
        </div>
    )
}

export default Input
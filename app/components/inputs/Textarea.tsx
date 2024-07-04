"use client";

import {
    FieldValues,
    UseFormRegister
} from "react-hook-form"

interface InputProps {
    id: string;
    label: string;
    disabled?: boolean;
    required?: boolean;
    register: UseFormRegister<FieldValues>;
}

const Textarea: React.FC<InputProps> = ({
    id,
    label,
    disabled,
    required,
    register,

}) => {


    return (
        <div className="w-full relative">
            <textarea
                id={id}
                disabled={disabled}
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
                    h-40
                    resize-none
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

export default Textarea
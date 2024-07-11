"use client";

import { useCallback, useState, useEffect } from "react";
import { AiOutlineMenu } from "react-icons/ai";
import MenuItem from "../MenuItem";
import useScreenSize from "@/app/hooks/useScreenSize";
import { useRouter } from "next/navigation";

const UserMenu = () => {
    const [isOpen, setIsOpen] = useState(false);
    const screenSize = useScreenSize();
    const router = useRouter();

    const toggleOpen = useCallback(() => {
        setIsOpen(value => !value)
    }, [])


    useEffect(() => {
        if (screenSize.width > 768) {
            setIsOpen(true)
        }
    }, [screenSize.width])


    return (
        <div className="relative z-30" >
            <div className="
                flex   
                flex-row-reverse md:flex-row
                items-center 
                justify-between">
                <div
                    onClick={toggleOpen}
                    className="
                    md:hidden
                    p-4
                    md:py-1
                    md:px-2
                    border-[1px]
                    flex
                    flex-row
                    items-center
                    gap-3
                    rounded-full
                    cursor-pointer
                    hover:shadow-md
                    transition
            ">
                    <AiOutlineMenu />
                </div>
                {isOpen && (
                    <div className="
                    absolute md:relative
                    rounded-xl md:rounded-none
                    shadow-md md:shadow-none
                    w-[48]
                    bg-white md:bg-transparent
                    top-12 md:top-0
                    right-0
                    overflow-hidden
                ">
                        <div className="
                    flex 
                    flex-col md:flex-row
                    cursor-pointer
                    relative">
                            <>
                                <MenuItem
                                    onClick={() => router.push("/")}
                                    title="Koti"
                                />
                                <MenuItem
                                    onClick={() => router.push("/palvelut")}
                                    title="Palvelut"
                                />
                                <MenuItem
                                    onClick={() => router.push("referenssit")}
                                    title="Referenssit"
                                />
                                <MenuItem
                                    onClick={() => router.push("/#benefits")}
                                    title="Edut"
                                />
                            </>
                        </div>
                    </div>
                )}
            </div>
        </div >
    )
}

export default UserMenu;
"use client"

import { useRouter } from "next/navigation";

const Logo = () => {
    const router = useRouter();
    return (
        <div
            onClick={() => router.push("/")}
            className="font-bold">
            KT-Tasotyöt Oy
        </div>
    )
}

export default Logo;
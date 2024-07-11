"use client";

import { useRouter } from "next/navigation";
import Button from "../Button";
import Container from "../Container"
import ContactModal from "../modal/ContactModal";
import Logo from "./Logo"
import UserMenu from "./UserMenu"

const Navbar = () => {
    const router = useRouter();
    return (
        <div className="fixed w-full top-0 z-50">
            <div className="
            p-4 
            border-b-[1px]
            bg-[#E7EEF8]
            shadow-sm
            ">
                <Container
                    bottomMargin={false}
                >
                    <div className="
                        flex
                        flex-row
                        items-center
                        justify-between
                        gap-3
                        md:gap-0
                    ">
                        <Logo />
                        <Button
                            onClick={() => router.push("/#contact")}
                            label="Ota Yhteyttä"
                            outline
                            customStyling="md:hidden"
                        />
                        <UserMenu />
                        <Button
                            onClick={() => router.push("/#contact")}
                            label="Ota Yhteyttä"
                            outline
                            customStyling="hidden md:block"
                        />

                    </div>
                </Container>
            </div>
        </div>
    )
}

export default Navbar;
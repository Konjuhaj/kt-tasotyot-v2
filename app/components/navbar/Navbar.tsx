"use client";

import Button from "../Button";
import Container from "../Container"
import ContactModal from "../modal/ContactModal";
import Logo from "./Logo"
import UserMenu from "./UserMenu"

const Navbar = () => {
    return (
        <div className="fixed w-full">
            <div className="
            p-4 
            border-b-[1px]
            bg-[#E7EEF8]
            shadow-sm
            ">
                <Container>
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
                            onClick={() => { }}
                            label="Ota Yhteyttä"
                            mobile
                            outline
                        />
                        <UserMenu />
                        <Button
                            onClick={() => { }}
                            label="Ota Yhteyttä"
                            outline
                        />

                    </div>
                </Container>
            </div>
            <ContactModal />
        </div>
    )
}

export default Navbar;
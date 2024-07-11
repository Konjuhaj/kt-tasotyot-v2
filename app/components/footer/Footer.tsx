"use client";

import { useRouter } from "next/navigation";
import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import MenuItem from "../MenuItem";

const Footer = () => {
    const router = useRouter();
    return (
        <div className="
            bg-[#E7EEF8]">
            <Container>
                <div className="
                flex
                flex-1
                flex-col md:flex-row
                items-center md:items-start
                justify-between
                gap-3
                p-6">
                    <div className="basis-2/4">
                        <Heading
                            title="Rakentamisen asiantuntijat"
                            subtitle="Poikkeuksellisten rakennuspalvelujen toimittaminen ajallaan."
                            centerMobile
                            secondary
                        />
                    </div>
                    <div className="
                        flex 
                        flex-col
                        items-center md:items-start
                        justify-between
                        basis-1/4">
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
                    </div>
                    <Button
                        onClick={() => router.push("/#contact")}
                        label="Ota Yhteyttä"
                        outline />
                </div>
                <div className="
                    flex
                    flex-col
                    w-full
                    text-center md:text-start
                    pb-6
                    px-4
                ">© Kaikki oikeudet pidätetään. rakennusalan asiantuntijoiden tekemä</div>
            </Container>
        </div>
    );
}

export default Footer;
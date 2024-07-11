"use client";

import Button from "../Button";
import Container from "../Container";
import Heading from "../Heading";
import MenuItem from "../MenuItem";

const Footer = () => {
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
                            secondary
                            center
                        />
                    </div>
                    <div className="
                        flex 
                        flex-col
                        items-center md:items-start
                        justify-between
                        basis-1/4">
                        <MenuItem
                            onClick={() => { }}
                            title="Koti"
                        />
                        <MenuItem
                            onClick={() => { }}
                            title="Palvelut"
                        />
                        <MenuItem
                            onClick={() => { }}
                            title="Referenssit"
                        />
                        <MenuItem
                            onClick={() => { }}
                            title="Edut"
                        />
                    </div>
                    <Button
                        onClick={() => { }}
                        label="Ota Yhteyttä"
                        outline />
                </div>
            </Container>
        </div>
    );
}

export default Footer;
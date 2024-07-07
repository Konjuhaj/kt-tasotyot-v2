"use client";

import { FaCheck, FaCog, FaLightbulb, FaRocket } from "react-icons/fa";
import Container from "../Container";
import Heading from "../Heading";
import Spacer from "../Spacer";
import BenefitIcon from "./BenefitIcon";

const Benefits = () => {
    return (
        <Container>
            <div className="
                flex
                flex-col
                items-center
                justify-between
                gap-3
            ">
                <Heading
                    title="Tärkeimät edut"
                    primary
                    center
                />
                <Spacer />
                <div className="flex flex-col md:flex-row gap-10">
                    <BenefitIcon
                        icon={FaCog}
                        title="Laadukas palvelu"
                        subtitle="Poikkeuksellinen laatu ja oikea-aikainen toimitus"
                    />
                    <BenefitIcon
                        icon={FaLightbulb}
                        title="Mukautettu lähestymistapa"
                        subtitle="Räätälöidyt ratkaisut yksilöllisiin tarpeisiin"
                    />
                    <BenefitIcon
                        icon={FaCheck}
                        title="Ympäristöystävällinen muotoilu"
                        subtitle="Kestävät rakennusratkaisut toteutettuu"
                    />
                    <BenefitIcon
                        icon={FaRocket}
                        title="Paras suorituskyky"
                        subtitle="Sitoutuminen huippuosaamiseen joka kerta"
                    />
                </div>
            </div>
        </Container>
    );
}

export default Benefits;
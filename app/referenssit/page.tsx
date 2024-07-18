import Head from "next/head";
import BulletPoint from "../components/BulletPoint";
import Container from "../components/Container";
import Heading from "../components/Heading";
import Spacer from "../components/Spacer";
import HeroBlank from "../components/hero/HeroBlank";
import SplitBox from "../components/SplitBox";
import Image from "next/image";

export default function Referenssit() {
    return (
        <>
            <HeroBlank
                title="Referenssit"
            />
            <Container>

                <Heading
                    title="Projektit 2024"
                    subtitle="Toimitilat"
                    secondary
                />
                <Spacer />
                <div className="p-4">

                    <BulletPoint
                        label="Loimaan Terveystalo, Turun Osuuskauppa"
                        small
                    />
                    <BulletPoint
                        label="Varastotilojen palo-osastointi, Turun Osuuskauppa."
                        small
                    />
                    <Spacer />
                    <Heading
                        title=""
                        subtitle="Julkisivukohteet"
                    />
                    <Spacer />
                    <BulletPoint
                        label="As Oy Puutarhakatu 17"
                        small
                    />
                    <BulletPoint
                        label="As Oy Kulmakivi"
                        small
                    />
                    <hr />

                    <Heading
                        title="Projektit 2022"
                        subtitle="Toimitilat"
                        secondary
                    />
                    <Spacer />
                    <BulletPoint
                        label="Loimaan Ykkösapteekki, Turun Osuuskauppa"
                        small
                    />
                    <BulletPoint
                        label="Loimaan kalustetukku, Turun Osuuskauppa"
                        small
                    />
                    <Spacer />
                    <Heading
                        title=""
                        subtitle="Julkisivukohteet"
                    />
                    <Spacer />
                    <BulletPoint
                        label="As Oy Valkoja"
                        small
                    />
                    <BulletPoint
                        label="As Oy Hintsa Knaapin katu 8"
                        small
                    />

                </div>
                <hr />
                <SplitBox
                    leftChild={(
                        <div className="flex flex-col items-center">
                            <Heading
                                title="Loimaan Ykkösapteekki"
                                subtitle="Loimaan Ykkösapteekki laajensi toimintaansa viereisiin toimitiloihin. VERSO rakensi uudet hoitohuoneet ja huoltotilan."
                                secondary
                                centerMobile
                            />
                        </div>
                    )}
                    rightChild={(
                        <div className="flex flex-col items-center">
                            <Image
                                alt="image"
                                height={100}
                                width={100}
                                src={"/images/showcase/building-front-1.jpg"}
                                className="h-80 w-80 object-cover rounded-3xl"
                            />
                        </div>
                    )}
                />
                <hr />
                <SplitBox
                    reverse
                    leftChild={(
                        <div className="flex flex-col items-center">
                            <Heading
                                title="Loimaan Ykkösapteekki"
                                subtitle="Loimaan Ykkösapteekki laajensi toimintaansa viereisiin toimitiloihin. VERSO rakensi uudet hoitohuoneet ja huoltotilan."
                                secondary
                                centerMobile
                            />
                        </div>
                    )}
                    rightChild={(
                        <div className="flex flex-col items-center">
                            <Image
                                alt="image"
                                height={100}
                                width={100}
                                src={"/images/showcase/building-front-1.jpg"}
                                className="h-80 w-80 object-cover rounded-3xl"
                            />
                        </div>
                    )}
                />
            </Container>
        </>
    );
};

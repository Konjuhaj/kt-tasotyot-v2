"use client"

import SplitBox from "../SplitBox"
import Heading from "../Heading"
import BulletPoint from "../BulletPoint"
import { FaArrowRight, FaCog, FaLightbulb, FaLocationArrow, FaMailBulk } from "react-icons/fa"
import Spacer from "../Spacer"

const Services = () => {
    return (
        <SplitBox
            leftChild={(
                <div className="
                    flex
                    flex-col
                    items-start
                    justify-between
                    gap-3
                ">
                    <Heading
                        title="Palvelumme"
                        secondary
                    />
                    <Spacer />
                    <BulletPoint
                        label="Innovatiivinen suunnittelu ja palvelu"
                        icon={FaArrowRight}
                        small
                    />
                    <BulletPoint
                        label="Tehokkaat projektinhallintapalvelut"
                        icon={FaArrowRight}
                        small
                    />
                    <BulletPoint
                        label="Laatua, johon voit luottaa"
                        icon={FaArrowRight}
                        small
                    />
                </div>
            )}
            rightChild={(
                <div className="
                    grid
                    grid-rows-4 md:grid-rows-2
                    grid-cols-1 md:grid-cols-2
                    gap-4
                ">
                    <div className="
                        bg-green-100
                        rounded-3xl
                        p-5
                    ">
                        <FaCog
                            className="text-green-600"
                            size={44}
                        />
                        <Heading
                            title="Asuinrakentamisen ratkaisut"
                            subtitle="Kattavat rakennusratkaisut kaikkiin tarpeisiin"
                            secondary
                            size="text-2xl font-semibold"
                        />
                    </div>
                    <div className="
                        relative
                        md:top-5
                        bg-yellow-100
                        rounded-3xl
                        p-5
                    ">
                        <FaMailBulk
                            className="text-yellow-500"
                            size={44}
                        />
                        <Heading
                            title="Asuinrakentamisen ratkaisut"
                            subtitle="Kattavat rakennusratkaisut kaikkiin tarpeisiin"
                            secondary
                            size="text-2xl font-semibold"
                        />
                    </div>
                    <div className="
                        bg-blue-100
                        rounded-3xl
                        p-5
                        md:h-48
                    ">
                        <FaLightbulb
                            className="text-blue-800"
                            size={44}
                        />
                        <Heading
                            title="Asuinrakentamisen ratkaisut"
                            subtitle="Kattavat rakennusratkaisut kaikkiin tarpeisiin"
                            secondary
                            size="text-2xl font-semibold"
                        />
                    </div>
                    <div className="
                        relative
                        md:top-5
                        bg-red-100
                        rounded-3xl
                        p-5
                        md:h-52
                    ">
                        <FaLocationArrow
                            className="text-red-400"
                            size={44}
                        />
                        <Heading
                            title="Asuinrakentamisen ratkaisut"
                            subtitle="Kattavat rakennusratkaisut kaikkiin tarpeisiin"
                            secondary
                            size="text-2xl font-semibold"
                        />
                    </div>

                </div>
            )}
        />
    )
}

export default Services
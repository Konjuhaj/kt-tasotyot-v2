"use client";

import Slide from "./Slide";
import Slideshow from "./Slideshow";

const slides = [
    <Slide
        imgSrc="/images/hero.jpg"
        name="Matti Meikäläinen"
        title="Toimitusjohtaja"
        quote="Suosittelen tämän yrityksen palvelua"
    />,
    <Slide
        imgSrc="/next.svg"
        name="Matti Möttönen"
        title="Markkinointijohtaja"
        quote="Erittäin hyvä palvelu"
    />,
    <Slide
        imgSrc="/vercel.svg"
        name="Mirka Meikäläinen"
        title="Presidentti"
        quote="Kiitollinen palvelu. Ei ole mitään ongelmia. Suosittelen palvelun kaikille alasta kiinnostuneille."
    />
]
const Testimony = () => {
    return (
        <Slideshow
            slides={slides}
        />
    )
}

export default Testimony;
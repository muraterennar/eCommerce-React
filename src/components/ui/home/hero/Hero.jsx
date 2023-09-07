import React from 'react';
import HeroImage from "./HeroImage";
import HeroText from "./HeroText";

function Hero() {
    return (
        <section className={"h-[90vh] w-full bg-slate-100 relative"}>
            <div className={"flex justify-between items-center h-full bg-baseColor rounded-md"}>
                <HeroText className={"w-full text-center text-white inline-block z-10 cursor-default"} textTitle={"new collection"} />
                <HeroImage className={"h-full w-full z-0 relative"} />
            </div>
        </section>
    );
}

export default Hero;
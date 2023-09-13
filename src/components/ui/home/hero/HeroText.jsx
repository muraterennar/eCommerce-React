import React from 'react';
import Button from "../../../../tools/buttons/Button";
import {NavLink} from "react-router-dom";

function HeroText({className, textTitle}) {
    return (
        <div className={className}>
            <div className={"w-10/12 mx-auto"}>
                <h3 className={"text-start px-8 text-darkColor font-extralight"}>Summer 2023</h3>
                <h1 className={"text-6xl flex-nowrap font-bold text-darkColor antialiased capitalize tracking-[.3rem]"}>{textTitle}</h1>
                <p className={"text-xl mt-8 text-darkColor antialiased"}>
                    We know how large objects will act, <br/>
                    but things on a small scale.
                </p>
            </div>
            <NavLink to={"/products"}><Button className={"mt-20 px-8 duration-100 hover:bg-opacity-80 py-3 bg-green-500 antialiased"}> Shop Now </Button></NavLink>
        </div>
    );
}

export default HeroText;
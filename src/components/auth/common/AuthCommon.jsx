import React from 'react';
import {NavLink} from "react-router-dom";

function AuthCommon({link, linkText}) {
    return (

        <div className={"flex flex-col justify-center items-center gap-3 mt-32"}>
            <div className={"capitalize antialiased text-sm font-semibold cursor-default"}>{linkText} <NavLink className={"underline text-white font-normal underline-offset-2"} to={`/auth/${link}`}>{link}</NavLink></div>
            <div className={"capitalize antialiased text-sm font-semibold cursor-default"}>Click to return to the <NavLink to={"/"} className={"underline text-white font-normal underline-offset-2"}> home page</NavLink></div>
        </div>
    );
}

export default AuthCommon;
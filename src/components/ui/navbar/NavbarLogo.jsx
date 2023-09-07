import React from 'react';
import {NavbarLog} from "../../../constants/ui-constants";
import {NavLink} from "react-router-dom";

function NavbarLogo({className}) {
    return (
        <div className={className}>
            <NavLink to={"/"}>
                <img src={NavbarLog} className={"w-52 h-auto"} alt="logo" />
            </NavLink>

        </div>
    );
}

export default NavbarLogo;
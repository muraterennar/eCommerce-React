import React from 'react';
import NavbarLogo from "./NavbarLogo";
import NavbarIcons from "./NavbarIcons";
import NavbarSearch from "./NavbarSearch";

function Navbar() {
    return (
        <nav className={"flex justify-between items-center w-full h-20 px-10 shadow relative"}>
            <NavbarLogo className={"w-52"} />
            <NavbarSearch className={"w-6/12"} />
            <NavbarIcons />
        </nav>
    );
}

export default Navbar;
import React from 'react';
import Icons from "../../../tools/icons/Icons";
import {HeartIcon, ShoppingBagIcon, UserIcon} from "../../../constants/ui-constants";

function NavbarIcons() {
    return (
        <div className={"flex justify-center items-center gap-6"}>
             <Icons>{UserIcon}</Icons>
             <Icons>{HeartIcon}</Icons>
            <Icons className={"relative"}>{ShoppingBagIcon}</Icons>
        </div>
    );
}

export default NavbarIcons;
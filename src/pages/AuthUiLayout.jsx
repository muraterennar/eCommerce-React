import React from 'react';
import {NavbarLog} from "../constants/ui-constants";
import {Outlet} from "react-router-dom";

function AuthUiLayout() {

    return (
        <div className={"bg-indigo-400 min-h-screen text-darkColor flex flex-col justify-center items-center gap-24"}>
            <img src={NavbarLog} alt={"auth_logo"} className={"w-[400px] h-auto p-3 bg-white rounded-md"} />
            <Outlet/>
        </div>
    );
}

export default AuthUiLayout;
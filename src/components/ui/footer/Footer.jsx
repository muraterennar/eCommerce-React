import React from 'react';
import {NavbarLog} from "../../../constants/ui-constants";

function Footer() {
    return (
        <div className={"bg-footerColor mt-32 p-5 text-gray-500"}>
            <div className={"flex justify-around items-start h-full p-6"}>
                <div>
                    <img src={NavbarLog} className={"w-40 h-auto"} alt={"logo"} />
                </div>
                <div className={"flex flex-col items-start justify-center gap-4"}>
                        <h1 className={"text-sm font-bold cursor-default"}>Company</h1>
                        <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Marketing</p>
                        <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Analytics</p>
                        <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Commerce</p>
                        <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Insights</p>
                </div>
                <div className={"flex flex-col items-start justify-center gap-4"}>
                    <h1 className={"text-sm font-bold cursor-default"}>Support</h1>
                    <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Pricing</p>
                    <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Documentation</p>
                    <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Guides</p>
                    <p className={"text-xs hover:text-gray-600 cursor-pointer"}>API Status</p>
                </div>
                <div className={"flex flex-col items-start justify-center gap-4"}>
                    <h1 className={"text-sm font-bold cursor-default"}>Company</h1>
                    <p className={"text-xs hover:text-gray-600 cursor-pointer"}>About</p>
                    <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Blog</p>
                    <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Jobs</p>
                    <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Press</p>
                    <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Partners</p>
                </div>
                <div className={"flex flex-col items-start justify-center gap-4"}>
                    <h1 className={"text-sm font-bold cursor-default"}>Legal</h1>
                    <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Claim</p>
                    <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Privacy</p>
                    <p className={"text-xs hover:text-gray-600 cursor-pointer"}>Terms</p>
                </div>
            </div>
            <hr className={"w-11/12 my-6 mx-auto"} />
            <div>
                <p className={"text-center text-gray-500 text-sm"}>© 2020 - 2023 Your Company, Inc. All rights reserved.</p>
            </div>
        </div>
    );
}

export default Footer;
import React from 'react';
import Search from "../../../tools/search/Search";

function NavbarSearch({className}) {
    return (
        <div className={className}>
            <Search className={"flex items-center justify-end relative"} inputClass={"w-full bg-slate-100 outline-none p-2 rounded-md px-5"} iconClassName={"absolute right-4"} placeholder={"Search..."}/>
        </div>
    );
}

export default NavbarSearch;

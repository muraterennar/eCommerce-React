import React from 'react';
import {SearchIcon} from "../../constants/ui-constants";

function Search({className, inputClass, iconClassName, placeholder}) {
    return (// <label htmlFor={"inputSearch"} className={className}>
        //     <input id={"inputSearch"} type="text" className={"w-full h-full px-4 py-2 bg-slate-100 rounded-md outline-none"} placeholder={"Search..."} />
        //     <button className={iconClassName}>
        //         <Icons>
        //             {SearchIcon}
        //         </Icons>
        //     </button>
        // </label>

        <label className={className}>
            <span
                className={iconClassName}>
             {SearchIcon}
            </span>
            <input type="text"
                   className={inputClass}
                   placeholder={placeholder}/>
        </label>);
}

export default Search;
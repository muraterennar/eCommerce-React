import React from 'react';
import {setSort} from "../../redux/slices/sortSlice";
import {useDispatch} from "react-redux";

function Shorting({setSortHandle}) {

    const dispatch = useDispatch();

    return (
        <div className={"flex justify-end items-center p-4 mt-10 bg-gray-100"}>

            <label htmlFor="selectSort"></label>
            <select
                id="selectSort"
                name="selectSort"
                autoComplete="country-name"
                className="block px-5 py-2 rounded-md border border-gray-300 outline-none text-gray-900 shadow-sm sm:max-w-xs sm:text-sm sm:leading-6 capitalize"
                onChange={(e) => setSortHandle ? setSortHandle(e.target.value) : dispatch(setSort(e.target.value))
                }
            >
                <option value={"null"}>Sıralama</option>
                <option className={"antialiased"} value={"inc"}>artan</option>
                <option className={"antialiased"} value={"dec"}>artan</option>
            </select>
        </div>
    );
}

export default Shorting;
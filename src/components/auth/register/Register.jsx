import React, {useEffect, useState} from 'react';
import {eyeIcon, eyeOffIcon} from "../../../constants/ui-constants";
import {NavLink} from "react-router-dom";
import AuthCommon from "../common/AuthCommon";
import {useForm} from "react-hook-form";
import {fakeTokenGenerator} from "../../../tools/fakeTokenHandler/fakeTokenGenerator";

function Register() {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const onSubmit = (data) => {
    };

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    }

    const randomIdGenerator = () => {
        const min = 10000;
        const max = 99999;
        const randomNumber = Math.floor(Math.random() * (max - min + 1)) + min;
        return randomNumber;
    }


    return (
        <div className={"flex sm:flex flex-col justify-center items-center p-10"}>
            <form onSubmit={handleSubmit(onSubmit)}
                  className={"relative w-[450px] bg-white rounded-md shadow p-8 flex flex-col justify-center items-start gap-8"}>

                {/* ------- FIRST NAME -------- */}
                <div className={"w-full group"}>
                    <label htmlFor="firstname"
                           className={"block group-hover:text-indigo-600 duration-100 text-sm font-medium leading-6 text-gray-900 capitalize antialiased"}>Firstname</label>
                    <input id={"firstname"} name={"firstname"} {...register("firstname", {
                        required: true,
                        minLength: 5,
                        maxLength: 50,
                    })}
                           className={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"}/>
                    {errors?.firstname &&
                        <span
                            className={"text-indigo-500 text-xs rounded-md w-full block mt-1 px-2 py-1"}>Invalid Firstname</span>}
                </div>

                {/* ------- FIRST NAME -------- */}
                <div className={"w-full group"}>
                    <label htmlFor="lastname"
                           className={"block group-hover:text-indigo-600 duration-100 text-sm font-medium leading-6 text-gray-900 capitalize antialiased"}>Lastname</label>
                    <input id={"lastname"} name={"lastname"} {...register("lastname", {
                        required: true,
                        minLength: 5,
                        maxLength: 50,
                    })}
                           className={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"}/>
                    {errors?.firstname &&
                        <span
                            className={"text-indigo-500 text-xs rounded-md w-full block mt-1 px-2 py-1"}>Invalid Lastname</span>}
                </div>

                {/* ------ EMAIL -------- */}
                <div className={"w-full group"}>
                    <label htmlFor="email"
                           className={"block group-hover:text-indigo-600 duration-100 text-sm font-medium leading-6 text-gray-900 capitalize antialiased"}>Email</label>
                    <input id={"email"} name={"email"} {...register("email", {
                        required: true,
                        pattern: {value: /^\S+@\S+$/i, message: "Invalid Email", maxLength: 50, minLength: 5}
                    })}
                           className={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"}/>
                    {errors?.email &&
                        <span
                            className={"text-indigo-500 text-xs rounded-md w-full block mt-1 px-2 py-1"}>Invalid Mail</span>}
                </div>

                {/* ------- PASSWORD -------- */}
                <div className={"w-full group"}>
                    <label htmlFor="password"
                           className={"lock group-hover:text-indigo-600 duration-100 text-sm font-medium leading-6 text-gray-900 capitalize antialiased"}>Password</label>

                    <div className="mt-2 relative">
                        <input id={"password"} name={"password"}
                               type={isPasswordVisible ? "text" : "password"} {...register("password", {
                            required: true,
                            minLength: 6,
                            maxLength: 16,
                            message: "Invalid Password"
                        })}
                               className={"block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 px-3"}/>
                        {errors?.password &&
                            <span className={"text-indigo-500 text-xs rounded-md w-full block mt-1 px-2 py-1"}>Invalid Password</span>}

                        {/* SHOW AND HIDE PASSWORD BUTTON */}
                        <button type={"button"} onClick={togglePasswordVisibility}
                                className={"absolute top-1.5 right-2 text-indigo-500"}>
                            {isPasswordVisible ?
                                (eyeOffIcon)
                                :
                                (eyeIcon)
                            }
                        </button>
                    </div>
                </div>

                <input type="submit" className={"bg-indigo-400 px-6 py-2 text-white rounded-md"} value={"Register"}/>
            </form>

            <AuthCommon link={"login"} linkText={"to "}/>
        </div>
    );
}

export default Register;
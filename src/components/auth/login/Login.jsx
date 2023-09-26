import React, {useState} from 'react';
import AuthCommon from "../common/AuthCommon";
import {useForm} from "react-hook-form";
import {eyeIcon, eyeOffIcon} from "../../../constants/ui-constants";
import {NavLink} from "react-router-dom";


function Login() {

    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const {
        register,
        handleSubmit,
        formState: {errors},
    } = useForm()

    const onSubmit = (data) => console.log(data, errors);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible((prevState) => !prevState);
    }


    return (
        <div className={"flex sm:flex flex-col justify-center items-center p-10"}>
            <form onSubmit={handleSubmit(onSubmit)}
                  className={"relative w-[450px] bg-white rounded-md shadow p-8 flex flex-col justify-center items-start gap-8"}>

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

                <div className="w-full flex justify-between items-center mt-5">
                    <div className={"flex justify-between items-center gap-2"}>
                        <input
                            type="checkbox"
                            name="checkbox"
                            id="checkbox"
                            autoComplete="checkbox"
                            className=" py-1.5 text-indigo-500 outline-none rounded-full px-3"
                        />
                        <label htmlFor="checkbox">
                            Remember me
                        </label>
                    </div>

                    <div className={"p-2"}>
                        <NavLink to={"/"} className={"underline underline-offset-2"}>Forget Password</NavLink>
                    </div>
                </div>

                <input type="submit" className={"bg-indigo-400 px-6 py-2 text-white rounded-md"} value={"Login"}/>
            </form>

            <AuthCommon link={"register"} linkText={"to "}/>
        </div>
    );
}

export default Login;
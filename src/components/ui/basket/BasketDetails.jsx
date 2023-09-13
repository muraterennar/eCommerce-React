import React, {useEffect} from 'react';
import ContainerPage from "../../../tools/container/ContainerPage";
import {useDispatch, useSelector} from "react-redux";
import {getCartTotal, removeFromCart} from "../../../redux/slices/cartSlice";
import {NavLink} from "react-router-dom";

function BasketDetails() {
    const shippingEsmite = 5;
    const taxEsmite = 8;

    const dispatch = useDispatch();
    const {cart, totalAmount} = useSelector(state => state.cart);


    useEffect(() => {
        dispatch(getCartTotal());
    }, [cart]);

    const removeFromCartHandle = (id) => {
        dispatch(removeFromCart(id));
    };



    return (
        <ContainerPage>
            <div className={"mt-12"}>
                <h1 className={"text-4xl font-semibold antialiased px-0 py-8"}>Sopping Cart</h1>

                <div className={"flex justify-between items-start h-auto gap-12"}>
                    <div className={"flex flex-col justify-between items-start w-8/12"}>
                        {
                            cart.length > 0 ? (
                                    cart?.map((item, index) => (
                                        <div key={index}
                                             className={"flex justify-start items-start gap-5 border-t-2 py-8"}>
                                            <img src={item.image} alt={"product"}
                                                 className={"object-center border p-4 object-contain w-3/12 h-auto rounded-md"}/>
                                            <div className={"flex flex-col gap-5 justify-between items-start"}>
                                                <div className={"w-full"}>
                                                    <h1 className={"text-md text-start font-semibold antialiased capitalize"}>{item?.title}</h1>
                                                    <p className={"text-gray-500 font-semibold text-xs capitalize"}>{item?.category}</p>
                                                </div>
                                                <p className={"text-darkColor font-medium text-lg"}>${item?.price}</p>
                                            </div>
                                            <button onClick={() => removeFromCartHandle(item?.id)}
                                                    className={"text-gray-400"}>
                                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                                     strokeWidth={1.5} stroke="currentColor" className="w-4 h-4">
                                                    <path strokeLinecap="round" strokeLinejoin="round"
                                                          d="M6 18L18 6M6 6l12 12"/>
                                                </svg>
                                            </button>
                                        </div>
                                    ))
                                )
                                :
                                (<div>Empty Cart ...</div>)
                        }
                    </div>

                    <div className={"bg-gray-50 rounded-md p-12 flex flex-col justify-between items-start gap-4 w-4/12"}>
                        <h1 className={"text-lg font-medium"}>Order Summary</h1>
                        <div className={"flex flex-col justify-start items-start w-full gap-1"}>
                            <div
                                className={"flex justify-between items-start w-full border-b py-4 text-sm text-gray-500"}>
                                <p>Subtotal</p> <span>${totalAmount}</span></div>
                            <div
                                className={"flex justify-between items-start w-full border-b py-4 text-sm text-gray-500"}>
                                <p>Shipping estimate</p> <span>${shippingEsmite}</span></div>
                            <div
                                className={"flex justify-between items-start w-full border-b py-4 text-sm text-gray-500"}>
                                <p>Tax estimate</p> <span>${taxEsmite}</span></div>
                            <div className={"flex flex-col justify-between items-center w-full mt-2 gap-5"}>
                                <div className={"flex justify-between items-start w-full"}>
                                    <p className={"cursor-lg"}>Order total</p>
                                    <span>${totalAmount > 0 ? totalAmount + (shippingEsmite + taxEsmite) : 0}</span>
                                </div>
                                <NavLink to={"/payment"} className={"w-full"}>
                                    <button
                                        className={"transition-colors duration-150 bg-indigo-600 hover:bg-indigo-500 w-full text-white py-3 rounded-md"}>Payment
                                    </button>
                                </NavLink>

                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </ContainerPage>

    );
}

export default BasketDetails;
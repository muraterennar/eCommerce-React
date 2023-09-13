import React, {useEffect} from 'react';
import Icons from "../../../tools/icons/Icons";
import {HeartIcon, ShoppingBagIcon, UserIcon} from "../../../constants/ui-constants";
import {useDispatch, useSelector} from "react-redux";
import {getCartTotal} from "../../../redux/slices/cartSlice";

function NavbarIcons() {
    const dispatch = useDispatch();
    const {cart, totalAmount,itemCount} = useSelector(state => state.cart);

    console.log(cart, "cart");
    console.log(totalAmount, "totalAmount");
    console.log(itemCount, "itemCount");

    useEffect(() => {
        dispatch(getCartTotal())
    }, []);

    return (
        <div className={"flex justify-center items-center gap-6"}>
            <Icons>{UserIcon}</Icons>
            <Icons>{HeartIcon}</Icons>
            <Icons className={"relative"} cartItemLength={itemCount}>{ShoppingBagIcon}</Icons>
        </div>
    );
}

export default NavbarIcons;
import React, {useEffect} from 'react';
import Icons from "../../../tools/icons/Icons";
import {HeartIcon, ShoppingBagIcon, UserIcon} from "../../../constants/ui-constants";
import {useDispatch, useSelector} from "react-redux";
import {getCartTotal} from "../../../redux/slices/cartSlice";
import {NavLink} from "react-router-dom";

function NavbarIcons() {
    const dispatch = useDispatch();
    const {itemCount} = useSelector(state => state.cart);

    useEffect(() => {
        dispatch(getCartTotal())
    }, []);

    return (
        <div className={"flex justify-center items-center gap-6"}>
            <NavLink to={"/auth/login"}><Icons>{UserIcon}</Icons></NavLink>
            <Icons>{HeartIcon}</Icons>
            <Icons className={"relative"} cartItemLength={itemCount}>{ShoppingBagIcon}</Icons>
        </div>
    );
}

export default NavbarIcons;
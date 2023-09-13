import React, {useEffect, useState} from 'react';
import {useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductDetails} from "../../../../api/getRequest/getProductDetails";
import {STATUS} from "../../../../utils/status";
import Loading from "../../../../tools/loading/Loading";
import ContainerPage from "../../../../tools/container/ContainerPage";
import {addToCart} from "../../../../redux/slices/cartSlice";

function ProductDetails() {
    const {id} = useParams();
    const dispatch = useDispatch();
    const {productDetail, productDetailStatus} = useSelector(state => state.products);
    const {cart} = useSelector(state => state.cart);

    const [quantity, setQuantity] = useState(1);

    useEffect(() => {
        dispatch(getProductDetails(id));
    }, [dispatch]);

    const negativeCountHandle = () => {
        if (quantity > 1) setQuantity(quantity - 1)
    }

    const positiveCountHandle = () => {
        if (quantity < productDetail?.rating?.count) setQuantity(quantity + 1)
    }

    const addToCartHandle = () => {
        dispatch(addToCart({
            id: productDetail?.id,
            title: productDetail?.title,
            category: productDetail?.category,
            image: productDetail?.image,
            price: productDetail?.price,
            quantity: quantity,
        }))
    };


    return (<div>
        {productDetailStatus === STATUS.IDLE ? <Loading/> : productDetailStatus === STATUS.SUCCESS ?
            <ContainerPage>
                <div className={"flex justify-between items-start gap-6 mt-20 h-[66vh]"}>
                    <div className={"p-7 border rounded-md shadow w-full h-full"}>
                        <img src={productDetail?.image} alt={productDetail?.title}
                             className={"w-full h-full object-contain object-center transition-all duration-200 hover:scale-[1.08]"}/>
                    </div>


                    <div
                        className={"p-8 rounded shadow w-full h-full text-start flex flex-col items-center justify-between"}>
                        <div>
                            <h1 className={"text-2xl font-bold text-darkColor antialiased capitalize"}>{productDetail.title}</h1>
                            <h3 className={"capitalize text-sm font-semibold bg-baseColor inline-block px-4 py-2 rounded-md mt-2"}>{productDetail?.category}</h3>
                            <div>
                                <div className={"w-10/12 border-darkColor rounded-full border my-4 "}></div>
                                <p className={"text-sm antialiased text-start text-darkColor"}>
                                    {productDetail?.description}
                                </p>
                                <p className={"mt-4"}>Rating: <span
                                    className={"bg-baseColor px-2 rounded-full"}>{productDetail?.rating?.rate}</span>
                                </p>
                                <p className={"mt-4"}>Count: <span
                                    className={"px-2"}>{productDetail?.rating?.count}</span></p>
                                <p className={"text-4xl antialiased font-semibold  mt-6"}>{"$" + productDetail?.price}</p>
                            </div>
                        </div>


                        <div className={"flex justify-between items-center w-full mt-20"}>
                            <div className={"flex justify-between items-center gap-4"}>
                                <button onClick={() => negativeCountHandle()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M19.5 12h-15"/>
                                    </svg>
                                </button>
                                <div className={"text-xl"}>{quantity}</div>
                                <button onClick={() => positiveCountHandle()}>
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"
                                         strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round"
                                              d="M12 4.5v15m7.5-7.5h-15"/>
                                    </svg>
                                </button>
                            </div>
                            <button onClick={addToCartHandle}
                                    className={"bg-green-400 text-md px-4 py-3 rounded-md text-white transition-all duration-150 hover:scale-[1.06]"}>Sepete
                                Ekle
                            </button>
                        </div>
                    </div>
                </div>
            </ContainerPage>

            : "Error"}
    </div>);
}

export default ProductDetails;
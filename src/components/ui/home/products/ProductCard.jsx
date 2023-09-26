import React from 'react';
import Loading from "../../../../tools/loading/Loading";
import {STATUS} from "../../../../utils/status";
import {NavLink} from "react-router-dom";

function ProductCard({products, productStatus, sort}) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 my-10 lg:max-w-7xl lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight text-center text-gray-900">Products</h2>

                <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {
                        productStatus === STATUS.IDLE ? <Loading/>
                            :
                            products?.sort((a, b) => sort === "inc" ? a.price - b.price : sort === "dec" ? b.price - a.price : null)?.map((product) => (

                                <div key={product?.id}
                                     className="group relative border border-gray-200 shadow transition-all duration-200 hover:shadow-lg hover:-translate-y-3 rounded-md p-4 outline-baseColor">
                                    <div
                                        className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md bg-white lg:aspect-none group-hover:opacity-75 lg:h-80">
                                        <img
                                            src={product ? product.image : undefined}
                                            alt={product?.title}
                                            className="h-full w-full object-contain object-center lg:h-full lg:w-full"
                                        />
                                    </div>
                                    <div className="mt-4 flex justify-between flex-nowrap">
                                        <div>
                                            <h3 className="text-sm text-gray-700 capitalize">
                                                <NavLink to={`product-detail/${product?.id}`} className={"text-sm"}>
                                                    <span aria-hidden="true" className="absolute inset-0"/>
                                                    {product?.title.slice(0, 16)}
                                                </NavLink>
                                            </h3>
                                            <p className="mt-1 text-xs text-gray-500 capitalize">{product?.category}</p>
                                        </div>
                                        <div className={"w-auto"}>
                                            <p className="mt-1 text-xs px-2 py-1 text-gray-500 capitalize bg-baseColor text-center rounded-full">{product?.rating?.rate}</p>
                                        </div>

                                    </div>
                                    <div className={"mt-8 float-right"}>
                                        <p className="text-sm font-semibold text-darkColor antialiased">{"$" + product?.price}</p>
                                    </div>
                                </div>
                            ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
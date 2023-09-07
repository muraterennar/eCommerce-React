import React from 'react';
import Button from "../../../../tools/buttons/Button";
import {NavLink} from "react-router-dom";

function ProductCard({products}) {
    return (
        <div className="bg-white">
            <div className="mx-auto max-w-2xl px-4 sm:px-6 my-10 lg:max-w-7xl lg:px-8">
                <h2 className="text-4xl font-bold tracking-tight text-center text-gray-900">Products</h2>

                <div className="mt-6 grid grid-cols-3 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
                    {products?.map((product) => (

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
                                        <a href={"/"} className={"text-sm"}>
                                            <span aria-hidden="true" className="absolute inset-0"/>
                                            {product?.title.slice(0, 16)}
                                        </a>
                                    </h3>
                                    <p className="mt-1 text-xs text-gray-500 capitalize">{product?.category}</p>
                                </div>
                                <p className="text-sm font-medium text-gray-900">{"$" + product?.price}</p>
                            </div>
                            <div className={"mt-8"}>
                                <Button className={"bg-green-500 px-5 py-2 rounded-md text-white float-right"}>
                                    Sepete Ekle
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}

export default ProductCard;
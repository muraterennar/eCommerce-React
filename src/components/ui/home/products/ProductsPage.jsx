import React, {useEffect} from 'react';
import {NavLink, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {getProductsByCategoryName} from "../../../../api/getRequest/getProductsByCategoryName";
import {STATUS} from "../../../../utils/status";
import Loading from "../../../../tools/loading/Loading";
import Button from "../../../../tools/buttons/Button";
import {getProducts} from "../../../../api/getRequest/getProducts";
import Shorting from "../../../../tools/shorting/Shorting";

function ProductsPage() {

    const {categoryName} = useParams();
    const dispatch = useDispatch();
    const {products, productsStatus} = useSelector(state => state.products);
    const {sort} = useSelector(state => state.sort);

    console.log(sort)

    useEffect(() => {
        if (categoryName) {
            dispatch(getProductsByCategoryName(categoryName))
        } else {
            dispatch(getProducts())
        }
    }, [dispatch, categoryName]);


    return (
        <div className="bg-white">
            <Shorting/>
            <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
                <h2 className="text-3xl mb-10 antialiased font-semibold text-center capitalize border-b border-gray-300 py-3">{categoryName ? categoryName : "" + " Products"}</h2>

                <div
                    className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
                    {productsStatus === STATUS.IDLE ? <Loading/>
                        :
                        products?.map((product) => (
                            <NavLink key={product?.id} to={`/product-detail/${product?.id}`}
                                     className={"group shadow-md transition-shadow duration-200 p-4 rounded-md cursor-default hover:shadow-lg"}>
                                <div
                                    className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-white xl:aspect-h-8 xl:aspect-w-7">
                                    <img
                                        src={product?.image}
                                        alt={product?.title}
                                        className="h-full w-full object-contain object-center group-hover:opacity-75"
                                    />
                                </div>
                                <h3 className="mt-4 text-sm text-gray-700">{product?.title.slice(0, 34)}</h3>
                                <p className="mt-1 text-lg font-medium text-gray-900">{"$" + product.price}</p>
                                <Button className={"bg-green-400 float-right px-5 py-2 rounded-md text-white"}>Sepete
                                    Ekle</Button>
                            </NavLink>
                        ))
                    }

                </div>
            </div>
        </div>
    );
}

export default ProductsPage;
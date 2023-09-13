import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../../../api/getRequest/getProducts";
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";

function Products({sort}) {

    const dispatch = useDispatch();
    const {products, productsStatus} = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 8;

    const endOffset = itemOffset + itemsPerPage;
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        setItemOffset(newOffset);
    };

    return (
        <>
            <ProductCard sort={sort} products={currentItems} productStatus={productsStatus} />

            <ReactPaginate
                className="paginate"
                breakLabel="..."
                nextLabel=">"
                onPageChange={handlePageClick}
                pageRangeDisplayed={5}
                pageCount={pageCount}
                previousLabel="<"
                renderOnZeroPageCount={null}
            />
        </>
    );
}

export default Products;

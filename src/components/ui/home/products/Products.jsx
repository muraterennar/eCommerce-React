import React, {useEffect, useState} from 'react';
import {useDispatch, useSelector} from "react-redux";
import {getProducts} from "../../../../api/getRequest/getProducts";
import {STATUS} from "../../../../utils/status";
import Loading from "../../../../tools/loading/Loading";
import ProductCard from "./ProductCard";
import ReactPaginate from "react-paginate";

function Products() {

    const dispatch = useDispatch();
    const {products, productsStatus} = useSelector(state => state.products);

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);

    const [itemOffset, setItemOffset] = useState(0);

    const itemsPerPage = 8;

    const endOffset = itemOffset + itemsPerPage;
    console.log(`Loading items from ${itemOffset} to ${endOffset}`);
    const currentItems = products.slice(itemOffset, endOffset);
    const pageCount = Math.ceil(products.length / itemsPerPage);

    // Invoke when user click to request another page.
    const handlePageClick = (event) => {
        const newOffset = (event.selected * itemsPerPage) % products.length;
        console.log(
            `User requested page number ${event.selected}, which is offset ${newOffset}`
        );
        setItemOffset(newOffset);
    };


    return (
        <>
            <ProductCard products={currentItems} />


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

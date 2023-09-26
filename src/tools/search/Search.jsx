import React, {useEffect, useRef, useState} from 'react';
import {SearchIcon} from "../../constants/ui-constants";
import ModelDialog from "../ModelDialog/ModelDialog";
import {useDispatch, useSelector} from "react-redux";
import {showDialogReducer} from "../../redux/slices/dialogSlice";
import {getProducts} from "../../api/getRequest/getProducts";
import {useNavigate} from "react-router-dom";

function Search({className, inputClass, iconClassName, placeholder}) {
    // Input ref değeri
    const inputRef = useRef('');

    // navigate to product
    const navigate = useNavigate();

    // Model açma işlemleri için
    const dispatch = useDispatch();

    // Ürün Çekme işlemleri için
    const {products} = useSelector(state => state.products);

    // Input'dan Değer alma
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredProducts, setFilteredProducts] = useState([]);

    const openModel = () => {
        dispatch(showDialogReducer(true))
    }

    const closeModel = (id) => {
        navigate(`/product-detail/${id}`);
        window.location.reload();
    }

    const getProductsHandle = () => {
        dispatch(getProducts());
    }

    useEffect(() => {
        dispatch(getProducts());
    }, [dispatch]);


    // ***** Filter Operation ****
    function filterProducts(products, inputValue) {
        return products.filter(product =>
            product.title.toLowerCase().includes(inputValue.toLowerCase()) ||
            product.category.toLowerCase().includes(inputValue.toLowerCase()) ||
            product.description.toLowerCase().includes(inputValue.toLowerCase())
        );
    }

    const handleSearch = (e) => {
        e.preventDefault();

        // Model açılacak
        openModel();
        // Ürünler Getirilir
        getProductsHandle();

        // Filter Operation
        const inputValue = inputRef.current.value;
        setSearchTerm(inputValue);

        const filtered = filterProducts(products, inputValue);
        setFilteredProducts(filtered);

    };

    return (
        <>
            <form className={className} onSubmit={e => handleSearch(e)}>
                <input type="text"
                       className={inputClass}
                       placeholder={placeholder}
                       ref={inputRef}
                />
                <button className={iconClassName}>
                    {SearchIcon}
                </button>
            </form>

            <ModelDialog title={"Arama Sonucu"}>
                <div className={"grid grid-cols-1 justify-start gap-5 items-start touch-pan-x"}>
                    {
                        filteredProducts?.map((product, index) => (
                            <div onClick={()=> closeModel(product?.id)}  key={index} className={"flex justify-between items-center p-2 border rounded-md cursor-pointer transition-all duration-150 hover:shadow-md hover:border-indigo-500"}>
                                <img src={product?.image} alt={product?.title} className={"w-20 h-20 object-center object-contain"}/>
                                <p className={"p-8"}>{product?.title?.slice(0,80)}</p>
                                <span className={"font-semibold"}>{"$" + product?.price}</span>
                            </div>
                        ))
                    }
                </div>
            </ModelDialog>
        </>
    );
}

export default Search;
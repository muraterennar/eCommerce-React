import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {getCategories} from "../../../../api/getRequest/getCategories";
import {
    ElectronicImage,
    JeweleryImage,
    MensClothingImage,
    WomanClothingImage
} from "../../../../constants/ui-constants";
import {NavLink} from "react-router-dom";

function CategoryCards() {

    const dispatch = useDispatch();
    const {categories} = useSelector(state => state.categories);

    console.log(categories);

    useEffect(() => {
        dispatch(getCategories());
    }, [dispatch]);

    const selectImage = (category) => {
        switch (category) {
            case "electronics":
                return ElectronicImage;

            case "jewelery":
                return JeweleryImage;

            case "men's clothing":
                return MensClothingImage;
            case "women's clothing":
                return WomanClothingImage;

            default:
                return "";
        }
    }

    const selectColor = (category) => {

        const defaultCss = " text-white rounded-md shadow p-4 flex justify-between flex-nowrap items-center relative cursor-default hover:bg-opacity-80 transition duration-300 ease-in-out"

        switch (category) {
            case "electronics":
                return "bg-blue-400" + defaultCss

            case "jewelery":
                return "bg-slate-500" + defaultCss;

            case "men's clothing":
                return "bg-red-300" + defaultCss;

            case "women's clothing":
                return "bg-beigeColor" + defaultCss;

            default:
                return defaultCss;
        }
    }

    return (
        <>
            {
                categories?.map((category, index) => (
                    <div key={index} className={selectColor(category)}>
                        <div className={"flex flex-col items-start justify-center gap-6"}>
                            <div className={"text-start"}>
                                <span className={"uppercase text-xs  text-baseColor"}>new's today</span>
                                <h1 className={"capitalize text-2xl font-semibold"}>{category}</h1>
                            </div>
                            <NavLink to={`products/${category}`} className={"border-b px-3 text-sm"} >more items</NavLink>
                        </div>

                        <img src={selectImage(category)} alt={category} className={"w-40 h-40 object-contain"} />
                    </div>
                ))
            }
        </>
    );
}

export default CategoryCards;
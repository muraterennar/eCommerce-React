import React, {useState} from 'react';
import Hero from "./hero/Hero";
import Category from "./category/Category";
import Shorting from "../../../tools/shorting/Shorting";
import Products from "./products/Products";

function Home({className}) {
    const [sort, setSort] = useState("");
    const [category, setCategory] = useState("");

    return (
        <main>
            {/* ------- Hero Section -------*/}
            <Hero />
            <Category />
            <Shorting />
            <Products />
        </main>
    );
}

export default Home;
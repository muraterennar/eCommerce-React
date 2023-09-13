import React, {useState} from 'react';
import Hero from "./hero/Hero";
import Category from "./category/Category";
import Shorting from "../../../tools/shorting/Shorting";
import Products from "./products/Products";

function Home({className}) {
    const [sort, setSort] = useState("");

    return (
        <main>
            {/* ------- Hero Section -------*/}
            <Hero />
            <Category />
            <Shorting setSortHandle={setSort} />
            <Products sort={sort} />
        </main>
    );
}

export default Home;
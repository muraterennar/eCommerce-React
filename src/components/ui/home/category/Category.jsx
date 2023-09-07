import React from 'react';
import CategoryCards from "./CategoryCards";

function Category() {
    return (
        <section className={"mt-20 text-center"}>
            <h1 className={"text-4xl text-darkColor antialiased font-semibold inline-block border-b-2 border-slate-200 px-8 py-4"}>Category</h1>
            <div className={"w-full h-full p-3 mt-12 grid grid-cols-2 gap-x-4 gap-y-6"}>
                <CategoryCards />
            </div>

        </section>
    );
}

export default Category;
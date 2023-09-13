import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../components/ui/navbar/Navbar";
import Footer from "../components/ui/footer/Footer";
import ContainerPage from "../tools/container/ContainerPage";
import Basket from "../components/ui/basket/Basket";

function UiLayout() {
    return (
        <>
            <Navbar />
            <ContainerPage>
                <Outlet />
            </ContainerPage>
            <Basket />
            <Footer />

        </>
    );
}

export default UiLayout;
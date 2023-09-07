import React from 'react';
import {Outlet} from "react-router-dom";
import Navbar from "../components/ui/navbar/Navbar";
import Footer from "../components/ui/footer/Footer";
import ContainerPage from "../tools/container/ContainerPage";

function UiLayout() {
    return (
        <div>
            <Navbar />

            <ContainerPage>
                <Outlet />
            </ContainerPage>

            <Footer />
        </div>
    );
}

export default UiLayout;
import {Route, Routes} from "react-router-dom";
import UiLayout from "./pages/UiLayout";
import Home from "./components/ui/home/Home";
import ProductsPage from "./components/ui/home/products/ProductsPage";
import ProductDetails from "./components/ui/home/products/ProductDetails";
import BasketDetails from "./components/ui/basket/BasketDetails";
import Payment from "./components/ui/payment/Payment";
import PaymentComplate from "./components/ui/payment/PaymentComplate";

function App() {
    return (
        <Routes>
            <Route path="/" element={<UiLayout/>}>
                <Route index={true} element={<Home/>}/>
                <Route path={"products"} element={<ProductsPage/>}/>
                <Route path={"products/:categoryName"} element={<ProductsPage/>}/>
                <Route path={"product-detail/:id"} element={<ProductDetails/>}/>
                <Route path={"cart"} element={<BasketDetails/>}/>
                <Route path={"payment"} element={<Payment/>}/>
                <Route path={"payment/complete"} element={<PaymentComplate/>}/>
                <Route path={"*"} element={<h1>Not Found</h1>}/>
            </Route>
            <Route path={"*"} element={<h1>Not Found</h1>}/>
        </Routes>
    );
}

export default App;

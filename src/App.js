import {Route, Routes} from "react-router-dom";
import UiLayout from "./pages/UiLayout";
import Home from "./components/ui/home/Home";
import ProductsPage from "./components/ui/home/products/ProductsPage";
import ProductDetails from "./components/ui/home/products/ProductDetails";

function App() {
  return (
    <Routes>
        <Route path="/" element={<UiLayout/>}>
            <Route index={true} element={<Home/>}/>
            <Route path={"products/:categoryName"} element={<ProductsPage/>} />
            <Route path={"product-detail/:id"} element={<ProductDetails/>} />
        </Route>
    </Routes>
  );
}

export default App;

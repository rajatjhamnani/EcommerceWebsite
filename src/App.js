import { Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./Components/UI/NavBar";
import Cart from "./Components/UI/Cart";
import About from "./Components/UI/About";
import Banner from "./Components/UI/Banner";
import ProductContextProvider from "./Components/Global/ProductContext";
import CartContextProvider from "./Components/Global/CartContext";
import Home from "./Components/UI/Home";
import ContactUs from "./Components/ContactUs/ContactUs";
import ProductDetails from "./Components/ProductDetails/ProductDetails";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <NavbarComponent />

          <Routes>
            <Route path="/" exact Component={Home} />
            <Route path="cart" exact Component={Cart} />
            <Route path="store" exact Component={Banner} />
            <Route path="store/:productId" exact Component={ProductDetails} />
            <Route path="about" exact Component={About} />
            <Route path="contactUs" Component={ContactUs} />
          </Routes>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;

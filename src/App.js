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
import NotFound from "./Components/UI/NotFound";
import AuthForm from "./Components/AuthenticationForm/AuthForm";
import ChangePassword from "./Components/ChangePassword/ChangePassword";
import ModalContextProvider from "./Components/Global/ModalContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <ModalContextProvider>
            <NavbarComponent />

            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="cart" exact Component={Cart} />
              <Route path="store" exact Component={Banner} />
              <Route path="store/:productId" exact Component={ProductDetails} />
              <Route path="about" exact Component={About} />
              <Route path="contactUs" Component={ContactUs} />
              <Route path="*" Component={NotFound} />
              <Route path="auth" Component={AuthForm} />
              <Route path="password" Component={ChangePassword} />
            </Routes>
          </ModalContextProvider>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;

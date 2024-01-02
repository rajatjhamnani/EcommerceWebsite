import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./Components/UI/NavBar";
import Cart from "./Components/UI/Cart";

import Banner from "./Components/UI/Banner";
import ProductContextProvider from "./Components/Global/ProductContext";
import CartContextProvider from "./Components/Global/CartContext";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <NavbarComponent />

            <Routes>
              <Route path="cart" exact Component={Cart} />
              <Route path="store" exact Component={Banner} />
            </Routes>
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;

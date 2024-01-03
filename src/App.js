import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./Components/UI/NavBar";
import Cart from "./Components/UI/Cart";
import About from "./Components/UI/About";
import Banner from "./Components/UI/Banner";
import ProductContextProvider from "./Components/Global/ProductContext";
import CartContextProvider from "./Components/Global/CartContext";
import Home from "./Components/UI/Home";

function App() {
  return (
    <>
      <ProductContextProvider>
        <CartContextProvider>
          <Router>
            <NavbarComponent />

            <Routes>
              <Route path="/" exact Component={Home} />
              <Route path="cart" exact Component={Cart} />
              <Route path="store" exact Component={Banner} />
              <Route path="about" exact Component={About} />
            </Routes>
          </Router>
        </CartContextProvider>
      </ProductContextProvider>
    </>
  );
}

export default App;

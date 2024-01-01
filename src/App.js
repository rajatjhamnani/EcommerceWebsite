import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import "./App.css";
import NavbarComponent from "./Components/UI/NavBar";
import Cart from "./Components/UI/Cart";

import Banner from "./Components/UI/Banner";

function App() {
  return (
    <>
      <Router>
        <NavbarComponent />
        <Routes>
          <Route path="cart" exact Component={Cart} />
          <Route path="store" exact Component={Banner} />
        </Routes>
      </Router>
    </>
  );
}

export default App;

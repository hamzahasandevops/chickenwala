import "./App.css";
import Cart from "./Components/Cart";
import Categories from "./Components/Categories";
import Home from "./Components/Home";
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import ItemDetail from "./Components/ItemDetail";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/cart" element={<Cart />}></Route>
          <Route path="/categories" element={<Categories />}></Route>{" "}
          <Route path="/category/:categoryName" element={<ItemDetail />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

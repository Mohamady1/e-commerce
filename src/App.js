import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Categories from "./component/Categories";
import Home from "./component/Home";
import Product from "./component/Product";
import Specproducts from "./component/Specproducts";

export default function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/categories" element={<Categories />}></Route>
          <Route path="/category/:category" element={<Specproducts />}></Route>
          <Route path="/products/:id" element={<Product />}></Route>
        </Routes>
      </Router>
    </div>
  );
}

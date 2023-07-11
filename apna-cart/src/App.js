import React, { useState } from "react";
import logo from "./logo.svg";
import "./App.css";
import Navbar from "./components/Navbar";
import ProductList from "./components/ProductList.js";

function App() {
  const products = [
    {
      price: 99999,
      name: "Iphone 10S Max",
      quantity: 0,
    },
    {
      price: 9999,
      name: "Redmi Note 10S Max",
      quantity: 0,
    },
  ];

  let [productList, setProductList] = useState(products);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    newProductList[index].quantity++;
    setProductList(newProductList);
  };

  return (
    <>
      <Navbar />
      <main className="container mt-5">
        <ProductList
          productList={productList}
          incrementQuantity={incrementQuantity}
        />
      </main>
      
    </>
  );
}

export default App;

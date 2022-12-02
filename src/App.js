import React, { useState } from "react";
import "./App.css";
import ProductList from "./components/ProductList/ProductList";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import FilterProduct from "./components/FilterProduct/FilterProduct";

const products = [
  {
    pID: 1,
    pStock:6,
    pName: "Fresh Milk",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/fresh-milk.png",
    price: 12,
  },
  {
    pID: 2,
    pStock:6,
    pName: "Cottage Cheese",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/cottage-cheese.png",
    price: 10,
  },
  {
    pID: 3,
    pStock:6,
    pName: "Brocoli",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/brocoli.png",
    price: 15,
  },
  {
    pID: 4,
    pStock:6,
    pName: "oranges",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: true,
    image: "images/oranges.png",
    price: 20,
  },
  {
    pID: 5,
    pStock:6,
    pName: "Olive oil",
    desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Suscipit fuga autem maiores necessitatibus.",
    isAvailable: false,
    image: "images/olive-oil.png",
    price: 14,
  },
];

function App() {
  let [newProductList, updateProductList] = useState(products);
  let [filterTextValue, updateFilterText] = useState("all");

  let filteredProductList = newProductList.filter((product) => {
    if (filterTextValue === "available") {
      return product.isAvailable === true;
    }else if(filterTextValue === "unavailable"){
      return product.isAvailable===false;
    }else{
      return product;
    }
  });

  function createProduct(product) {
    product.pID = newProductList.length + 1;
    product.pStock = newProductList.length + 1;
    updateProductList([product, ...newProductList]);
  }

  function onFilterValueSelected(filterValue) {
    updateFilterText(filterValue);
  }
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <CreateProduct createProduct={createProduct}></CreateProduct>
        <FilterProduct
          filterValueSelected={onFilterValueSelected}
        ></FilterProduct>
        <ProductList newProductList={filteredProductList}></ProductList>
      </div>
    </div>
  );
}

export default App;

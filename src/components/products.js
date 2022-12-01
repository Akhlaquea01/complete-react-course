import React from 'react';
import ProductDetails from "./ProductDetails";

// import { Fragment } from "react";
// let imageUrl = require("../images/fresh-milk.png");

function Products(props) {
  return (
    <li className="list-group-item">
      <div className="media align-item-lg-center flex-column flex-lg-row p-3 d-flex">
        <div className="media-body order-2 order-lg-1">
          <h5 className="mt-0 font-weight-bold mb-2">{props.name}</h5>
          <p className="font-italic text-muted mb-0 small">
            {props.description}
          </p>
          <ProductDetails price={props.price} isAvailable={props.isAvailable} />
        </div>
        <img
          src={props.imageUrl}
          width="200"
          alt="Genric placeholde img"
          className="ml-lg-5 order-1 order-lg-1"
        />
      </div>
    </li>
  );
}

export default Products;

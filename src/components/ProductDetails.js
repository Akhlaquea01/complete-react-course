import React, { useState } from "react";
import Button from "./Button";

let style = {
  padding: "0px 20px",
  fontSize: 12,
};

function ProductDetails(props) {
  // let productCount = 0;
  let [productCount, updateCount] = useState(0);

  function displayFormattedProductCount() {
    return productCount > 0 ? productCount : "Zero";
  }

  let increamentProductCount = function () {
    // productCount++;
    // console.log(productCount);
    updateCount(++productCount);
  };

  let decreamentProductCount = function () {
    // productCount--;
    // console.log(productCount);
    updateCount(--productCount);
  };

  let badgeClass = "badge badge-margin-left-240 ";
  badgeClass += props.isAvailable === true ? "bg-success" : "bg-danger";

  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
      <h6 className="font-weight-bold my-2" style={{ marginRight: 30 }}>
        {props.price}
      </h6>
      <Button eventHandler={decreamentProductCount}>-</Button>
      <span style={style}>{displayFormattedProductCount()}</span>
      <Button eventHandler={increamentProductCount}>+</Button>
      <span className={badgeClass}>
        {props.isAvailable ? "Available" : "Unavailable"}
      </span>
    </div>
  );
}

export default ProductDetails;

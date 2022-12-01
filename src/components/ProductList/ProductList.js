import Products from "./products";
import React from "react";

function ProductList(props) {
  
  // Method 1 using JSX
  return (
    <div className="row">
      <div className="col-lg-8 mx-auto">
        <ul className="list-group shadow">
          {props.newProductList.map((product) => {
            return (
              <Products
                key={product?.pID}
                id={product?.pID}
                name={product?.name}
                description={product?.desc}
                isAvailable={product?.isAvailable}
                imageUrl={product?.image}
                price={product?.price}
              ></Products>
            );
          })}
        </ul>
      </div>
    </div>
  );

  // Method 2 using JS
  // const p = document.createElement("p");
  // p.textContent="This is a demo Paragraph";
  // return p;
}
export default ProductList;

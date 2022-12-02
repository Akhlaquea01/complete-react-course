import ProductForm from "./ProductForm";
import { useState } from "react";

function CreateProduct(props) {
  let [showForm, updateShowForm] = useState(false);

  function onCreateProduct(product) {
    props.createProduct(product);
  }
  function onCreateNewProduct() {
    updateShowForm(true);
  }

  function onProductSubmittedOrCanceled(){
    updateShowForm(false);
  }
  return (
    <div
      style={{
        backgroundColor: "white",
        padding: "10px 20px",
        borderRadius: 2,
      }}
    >
      {!showForm && (
        <button onClick={onCreateNewProduct}>Create Product</button>
      )}
      {showForm && <ProductForm createProduct={onCreateProduct} onCancel={onProductSubmittedOrCanceled}></ProductForm>}
    </div>
  );
}

export default CreateProduct;

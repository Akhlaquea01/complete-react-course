import React, { useState } from "react";

function ProductForm(props) {
  let [pName, updateName] = useState("");
  let [pPrice, updatePrice] = useState("");
  let [pDescription, updateDescription] = useState("");
  let [pAvailability, updateAvailability] = useState("");
  let [pImageUrl, updateImageUrl] = useState("");

  //   let [userInput, updateUserInput] = useState({
  //     pName: "",
  //     pPrice: "",
  //     pDescription: "",
  //     pAvailability: "",
  //     pImageUrl: "",
  //   });

  function nameInputHandler(event) {
    updateName(event.target.value);
    // updateUserInput({ ...userInput, pName: event.target.value });

    // Good Practice and Safer to always Get Updated Value ...
    // updateUserInput((previousState) => {
    //   return { ...previousState, pName: event.target.value };
    // });
  }
  function priceInputHandler(event) {
    updatePrice(event.target.value);
    // updateUserInput({ ...userInput, pPrice: event.target.value });
  }
  function descriptionInputHandler(event) {
    updateDescription(event.target.value);
    // updateUserInput({ ...userInput, pDescription: event.target.value });
  }
  function availabilityInputHandler(event) {
    updateAvailability(event.target.checked);
    // updateUserInput({ ...userInput, pAvailability: event.target.value });
  }
  function imageInputHandler(event) {
    updateImageUrl(event.target.value);
    // updateUserInput({ ...userInput, pImageUrl: event.target.value });
  }

  function createProductHandler(event) {
    event.preventDefault(); //Stop default behavior of reload on click of form submit
    let product = {
      pName: pName,
      desc: pDescription,
      isAvailable: Boolean(pAvailability),
      image: pImageUrl,
      price: Number(pPrice),
    };
    
    
    updateName("");
    updatePrice("");
    updateDescription("");
    updateAvailability("");
    updateImageUrl("");

    props.createProduct(product);
    props.onCancel();
  }

  return (
    <form className="row g-3" onSubmit={createProductHandler}>
      <div className="col-md-6">
        <label htmlFor="name">Product Name</label>
        <input
          type="text"
          className="form-control"
          id="name"
          placeholder="Product Name"
          value={pName}
          onChange={nameInputHandler}
        />
      </div>
      <div className="col-md-6">
        <label htmlFor="price">Product Price</label>
        <input
          type="number"
          min="0.01"
          step="0.01"
          className="form-control"
          id="price"
          placeholder="Product Price"
          value={pPrice}
          onChange={priceInputHandler}
        />
      </div>

      <div className="form-group">
        <label htmlFor="description">Product Description</label>
        <input
          type="text"
          className="form-control"
          id="description"
          placeholder="Product Description"
          value={pDescription}
          onChange={descriptionInputHandler}
        />
      </div>

      <div className="form-check form-switch">
        <input
          className="form-check-input"
          type="checkbox"
          role="switch"
          id="isAvailable"
          checked={pAvailability}
          onChange={availabilityInputHandler}
        />
        <label className="form-check-label" htmlFor="isAvailable">
          Is product available in stock?
        </label>
      </div>

      <div className="form-group">
        <label htmlFor="select-image">Select product image</label>
        <input
          type="file"
          className="form-control"
          id="select-image"
          value={pImageUrl}
          onChange={imageInputHandler}
        />
      </div>

      <button type="submit" className="btn btn-primary">
        Add Product
      </button>
      <button type="button" onClick={props.onCancel}>Cancel</button>
    </form>
  );
}

export default ProductForm;

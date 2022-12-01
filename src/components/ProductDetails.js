import Button from "./Button";

let productCount = 0;
let style = {
  padding: "0px 20px",
  fontSize: 12,
};
function displayFormattedProductCount() {
  return productCount > 0 ? productCount : "Zero";
}
function ProductDetails(props) {
  let badgeClass = "badge badge-margin-left-240 ";
  badgeClass += props.isAvailable === true ? "bg-success" : "bg-danger";
  return (
    <div className="d-flex align-items-center justify-content-start mt-1">
      <h6 className="font-weight-bold my-2" style={{ "margin-right": 30 }}>
        {props.price}
      </h6>
      <Button>-</Button>
      <span style={style}>{displayFormattedProductCount()}</span>
      <Button>+</Button>
      <span className={badgeClass}>
        {props.isAvailable ? "Available" : "Unavailable"}
      </span>
    </div>
  );
}

export default ProductDetails;

import './FilterProduct.css';
let FilterProduct = (props) => {
    function onFilterVlaueChanged(event){
        props.filterValueSelected(event.target.value);
    }
  return (
    <div className="filter-area">
      <select name="isAvailable" onChange={onFilterVlaueChanged}>
        <option value="All">All</option>
        <option value="available">Available</option>
        <option value="unavailable">Unavailable</option>
      </select>
    </div>
  );
};
export default FilterProduct;

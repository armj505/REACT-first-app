import React from "react";


const ProductItem = (props) => {
  return (
    <div className="Card">
      <img src={props.img}></img>
      <h2>{props.name}</h2>
      <h4>{props.price.toFixed(3)} KD</h4>
    </div>
  );
};

export default ProductItem;

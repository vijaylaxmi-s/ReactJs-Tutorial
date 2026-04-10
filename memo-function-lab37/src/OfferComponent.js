import React from "react";

const OfferComponent = (props) => {
  console.log("[OfferComponent] - Rendered");
  return (
    <div className="container">
      <br />
      <h5> I am Offer Component </h5>
      <h5>Price : {props.price} </h5>
    </div>
  );
};

export default React.memo(OfferComponent); 
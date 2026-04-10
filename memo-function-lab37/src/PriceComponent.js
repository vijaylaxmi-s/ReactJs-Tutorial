import "bootstrap/dist/css/bootstrap.min.css";
import React from "react";
import OfferComponent from "./OfferComponent";

const PriceComponent = (props) => {
  console.log("[PriceComponent] - Rendered");
  return (
    <div className="container">
      <br />
      <h5> I am Price Component </h5>
      <h5>Price : {props.price} </h5>
      <OfferComponent price={props.price} />
    </div>
  );
};

export default React.memo(PriceComponent);

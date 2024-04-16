import React from "react";

const Prediction = ({ prediction }) => (
  <div className="row">
    <div className="col-12" style={{ textAlign: "center" }}>
      <h4>
        <span id="prediction">{prediction}</span>
      </h4>
    </div>
  </div>
);

export default Prediction;

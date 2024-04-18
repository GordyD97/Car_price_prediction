import React from "react";
// 
import Prediction from "./Prediction";
import Header from "./Header";
import Form from "./Form";
// main page. 
const CarPricePredictor = (
// revise function bellow. 
  function loadCarModels(companyId, carModelId) {
    const company = document.getElementById(companyId);
    const carModel = document.getElementById(carModelId);
    console.log(company.value);
    carModel.value = "";
    carModel.innerHTML = "";

    // Loop through companies
    for (const companyOption of company.options) {
        if (companyOption.value === company.value) {
            // Loop through car models
            for (const model of carModels) {
                if (model.includes(company.value)) {
                    const newOption = document.createElement("option");
                    newOption.value = model;
                    newOption.innerHTML = model;
                    carModel.appendChild(newOption);
                }
            }
        }
    }
}

function formHandler(event) {
    event.preventDefault(); // Don't submit the form normally
}

function sendData() {
    const form = document.querySelector('form');
    form.addEventListener("submit", formHandler);

    const formData = new FormData(form);

    const xhr = new XMLHttpRequest({ mozSystem: true });

    xhr.open('POST', '/predict', true);
    document.getElementById('prediction').innerHTML = "Wait! Predicting Price.....";
    xhr.onreadystatechange = function () {
        if (xhr.readyState === XMLHttpRequest.DONE) {
            document.getElementById('prediction').innerHTML = "Prediction: ₹" + xhr.responseText;
        }
    };

    xhr.onload = function () { };

    xhr.send(formData);
}
) => (
  <div className="container">
    <div className="row">
      <div className="card mt-50" style={{ width: "100%", height: "100%" }}>
        <Header />
        <Form />
        <Prediction />
      </div>
    </div>
  </div>
);

export default CarPricePredictor;

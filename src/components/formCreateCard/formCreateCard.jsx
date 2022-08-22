import React, { useState } from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { useNavigate } from "react-router-dom";
import { URL } from "../../constants";
import { observer } from "mobx-react";
import todoStores from "../../todoStore/todoStore";

const FormCreateCard = (props) => {
  let navigate = useNavigate();
  const [formValue, setFormValue] = useState({
    name: "",
    price: "",
    image: "",
  });

  const handleChangeFile = (e) => {
    setFormValue({
      ...formValue,
      [e.target.name]: e.target.value,
    });
  };
  function checkValue(val) {
    let a = 0;
    todoStores.data.forEach((e, i) => {
      if (e.name === val) {
        a++;
      }
    });
    if (a > 0) return true;
    else return false;
  }
  const handleChangeForm = (e) => {
    e.preventDefault();
    if (
      formValue.name === "" ||
      formValue.price === "" ||
      formValue.image === ""
    ) {
      alert("Cann't be left blank!!!");
    } else if (checkValue(formValue.name)) {
      alert("Duplicated!!!");
    } else {
      fetch(URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formValue),
      })
        .then((res) => res.json())
        .catch((error) => console.log(error));
      navigate("/food/");
      todoStores.setRender();
    }
  };
  const handleReset = (e) => {
    setFormValue({
      name: "",
      price: "",
      image: "",
    });
  };
  return (
    <div className="form">
      <form className="formProduct" onSubmit={handleChangeForm}>
        <h2 className="formProduct_title">Add New Products</h2>
        <div className="formProduct_input">
          <label htmlFor="name" className="formProduct_input_txt">
            Name:{" "}
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formValue.name}
            onChange={handleChangeFile}
            className="formProduct_input_value"
          />
        </div>
        <div className="formProduct_input">
          <label htmlFor="price" className="formProduct_input_txt">
            Price:{" "}
          </label>
          <input
            type="number"
            id="price"
            name="price"
            value={formValue.price}
            onChange={(e) => handleChangeFile(e)}
            className="formProduct_input_value"
          />
        </div>
        <div className="formProduct_input">
          <label htmlFor="image" className="formProduct_input_txt">
            Image:{" "}
          </label>
          <input
            type="text"
            id="image"
            name="image"
            value={formValue.image}
            onChange={(e) => handleChangeFile(e)}
            className="formProduct_input_value"
          />
        </div>
        <div className="formProduct_input">
          <button
            type="submit"
            className="formProduct_input_btn formProduct_input_btnSubmit"
          >
            Save
          </button>
          <button
            onClick={handleReset}
            type="reset"
            className="formProduct_input_btn formProduct_input_btnReset"
          >
            Reset
          </button>
        </div>
      </form>
    </div>
  );
};

FormCreateCard.propTypes = {};

export default observer(FormCreateCard);

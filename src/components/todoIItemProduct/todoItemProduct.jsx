import React from "react";

import "./styles.scss";
import { observer } from "mobx-react";
import todoStores from "../../todoStore/todoStore";

const TodoItemProduct = (props) => {
  const { item, handleAddCart } = props;
  return (
    <div className="itemProduct">
      <div className="itemProduct_img">
        <img src={item.image} alt="" />
      </div>
      <h2 className="itemProduct_title">{item.name}</h2>
      <p className="itemProduct_price">{item.price}.000&nbsp;₫</p>
      <button onClick={() => handleAddCart(item)} className="itemProduct_btn">
        Thêm vào giỏ hàng
      </button>
    </div>
  );
};

TodoItemProduct.propTypes = {};

export default observer(TodoItemProduct);

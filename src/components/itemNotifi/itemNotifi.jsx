import React from "react";
import PropTypes from "prop-types";
import "./styles.scss";
import { changeCount } from "../../layout/Body/bodyy";
const ItemNotifi = ({ dataItem, handleDelete }) => {
  return (
    <div className="itemNotifi">
      <div className="itemNotifi_img">
        <img src={dataItem.image} />
      </div>
      <div className="itemNotifi_title">
        <p>Premium-Weight Crew{dataItem.name}</p>
      </div>
      <div className="itemNotifi_des">
        <button
          onClick={() =>
            dataItem.count !== 1 &&
            changeCount(dataItem, dataItem.count - 1, dataItem.id)
          }
        >
          -
        </button>
      </div>
      <div className="itemNotifi_num">
        <p>{dataItem.count}</p>
      </div>
      <div className="itemNotifi_ins">
        <button
          onClick={() => changeCount(dataItem, dataItem.count + 1, dataItem.id)}
        >
          +
        </button>
      </div>
      <div className="itemNotifi_prices">
        <p>{dataItem.price}.000&nbsp;₫</p>
      </div>
      <div className="itemNotifi_delete">
        <button onClick={() => handleDelete(dataItem)}>x</button>
      </div>
    </div>
  );
};

ItemNotifi.propTypes = {};

export default ItemNotifi;

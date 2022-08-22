import React, { memo } from "react";
import PropTypes from "prop-types";
import ItemNotifi from "../../../components/itemNotifi/itemNotifi";
import "./styles.scss";
import { observer } from "mobx-react";
import todoStores from "../../../todoStore/todoStore";

const ListItemNotifi = (props) => {
  return (
    <div style={{ display: todoStores.isDisplay ? "block" : "none" }}>
      <div className="listItemNotifi">
        <div className="listItemNotifi_title">
          <h2>Your Shopping Cart</h2>
          <span className="listItemNotifi_number">
            {todoStores.count.NumberUser}
          </span>
        </div>
        <div className="listItemNotifi_list">
          {props.userProductData.map((item) => {
            return (
              <ItemNotifi
                key={item.id}
                dataItem={item}
                handleDelete={props.handleDelete}
              />
            );
          })}
        </div>
        <div className="listItemNotifi_total">
          Total:{todoStores.count.totalBill}.000&nbsp;₫{" "}
        </div>
      </div>
    </div>
  );
};

ListItemNotifi.propTypes = {};

export default observer(ListItemNotifi);

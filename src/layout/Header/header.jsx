import React from "react";
import PropTypes from "prop-types";
import pic from "../../image/icon_cart.png";
import logo from "../../image/logo.png";
import "./styles.scss";
import { Link } from "react-router-dom";
import { observer } from "mobx-react";
import todoStores from "../../todoStore/todoStore";

const Header = (props) => {
  return (
    <div className="header">
      <div className="header_logo">
        <Link to="/food/" className="header_logo_image">
          <img src={logo} alt="" />
        </Link>
      </div>

      <div className="header_title">
        <div className="header_box">
          <a
            onClick={() => todoStores.checkDisplay()}
            className="header_box_card"
          >
            <img src={pic} alt="" />{" "}
            <span className="menu_items_number">
              {todoStores.count.NumberUser}
            </span>
          </a>
        </div>

        <div className="menu">
          <input type="checkbox" name="" id="" className="check" />
          <ul className="menu_items">
            <li>
              <Link to="/food/add">Thêm giỏ hàng</Link>
            </li>
            <li>
              <a href="" target="_blank">
                Xem giỏ hàng
              </a>
            </li>
          </ul>
          <div className="ham_menu">
            <span className="line line1"></span>
            <span className="line line2"></span>
            <span className="line line3"></span>
          </div>
        </div>
      </div>
    </div>
  );
};

Header.propTypes = {};

export default observer(Header);

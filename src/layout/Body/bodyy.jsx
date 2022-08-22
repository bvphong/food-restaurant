import React, { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import TodoListproduct from "./todoListproduct/todoListproduct";
import "./styles.scss";
import todoStores from "../../todoStore/todoStore";
import TodoItemProduct from "../../components/todoIItemProduct/todoItemProduct";
import { observer } from "mobx-react";
import { URL, URL_userProducts } from "../../constants";
import ListItemNotifi from "../Header/ListItemNotifi/listItemNotifi";

export const changeCount = (item, item2, ee) => {
  fetch(URL_userProducts + `/${ee}`, {
    method: "PUT",
    headers: {
      "content-type": "application/json",
    },
    body: JSON.stringify({ ...item, count: parseInt(`${item2}`) }),
  });
  todoStores.setRender();
};

const Body = (props) => {
  const [dataProducts, setDataProducts] = useState([]);
  const [userProducts, setUserProducts] = useState([]);

  const fectData = useCallback(async () => {
    await fetch(URL)
      .then((res) => res.json())
      .then((data) => setDataProducts(data));
  }, []);
  useEffect(() => {
    fectData();
  }, []);
  const fetchDataUserProduct = useCallback(async () => {
    await fetch(URL_userProducts)
      .then((res) => res.json())
      .then((data) => setUserProducts(data));
  }, []);
  //aaa
  useEffect(() => {
    fetchDataUserProduct();
  }, [todoStores.render]);
  useEffect(() => {
    todoStores.setData(dataProducts);
    todoStores.setCount({
      NumberUser: userProducts.reduce((a, e) => a + e.count, 0),
      total: dataProducts.length,
      totalBill: userProducts.reduce((a, b) => a + b.price * b.count, 0),
    });
  }, [userProducts]);
  const handleAddCart = (e) => {
    const findID = userProducts.findIndex((el) => el.id === e.id);
    const item = userProducts.filter((ee) => ee.id === e.id)[0];

    if (findID == -1) {
      fetch(URL_userProducts, {
        method: "POST",
        headers: {
          "content-type": "application/json",
        },
        body: JSON.stringify(e),
      });
      todoStores.setRender();
    } else {
      changeCount(item, item.count + 1, e.id);
    }
  };
  const handleDelete = (el) => {
    fetch(URL_userProducts + `/${el.id}`, {
      method: "DELETE",
    });
    todoStores.setRender();
  };
  return (
    <div className="main">
      <p className="main_total">
        Total : <span className="main_number">{todoStores.count.total}</span>
      </p>
      <TodoListproduct
        dataProduct={dataProducts}
        handleAddCart={handleAddCart}
      />
      <ListItemNotifi
        handleDelete={handleDelete}
        userProductData={userProducts}
      />
    </div>
  );
};

export default observer(Body);

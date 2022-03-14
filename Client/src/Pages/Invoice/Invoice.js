import ListeItems from "../ListeOrder/ListeItems";
import { getUser } from "../../JS/Actions/authActions";
import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import { getOrder } from "../../JS/Actions/orderActions";
import logo from "../../assets/logo.jpg";

import "./Invoice.css";

const Invoice = ({ location }) => {
  const params = useParams();
  const userToFind = useSelector((state) => state.authReducer.userToFind);
  const productsToFind = useSelector((state) => state.orderReducer.orders);

  const load = useSelector((state) => state.orderReducer.loading);
  const dispatch = useDispatch();

  useEffect(() => {
    productsToFind.userId && dispatch(getUser(productsToFind.userId));
    dispatch(getOrder(location.state._id));
  }, [dispatch, params.id, productsToFind.userId]);

  return load ? (
    <h2>loading</h2>
  ) : (
    <div>
      <img
        alt="logo"
        src={logo}
        width="200"
        height="300"
        className="d-inline-block align-top"
      />
      {userToFind && (
        <div className="user">
          <h2>FirstName:{userToFind.FirstName}</h2>
          <h2>LastName:{userToFind.LastName}</h2>
          <h2>Birth:{userToFind.Birth}</h2>
          <h2>Adresse:{userToFind.Adresse}</h2>
          <h2>Phone:{userToFind.Phone}</h2>
          <h2>Email:{userToFind.Email}</h2>
          <hr style={{ width: "50%" }} />
        </div>
      )}
      {productsToFind.items &&
        productsToFind.items.map((product) => (
          // <h2>hiiii</h2>
          <ListeItems product={product} key={product.id} />
        ))}

      {productsToFind && <h2> Bill : {productsToFind.bill} </h2>}
    </div>
  );
};

export default Invoice;

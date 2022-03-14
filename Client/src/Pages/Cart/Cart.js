import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Table } from "react-bootstrap";
import { Link } from "react-router-dom";
import { getCart } from "../../JS/Actions/cartActions";
import ListeCart from "../ListeCart/ListeCart";
import { getAuthUser } from "../../JS/Actions/authActions";
import { checkout } from "../../JS/Actions/orderActions";
import "./Cart.css";

const Cart = () => {
  const user = useSelector((state) => state.authReducer.user);
  const cartToFind = useSelector((state) => state.cartReducer.cartToFind);
  const load = useSelector((state) => state.cartReducer.load);

  const dispatch = useDispatch();

  const token = localStorage.getItem("token");

  const calculateQuantity = () => {
    let total = 0;
    if (cartToFind !== undefined ) {
      for (let i=0; i < cartToFind.length; i++) {
        total += cartToFind[i].quantity
      }
    }
    return total
  }

  const totalQuantity = calculateQuantity()

  useEffect(() => {
    if (token) {
      dispatch(getAuthUser());
      dispatch(getCart(user._id));
    }
    
  }, [dispatch, user._id, token]);
  const order = {
    productId: "",
    name: "",
    quantity: "",
    price: "",
    bill: "",
  };


  return load ? (
    <h2>loading</h2>
  ) : cartToFind ? (
    <div className="productlist">
      <h2 className="mb-5 text-center"> Shopping Cart : {totalQuantity} Products In Cart</h2>
      <Table className="mytable">
        <thead>
          <tr>
            <th>Product</th>
            <th>Product Name</th>
            <th>Quantity</th>
            <th>Price</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {cartToFind.map((item) => (
            <ListeCart item={item} key={item._id} />
          ))}
        </tbody>
      </Table>
      <div className="dee">
        <Link to="/Commande" className="link">
          <button onClick={() => dispatch(checkout(user._id, order))}>
            {" "}
            Add Order{" "}
          </button>
        </Link>
      </div>
    </div>
  ) : (
    <h2>Empty Shopping Cart, you have to add products in basket !!</h2>
  );
};

export default Cart;

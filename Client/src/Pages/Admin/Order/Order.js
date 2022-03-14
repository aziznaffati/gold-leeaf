import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getOrders } from "../../../JS/Actions/orderActions";
import ListeOrder from "../../ListeOrder/ListeOrder"
import { Table } from 'react-bootstrap';
import './Order.css'


const Order = () => {

  const productsToFind = useSelector(
    (state) => state.orderReducer.orders
  );
  const load = useSelector((state) => state.orderReducer.loading);
  const dispatch = useDispatch();



  useEffect(() => {
    dispatch(getOrders());
  }, [dispatch]);



  return load ? (
    <h2>loading</h2>
  ) : (
    productsToFind ? (
      <div>
        <br /><br />
        <Table striped bordered hover size="sm">
          <thead>
            <tr>
              <th>Purchaser</th>
              <th>Invoice </th>
              <th>Price</th>
              <th>Validation</th>
            </tr>
          </thead>
          <tbody>
            {productsToFind.map((product) => (
              <ListeOrder product={product} key={product._id} />
            ))}
          </tbody>
        </Table>
      </div>
    ) : (<h2>Empty Order  !!</h2>)
  );
};

export default Order;

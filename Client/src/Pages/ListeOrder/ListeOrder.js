import React from "react";
import { Link } from "react-router-dom";
import './ListeOrder.css'
import { useDispatch } from "react-redux"
import {deleteOrder} from '../../JS/Actions/orderActions'
import { MdDelete  } from "react-icons/md";
const ListeOrder = ({ product }) => {
  const dispatch = useDispatch();

  return (
    <tr>
      {product.user &&
        <td>{product.user.FirstName} {product.user.LastName}</td>
      }
      <Link to={{
        pathname : `/Invoice/${product._id}`,
        state : product
        }} >
        <td> Invoice </td>
      </Link>
      <td>{product.bill}</td>
      <div className="valide">
      <Link to="/Order" className="link">
      <button onClick={() => dispatch(deleteOrder(product._id))}><MdDelete  style={{ color:"black" , fontSize: "3em"}} /></button>
      </Link>
      </div>
    </tr>

  )
}

export default ListeOrder
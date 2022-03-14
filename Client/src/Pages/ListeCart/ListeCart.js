import React, { useEffect } from "react";
import { deletefromCart } from '../../JS/Actions/cartActions'
import { useDispatch, useSelector } from "react-redux";
import { useHistory } from "react-router-dom";
import { getProduct } from  '../../JS/Actions/productActions';
import { MdDelete } from "react-icons/md";
import './ListeCart.css'

const ListeCart = ({ item }) => {
  let history = useHistory();
  const productToFind = useSelector(
    (state) => state.productReducer.productToFind
  );
  const userToFind = useSelector(
    (state) => state.authReducer.user
  );
  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(getProduct(item.productId));
  }, [dispatch]);

  return (
    <tr>
      <div className="imgp">
      <td> <img src={productToFind.ImgURL} alt="image product" width={100} heigth={100} /></td>
      </div>
      <td>{item.name}</td>
      <td>{item.quantity}</td>
      <td>{item.Price}</td>
      <div className="del">
      <button  onClick={() => dispatch(deletefromCart(userToFind._id, item.productId )) && history.push(`/Cart/${userToFind._id}`)}><MdDelete style={{ color:"black" , fontSize: "2em"}} /></button>
      </div>
    </tr>
  )
};

export default ListeCart;

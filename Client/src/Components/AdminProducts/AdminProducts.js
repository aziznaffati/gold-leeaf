import React from "react";
import { ListGroupItem, Card, ListGroup } from "react-bootstrap";
import "./AdminProducts.css";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { MdDelete , MdEdit } from "react-icons/md";
import {
  deleteProduct,
  getProduct,
  toggleTrue,
} from '../../JS/Actions/productActions';

const Products = ({ product }) => {
  const dispatch = useDispatch();
  return (
    <div>
     

      <div classname="cards">
        <Card style={{ width: "18rem" }}>
          <Card.Img
            variant3="top"
            src={product.ImgURL}
            alt={product.NameProduct}
          ></Card.Img>
          <Card.Body>
          <Link to={`/DetailsProduct/${product._id}`} >
            <Card.Title>{product.NameProduct}</Card.Title>
           </Link>
           <Link to={`/EditProduct/${product._id}`}>
      
      <button className="del" onClick={() => {
                  dispatch(toggleTrue());
                  dispatch(getProduct(product._id));
                }}> <MdEdit className='edit' style={{ color:"black" , fontSize: "3em"}} /> </button>
                 </Link>
      <button className="del"  onClick={() => dispatch(deleteProduct(product._id))}><MdDelete  style={{ color:"black" , fontSize: "3em"}} /> </button>
          </Card.Body>
          
        </Card>
      
      </div>
    </div>
  );
};

export default Products;

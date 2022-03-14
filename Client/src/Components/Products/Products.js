import React from "react";
import { ListGroupItem, Card, ListGroup } from "react-bootstrap";
import "./Products.css";
import { Link } from "react-router-dom";
const Products = ({ product }) => {
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
          </Card.Body>
          
        </Card>
      
      </div>
    </div>
  );
};

export default Products;

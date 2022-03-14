import React, { useState } from "react";
import { addProduct } from "../../../JS/Actions/productActions";
import { useDispatch, useSelector } from "react-redux";
import './AddProduct.css'
import {Link} from 'react-router-dom'
const AddProduct = () => {
    const dispatch = useDispatch();
    const [newProduct, setNewProduct] = useState({
    NameProduct: "",
    ImgURL: "",
    Price: "",
    Quantity: "",
    Description: "",
    });
    const handleChange = (e) => {
        setNewProduct({ ...newProduct, [e.target.name]: e.target.value });
      };

  return <div>
         <div className="login">
<div className="split-screen">
    <div className="left">
        <div className="copy">
 
        </div>
    </div>
    <div className="right">
        <form>
        <div className="copy">
            <h2>Add Product</h2>
            <div className="login-container">
            
        </div>
    </div>
        <div className="input-container name">
            <label for="NameProduct">Name Product</label>
            <input id="NameProduct" onChange={handleChange} name="NameProduct" type="text" />
        </div>
        <div className="input-container name">
            <label for="ImgURL">ImgURL</label>
            <input id="ImgURL" onChange={handleChange} name="ImgURL" type="text" />
        </div>
        <div className="input-container name">
            <label for="Price">Price</label>
            <input id="Price" onChange={handleChange} name="Price" type="text" />
        </div>
        <div className="input-container name">
            <label for="Quantity">Quantity</label>
            <input id="Quantity" onChange={handleChange} name="Quantity" type="text" />
        </div>
        <div className="input-container name">
            <label for="Description">Description</label>
            <input id="Description" onChange={handleChange} name="Description" type="text" />
        </div>
        <Link to="/AdminProduct" > 
             <button onClick={() => dispatch(addProduct(newProduct))} className="signup-btn" type="button">
               Add Product
            </button>
            </Link>
            </form>
            </div>  
    </div>
</div>
  </div>;
};

export default AddProduct;

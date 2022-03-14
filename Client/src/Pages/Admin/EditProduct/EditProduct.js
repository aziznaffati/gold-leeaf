import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import {Link} from 'react-router-dom'
import { editProduct } from "../../../JS/Actions/productActions";
import './EditProduct.css'


const EditProduct = () => {


 
  const dispatch = useDispatch();
  const [newProduct, setNewProduct] = useState({
  NameProduct: "",
  ImgURL: "",
  Price: "",
  Category: "",
  Barcode: "",
  Quantity: "",
  Description: "",
  Size: "",
  Weight: "",
  });
  const edit = useSelector((state) => state.productReducer.edit);
  const productToFind = useSelector(
    (state) => state.productReducer.productToFind
  );

  useEffect(() => {
    edit
      ? setNewProduct(productToFind)
      : setNewProduct({
        NameProduct: "",
        ImgURL: "",
        Price: "",
        Quantity: "",
        Description: "",
      });
  }, [edit, productToFind]);
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
     <h2>Edit Product</h2>
     <div className="login-container">
 </div>
</div>
 <div className="input-container name">
     <label for="NameProduct">Name Product</label>
     <input id="NameProduct" value={newProduct.NameProduct} onChange={handleChange} name="NameProduct" type="text" />
 </div>
 <div className="input-container name">
     <label for="ImgURL">ImgURL</label>
     <input id="ImgURL"  value={newProduct.ImgURL} onChange={handleChange} name="ImgURL" type="text" />
 </div>
 <div className="input-container name">
     <label for="Price">Price</label>
     <input id="Price" value={newProduct.Price} onChange={handleChange} name="Price" type="text" />
 </div>
 <div className="input-container name">
     <label for="Quantity">Quantity</label>
     <input id="Quantity" value={newProduct.Quantity} onChange={handleChange} name="Quantity" type="text" />
 </div>
 <div className="input-container name">
     <label for="Description">Description</label>
     <input id="Description" value={newProduct.Description} onChange={handleChange} name="Description" type="text" />
 </div>


<Link to="/AdminProduct" >
      <button onClick={() => {dispatch(editProduct(productToFind._id, newProduct))}} className="signup-btn" type="button">
        Edit Product
     </button>
</Link>
     </form>
     </div>  
</div>
</div>
</div>;
};

export default EditProduct
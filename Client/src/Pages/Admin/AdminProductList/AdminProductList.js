import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProducts } from "../../../JS/Actions/productActions";
import AdminProducts from "../../../Components/AdminProducts/AdminProducts";
import './AdminProductList.css'

const ProductList = () => {
  const productsToFind = useSelector(
    (state) => state.productReducer.productsToFind
  );
  const filter = useSelector(
    (state) => state.filiterReducer.nameProduct
  );
  const load = useSelector((state) => state.productReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProducts());
  }, [dispatch]);
  return load ? (
    <h2>loading</h2>
  ) : (
   <div> <span className="text">Products</span>
    <div className="productlist">
      { productsToFind.filter(product => product.NameProduct.toUpperCase().includes(filter.toUpperCase())  
                ).map((product) => (
        <AdminProducts product={product} key={product.id} />
      ))}
    </div>
    </div>
  );
};

export default ProductList;

import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getProduct } from "../../JS/Actions/productActions";
import { AddToCart } from "../../JS/Actions/cartActions";
import { decrement, increment } from "../../JS/Actions/countActions";
import { useParams } from "react-router-dom";
import { Link } from "react-router-dom";
import ListeComment from "../ListeComment/ListeComment";
import { getComment } from "../../JS/Actions/commentActions";
import { AddComment } from "../../JS/Actions/commentActions";
import { FloatingLabel, Form, Button } from "react-bootstrap";
import "./DetailsProduct.css";

const DetailsProduct = () => {
  const auth = useSelector((state) =>
    state.authReducer.token === null ? false : true
  );
  const params = useParams();

  const count = useSelector((state) => state.countReducer.count);
  const token = localStorage.getItem("token");
  const productsToFind = useSelector(
    (state) => state.productReducer.productToFind
  );
  const userToFind = useSelector((state) => state.authReducer.user);
  const commentToFind = useSelector(
    (state) => state.commentReducer.commentToFind
  );
  const [formData, setFormData] = useState({
    userId: userToFind._id,
    Description: "",
  });
  const handleFormChange = (e) =>
    setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConfim = () => {
    dispatch(AddComment(params.id, formData));
    setFormData({ ...formData, Description: "" });
  };
  const load = useSelector((state) => state.productReducer.load);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getProduct(params.id));
    dispatch(getComment(params.id));
  }, [dispatch]);
  const prod = {
    productId: productsToFind._id,
    quantity: count,
  };


  return (
    <div className="details">
      <img
        src={productsToFind.ImgURL}
        alt="image product "
        width={300}
        height={300}
      />
      <div className="dett">
        <h2> NameProduct: {productsToFind.NameProduct} </h2>
        <h2> Quantity: {productsToFind.Quantity} </h2>
        <h2> Description: {productsToFind.Description} </h2>
        <h2> Price:{productsToFind.Price} TND</h2>
        <div className="button-container">
          <button
            className="cart-qty-plus"
            type="button"
            value="+"
            onClick={() => dispatch(increment())}
          >
            {" "}
            +
          </button>
          <input
            type="text"
            name="qty"
            class="qty form-control"
            value={count}
          />
          <button
            className="cart-qty-minus"
            type="button"
            value="-"
            onClick={() => dispatch(decrement())}
          >
            -
          </button>
        </div>
        {auth ? (
          <div className="de">
            <Link to="/" className="link">
              <button onClick={() => dispatch(AddToCart(userToFind._id, prod))}>
                {" "}
                Add To Cart{" "}
              </button>
            </Link>
          </div>
        ) : (
          <div className="de">
            <Link to="/Register" className="link">
              <button> Add To Cart </button>
            </Link>
          </div>
        )}
        <div className="commentlist">
          {commentToFind &&
            commentToFind.map((comment) => (
              <ListeComment comment={comment} key={comment.id} />
            ))}

          {token && (
            <>
              <FloatingLabel controlId="floatingTextarea2" label="Comments">
                <Form.Control
                  as="textarea"
                  placeholder="Leave a comment here"
                  name="Description"
                  onChange={handleFormChange}
                  style={{ height: "100px", width: "900px" }}
                />
              </FloatingLabel>
              <Button onClick={handleConfim} variant="outline-danger" className="btn2">
                Comment
              </Button>
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default DetailsProduct;

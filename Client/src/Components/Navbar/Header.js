import {
  Container,
  Nav,
  Navbar,
  Form,
  Button,
  FormControl,
} from "react-bootstrap";

import { Link } from "react-router-dom";
import React, { useEffect } from "react";
import "./Header.css";
import { logout } from "../../JS/Actions/authActions";
import { useSelector, useDispatch } from "react-redux";
import { HiOutlineLogout } from "react-icons/hi";
import { getAuthUser, setError } from "../../JS/Actions/authActions";
import Filter from "../Filter/Filter.js";
import userlogo from "../../assets/userlogo.png";
import logo from "../../assets/logo.jpg";

const Header = () => {
  const dispatch = useDispatch();
  const auth = useSelector((state) => state.authReducer.user);
  const isAuth = useSelector((state) => state.authReducer.isAuth);

  useEffect(() => {
    dispatch(getAuthUser);
  }, [dispatch]);
  return (
    <div className="navb">
      <Navbar bg="green" expand="lg">
        <Container fluid>
          <img
            alt="logo"
            src={logo}
            width={50}
            height={50}
            className="d-inline-block align-top logo"
          />

          <Navbar.Toggle aria-controls="navbarScroll" />
          <Navbar.Collapse id="navbarScroll">
            <Nav
              className="me-auto my-2 my-lg-0"
              style={{ maxHeight: "100px" }}
              navbarScroll
            >
              <Link to="/" className="link">
                Home
              </Link>
              {auth.Role !== "Admin" && (
                <Link to="/Products" className="link">
                  Products
                </Link>
              )}
              {auth && auth.Role === "Admin" && (
                <Link to="/AddProduct" className="link">
                  AddProduct
                </Link>
              )}
              {auth.Role === "Admin" && (
                <Link to="/AdminProduct" className="link">
                  AdminProduct
                </Link>
              )}
              {auth.Role === "Admin" && (
                <Link to="/Order" className="link">
                  Order
                </Link>
              )}

              {isAuth ? (
                <div style={{display:'flex', alignItems:"center"}}>
                  <Link to={`/cart/${auth._id}`} className="link">
                    Cart
                  </Link>
                  <div className="Profile">
                    <img
                      alt="PicURL"
                      src={userlogo}
                      className="d-inline-block align-top"
                    />

                    <Link to="/Profile" className="link2">
                      {auth.FirstName} {auth.LastName}
                    </Link>

                    <button onClick={() => dispatch(logout())} className="icon">
                      {" "}
                      <HiOutlineLogout
                        style={{ color: "#fff", fontSize: "1.5em" }}
                      />{" "}
                    </button>
                  </div>
                </div>
              ) : (
                <div>
                  <Link to="/Register" className="link">
                    <button onClick={() => dispatch(setError(false))} className="btns">
                      {" "}
                      Register{" "}
                    </button>
                  </Link>
                  <Link to="/Login" className="link">
                    <button onClick={() => dispatch(setError(false))} className="btns" >
                      {" "}
                      Login{" "}
                    </button>
                  </Link>
                </div>
              )}
            </Nav>
            <Filter />
          </Navbar.Collapse>
        </Container>
      </Navbar>
    </div>
  );
};

export default Header;

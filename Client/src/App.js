import "bootstrap/dist/css/bootstrap.min.css";
import Navbar from "./Components/Navbar/Header";
import "./App.css";
import Home from "./Pages/Home/Home";
import { Route, Switch } from "react-router-dom";
import Error from "./Pages/Error/Error";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import { useDispatch } from "react-redux";
import { getAuthUser } from "./JS/Actions/authActions";
import React, { useEffect } from "react";
import DetailsProduct from "./Pages/DetailsProduct/DetailsProduct";
import AddProduct from "./Pages/Admin/AddProduct/AddProduct";
import ProductList from "./Pages/ProductList/ProductList";
import Order from "./Pages/Admin/Order/Order";
import Cart from "./Pages/Cart/Cart";
import EditProfile from "./Components/EditProfile/EditProfile";
import PrivateRoute from "./Router/PrivateRoute";
import AdminRoute from "./Router/AdminRoute";
import Invoice from "./Pages/Invoice/Invoice";
import AdminProductList from "./Pages/Admin/AdminProductList/AdminProductList";
import Profile from "./Pages/Profile/Profile";
import EditProduct from "./Pages/Admin/EditProduct/EditProduct";
import Commande from "./Pages/Commande/Commande";
import ListeUsers from "./Pages/ListeUsers/ListeUsers";
function App() {
  const token = localStorage.getItem("token");
  const dispatch = useDispatch();

  useEffect(() => {
    token && dispatch(getAuthUser());
  }, [dispatch, token]);
  return (
    <div>
      <Navbar />

      <Switch>
        <Route exact path="/" component={Home} />
        <Route path="/Products" component={ProductList} />
        <Route path="/Login" component={Login} />
        <PrivateRoute path="/cart/:id" component={Cart} />
        <PrivateRoute path="/Profile/:id" component={EditProfile} />
        <Route path="/DetailsProduct/:id" component={DetailsProduct} />
        <Route path="/AddProduct" component={AddProduct} />
        <PrivateRoute path="/profile" component={Profile} />
        <Route path="/AdminProduct" component={AdminProductList} />
        <AdminRoute path="/Order" component={Order} />
        <AdminRoute path="/Invoice/:id" component={Invoice} />
        <AdminRoute path="/EditProduct/:id" component={EditProduct} />
        <Route path="/Register" component={Register} />
        <Route path="/Commande" component={Commande} />
        <Route path="/Users" component={ListeUsers} />
        <Route path="/*" component={Error} />
      </Switch>
    </div>
  );
}

export default App;

import React from "react";
import order from "../../assets/confirmorder.jpg";
import "./Commande.css";
const Commande = () => {
  return (
    <div className="order">
      <img src={order} alt="order" width={1000} height={700} />
    </div>
  );
};

export default Commande;

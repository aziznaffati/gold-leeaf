import React from "react";
import "./Home.css";
import Promotion from "../../Components/Promotions/Promotion";
import prom2 from "../../assets/prom2.jpg";
import pro5 from "../../assets/pro5.jpg";
import prom from "../../assets/prom.jpg";
import prom3 from "../../assets/prom3.jpg";
import offer from "../../assets/offer.jpg";
import p1 from "../../assets/p1.jpg";
import p2 from "../../assets/p2.jpg";
import p3 from "../../assets/p3.jpg";
import p4 from "../../assets/p4.jpg";
import p5 from "../../assets/p5.jpg";
import p6 from "../../assets/p6.jpg";
import Footer from "../../Components/Footer/Footer";

const Home = () => {
  return (
    <div>
      <Promotion />
      <div className="pro">
        <img src={prom2} width={400} height={400} />
        <img src={offer} alt="pro" width={300} />
      </div>
      <br />
      <div className="prom">
        <img src={pro5} />
        <img src={prom} />
        <img src={prom3} />
      </div>
      <div className="pprom">
        <img src={p1} width={400} height={400} />
        <img src={p2} width={400} height={400} />
        <img src={p3} width={400} height={400} />
      </div>
      <div className="pprom">
        <img src={p4} width={400} height={400} />
        <img src={p5} width={400} height={400} />
        <img src={p6} width={400} height={400} />
      </div>
      <Footer />
    </div>
  );
};

export default Home;

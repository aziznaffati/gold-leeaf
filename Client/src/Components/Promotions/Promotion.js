import React from "react";
import Carousel from "react-bootstrap/Carousel";
import "./Promotion.css";
import s1 from "../../assets/s1.jpg";
import s2 from "../../assets/s2.jpg";
import s3 from "../../assets/s3.jpg";
import s4 from "../../assets/s4.jpg";
import s5 from "../../assets/s5.jpg";
import s6 from "../../assets/s6.jpg";

const Promotion = () => {
  return (
    <div className="card">
      <Carousel>
        <Carousel.Item>
          <img
            
            src={s1}
            alt="First slide"
          />
          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: 800 }}
            src={s2}
            alt="Second slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: 800 }}
            src={s3}
            alt="Third slide"
          />
          

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
      </Carousel>
      <Carousel.Item>
          <img
            style={{ height: 800 }}
            src={s4}
            alt="Second slidee"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: 800 }}
            src={s5}
            alt="Secondd slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img
            style={{ height: 800 }}
            src={s6}
            alt="Seconddd slide"
          />

          <Carousel.Caption></Carousel.Caption>
        </Carousel.Item>
     
    </div>
  );
};

export default Promotion;

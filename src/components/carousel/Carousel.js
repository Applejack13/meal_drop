import React from "react";

import Carousel from "react-multi-carousel";

import { Link } from "react-router-dom";

import "react-multi-carousel/lib/styles.css";
import "../carousel/carousel.scss";

export function CarouselSlider({ ...props }) {
  const { ...settings } = props;
  return (
    <>
      <Carousel {...settings}>
        {props.items.map((item, index) => (
          <Link to={props.links[index]} key={index}>
            <div key={index} className={props.customStyles.carouselItem}>
              <img src={item.image} alt={item.alt} />
              <div className={props.customStyles.customText}>
                <p>{item.description}</p>
                <p>{item.description2}</p>
                <p>{item.description3}</p>
                <p>{item.description4}</p>
              </div>
            </div>
          </Link>
        ))}
      </Carousel>
    </>
  );
}

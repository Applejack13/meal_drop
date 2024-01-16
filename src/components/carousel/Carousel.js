import React from "react"
import Carousel from "react-multi-carousel"
import { Link } from "react-router-dom"

import "react-multi-carousel/lib/styles.css"
import "../carousel/carousel.css"

export const CarouselSlider = (props) => {
  const { links, items, customStyles, ...settings } = props
  return (
    <>
      <Carousel {...settings}>
        {items.map((item, index) => (
          <Link to={links[index]} key={index}>
            <div key={index} className={customStyles.carouselItem}>
              <img src={item.image} alt={item.alt} />
              <div className={customStyles.customText}>
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
  )
}

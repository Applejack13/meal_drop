import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
// import arrowRight from "../../images/arrow-right 1.svg"
import "./../carousel/carousel.css"

function Carousel({ items, customStyles, ...settings }) {
  return (
    <div className={customStyles.carouselContainer}>
      <Slider {...settings}>
        {items.map((item, index) => (
          <div key={index} className={customStyles.carouselItem}>
            <img src={item.image} alt={item.alt} />
            <p>{item.description}</p>
            <p>{item.description2}</p>
            <p>{item.description3}</p>
            <p>{item.description4}</p>
          </div>
        ))}
      </Slider>
      {/* <div className="arrow-right">
        <img src={arrowRight} alt="arrow-right" />
      </div> */}
    </div>
  )
}

export default Carousel

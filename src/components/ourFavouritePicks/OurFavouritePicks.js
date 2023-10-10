import "./../ourFavouritePicks/ourFavouritePicks.css"
import React from "react"
import Slider from "react-slick"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import InfoInWindow from "./../infoInWindow/InfoInWindow"
import image from "../../images/Image.png"

function OurFavouritePicks() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
  }

  return (
    <div className="OurFavouritePicks">
      <h2>Our favaurite picks</h2>
      <Slider {...settings}>
        <InfoInWindow
          img={image}
          h3={"Mira"}
          title={"★ 4.2  Very Good"}
          subtitle={"Nicest place for burgers"}
          subtitle2={"Comfort food"}
        />
        <InfoInWindow
          img={image}
          h3={"Kara Fin"}
          title={"★ 4.2  Very Good"}
          subtitle={"Nicest place for burgers"}
          subtitle2={"Comfort food"}
        />
        <InfoInWindow
          img={image}
          h3={"‘T Kuyltje"}
          title={"★ 4.2  Very Good"}
          subtitle={"Nicest place for burgers"}
          subtitle2={"Comfort food"}
        />
      </Slider>
    </div>
  )
}

export default OurFavouritePicks

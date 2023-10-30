import "./../ourFavouritePicks/ourFavouritePicks.css"
import image from "../../images/Image.png"
import Carousel from "../carousel/Carousel"
import arrowRight from "../../images/arrow-right 1.svg"
import Button from "../button/Button"

function OurFavouritePicks() {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: false,
    autoplaySpeed: 2000,
  }

  const customStyles = {
    carouselContainer: "carousel-container_2",
    carouselItem: "carousel-item_2",
  }

  const carouselItems = [
    {
      image: image,
      alt: "Image 1",
      description: "Mira",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
    },
    {
      image: image,
      alt: "Image 2",
      description: "Kara Fin",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
    },
    {
      image: image,
      alt: "Image 1",
      description: "‘T Kuyltje",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
    },
    {
      image: image,
      alt: "Image 1",
      description: "Kara Fin",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
    },
  ]

  return (
    <div className="OurFavouritePicks">
      <div className="OurFavouritePicks__title">
        <h2>Our favourite picks</h2>
      </div>
      <Carousel
        {...settings}
        items={carouselItems}
        customStyles={customStyles}
      />
      <div className="OurFavouritePicks__button">
        <Button img={arrowRight} text="" />
      </div>
    </div>
  )
}

export default OurFavouritePicks

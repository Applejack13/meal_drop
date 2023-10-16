import "./../ourFavouritePicks/ourFavouritePicks.css"
import image from "../../images/Image.png"
import Carousel from "../carousel/Carousel"

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
      <h2>Our favourite picks</h2>
      <Carousel
        {...settings}
        items={carouselItems}
        customStyles={customStyles}
      />
    </div>
  )
}

export default OurFavouritePicks

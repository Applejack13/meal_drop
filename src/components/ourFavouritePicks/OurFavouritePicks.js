import "./../ourFavouritePicks/ourFavouritePicks.css"
import image from "../../images/Image.png"
import image2 from "../../images/RestaurantForCard1.webp"
import image3 from "../../images/RestaurantForCard2.jpeg"
import image4 from "../../images/RestaurantForCard3.avif"
// import arrowRight from "../../images/arrow-right 1.svg"
// import Button from "../button/Button"
import CarouselSlider from "../carousel/Carousel"

function OurFavouritePicks() {
  const customStyles = {
    carouselContainer: "carouselContainer",
    carouselItem: "carouselItem",
    customText: "customText",
  }

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
    },
  }

  const carouselItems = [
    {
      image: image,
      alt: "",
      description: "Mira",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
    },
    {
      image: image2,
      alt: "",
      description: "Kara Fin",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
    },
    {
      image: image3,
      alt: "",
      description: "‘T Kuyltje",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
    },
    {
      image: image4,
      alt: "",
      description: "Kara Fin",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
    },
    {
      image: image,
      alt: "",
      description: "Kara Fin",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
    },
    {
      image: image2,
      alt: "",
      description: "‘T Kuyltje",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
    },
    {
      image: image4,
      alt: "",
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
      <CarouselSlider
        items={carouselItems}
        customStyles={customStyles}
        customText={customStyles.customText}
        swipeable={true}
        draggable={true}
        showDots={false}
        responsive={responsive}
        ssr={false}
        infinite={false}
        autoPlay={false}
        autoPlaySpeed={1000}
        keyBoardControl={true}
        customTransition="transform 400ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      />
      <div className="OurFavouritePicks__button">
        {/* <Button img={arrowRight} text="" /> */}
      </div>
    </div>
  )
}

export default OurFavouritePicks

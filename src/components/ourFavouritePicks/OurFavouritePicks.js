import "./../ourFavouritePicks/ourFavouritePicks.css"
import image2 from "../../images/RestaurantForCard1.webp"
import image3 from "../../images/RestaurantForCard2.jpeg"
import image4 from "../../images/RestaurantForCard3.avif"
import closedRestaurant from "../../images/closedRestaurant.jpg"
import { CarouselSlider } from "../carousel/Carousel"

export const OurFavouritePicks = (props) => {
  const { addToCart, decrement, increment, setCount, count, cartItems } = props
  const customStyles = {
    carouselContainer: "carouselContainer",
    carouselItem: "carouselItem",
    customText: "customText",
  }

  const carouselItems = [
    {
      image: image4,
      alt: "",
      description: "Mira",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
      link: "/mira",
    },
    {
      image: image2,
      alt: "",
      description: "Kara Fin",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
      link: "/kara-fin",
    },
    {
      image: closedRestaurant,
      text: "This restaurant is closed",
      alt: "",
      description: "‘T Kuyltje",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
      link: "",
    },
    {
      image: image2,
      alt: "",
      description: "Kara Fin",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
      link: "/kara-fin",
    },
    {
      image: image4,
      alt: "",
      description: "Mira",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
      link: "/mira",
    },
    {
      image: image2,
      alt: "",
      description: "Kara Fin",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
      link: "/kara-fin",
    },
    {
      image: image3,
      alt: "",
      description: "‘T Kuyltje",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
      link: "/t-kuyltje",
    },
    {
      image: image2,
      alt: "",
      description: "Kara Fin",
      description2: "★ 4.2  Very Good",
      description3: "Nicest place for burgers",
      description4: "Comfort food",
      link: "/kara-fin",
    },
  ]

  return (
    <div className="OurFavouritePicks">
      <div className="OurFavouritePicks__title">
        <h2>Our favourite picks</h2>
      </div>
      <CarouselSlider
        cartItems={cartItems}
        decrement={decrement}
        increment={increment}
        setCount={setCount}
        count={count}
        addToCart={addToCart}
        links={carouselItems.map((item) => item.link)}
        items={carouselItems}
        customStyles={customStyles}
        customText={customStyles.customText}
        showDots={false}
        ssr={false}
        infinite={false}
        customTransition="transform 400ms ease-in-out"
        transitionDuration={500}
        containerClass="carousel-container"
        removeArrowOnDeviceType={["tablet", "mobile"]}
      />
    </div>
  )
}

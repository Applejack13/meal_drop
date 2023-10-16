import "./../categories/categories.css"
import Carousel from "../carousel/Carousel"
import "slick-carousel/slick/slick.css"
import "slick-carousel/slick/slick-theme.css"
import img1 from "../../images/food1.png"
import img2 from "../../images/food2.png"
import img3 from "../../images/food3.png"
import img4 from "../../images/food4.png"
import img5 from "../../images/food5.png"
import img6 from "../../images/food6.png"

function Categories() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 6,
    slidesToScroll: 1,
  }

  const customStyles = {
    carouselContainer: "carousel-container_2",
    carouselItem: "carousel-item_2",
  }

  const carouselItems = [
    {
      image: img1,
      description: "Pizza",
    },
    {
      image: img2,
      description: "Burgers",
    },
    {
      image: img3,
      description: "Desserts",
    },
    {
      image: img4,
      description: "Sushi",
    },
    {
      image: img5,
      description: "Asian",
    },
    {
      image: img6,
      description: "Comfort Food",
    },
  ]

  return (
    <div className="Categories">
      <h2>Categories</h2>
      <p>View all categories</p>
      <div className="carousel-container_2">
        <Carousel
          settings={settings}
          items={carouselItems}
          customStyles={customStyles}
        ></Carousel>
      </div>
    </div>
  )
}

export default Categories

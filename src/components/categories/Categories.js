import "./../categories/categories.css"
import { FoodCategory } from "../foodCategory/FoodCategory"
import img1 from "../../images/food1.png"
import img2 from "../../images/food2.png"
import img3 from "../../images/food3.png"
import img4 from "../../images/food4.png"
import img5 from "../../images/food5.png"
import img6 from "../../images/food6.png"
import { Button } from "../button/Button"

export const Categories = () => {
  return (
    <div className="CategoriesWrapper">
      <div className="textContainer">
        <h2>Categories</h2>
        <Button
          text="View all categories"
          page="/categories"
          className="medium-ghost"
        />
      </div>
      <div className="Wrapper">
        <FoodCategory img={img1} alt="food1" title="Pizza" link="/pizza" />
        <FoodCategory img={img2} alt="food1" title="Burgers" link="/burgers" />
        <FoodCategory
          img={img3}
          alt="food1"
          title="Desserts"
          link="/desserts"
        />
        <FoodCategory img={img4} alt="food1" title="Sushi" link="/sushi" />
        <FoodCategory img={img5} alt="food1" title="Asian" link="/asian" />
        <FoodCategory
          img={img6}
          alt="food1"
          title="Comfort food"
          link="/comfort"
        />
      </div>
    </div>
  )
}

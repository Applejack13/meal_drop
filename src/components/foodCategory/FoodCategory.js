import "./../foodCategory/foodCategory.css"
import { Link } from "react-router-dom"

function FoodCategory({ img, alt, title, link }) {
  return (
    <Link to={link}>
      <div className="FoodCategory">
        <img src={img} alt={alt} />
        <p>{title}</p>
      </div>
    </Link>
  )
}

export default FoodCategory

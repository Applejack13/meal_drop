import "./../foodCategory/foodCategory.css"
import { Link } from "react-router-dom"

export const FoodCategory = (props) => {
  const { img, alt, title, link } = props
  return (
    <Link to={link}>
      <div className="FoodCategory">
        <img src={img} alt={alt} />
        <p>{title}</p>
      </div>
    </Link>
  )
}

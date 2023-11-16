import "../button/button.css"
import { Link } from "react-router-dom"

function Button({
  text,
  page,
  className,
  img,
  style,
  onClick,
  foodName,
  foodDescription,
  foodPrice,
}) {
  return (
    <>
      <Link to={page}>
        <button
          className={`button ${className}`}
          style={style}
          onClick={onClick}
        >
          <img src={img} alt="" />
          {text}
          <div>{foodName}</div>
          <div>{foodDescription}</div>
          <div>{foodPrice}</div>
        </button>
      </Link>
    </>
  )
}

export default Button

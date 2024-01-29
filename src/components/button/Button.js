import { Link } from "react-router-dom"

import "../button/button.scss"

export function Button(props) {
  const {
    text,
    page,
    className,
    img,
    style,
    onClick,
    foodName,
    foodDescription,
    foodPrice,
  } = props
  return (
    <div>
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
    </div>
  )
}

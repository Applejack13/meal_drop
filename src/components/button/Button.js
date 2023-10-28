import "../button/button.css"
import { Link } from "react-router-dom"

function Button({ text, page, className, img, style }) {
  return (
    <>
      <Link to={page}>
        <button className={`button ${className}`} style={style}>
          {text}
          <img src={img} alt="" />
        </button>
      </Link>
    </>
  )
}

export default Button

import "../button/button.css"
import { Link } from "react-router-dom"

function Button({ text, page, className, img, style, onClick }) {
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
        </button>
      </Link>
    </>
  )
}

export default Button

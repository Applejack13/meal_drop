import "../button/button.css"

import { Link } from "react-router-dom"

function Button({ style, text, page, className, img }) {
  return (
    <Link to={page}>
      <button className={className} style={style}>
        {text} {img}
      </button>
    </Link>
  )
}

export default Button

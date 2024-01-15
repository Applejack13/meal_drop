import "../linkInFooter/linkInFooter.css"
import { Link } from "react-router-dom"

export const LinkInFooter = (props) => {
  const { link, text } = props
  return (
    <div className="Link-in-footer">
      <li>
        <Link to={link}>{text}</Link>
      </li>
    </div>
  )
}

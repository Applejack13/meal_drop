import "../linkInFooter/linkInFooter.css"
import { Link } from "react-router-dom"

function LinkInFooter({ link, text }) {
  return (
    <div className="Link-in-footer">
      <li>
        <Link to={link}>{text}</Link>
      </li>
    </div>
  )
}

export default LinkInFooter

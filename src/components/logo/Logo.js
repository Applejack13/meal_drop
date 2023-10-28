import SmallLogo from "../../images/SmallLogoWithText.svg"
import BigLogo from "../../images/BigLogoWithoutText.svg"
import "../logo/logo.css"
import { Link } from "react-router-dom"

function Logo({ isSmall, link }) {
  return (
    <div className="logo">
      <Link to={link}>
        {isSmall ? (
          <div>
            <img src={SmallLogo} alt="SmallLogo" className="Small Logo" />
          </div>
        ) : (
          <div>
            <img src={BigLogo} alt="BigLogo" className="Big Logo" />
          </div>
        )}
      </Link>{" "}
    </div>
  )
}

export default Logo

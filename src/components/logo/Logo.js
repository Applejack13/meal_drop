import SmallLogo from "../../images/SmallLogoWithText.svg"
import BigLogo from "../../images/BigLogoWithoutText.svg"
import "../logo/logo.css"

function Logo({ isSmall }) {
  return (
    <div className="logo">
      {isSmall ? (
        <div>
          <img src={SmallLogo} alt="SmallLogo" className="Small Logo" />
        </div>
      ) : (
        <div>
          <img src={BigLogo} alt="BigLogo" className="Big Logo" />
        </div>
      )}
    </div>
  )
}

export default Logo

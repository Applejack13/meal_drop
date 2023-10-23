import { Link } from "react-router-dom"

function Logo({ logo }) {
  return (
    <Link to="/">
      <img src={logo} alt="logo_img" />
    </Link>
  )
}

export default Logo

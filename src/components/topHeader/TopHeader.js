import "../topHeader/topHeader.css"
import logo from "../../images/Logo.svg"
import shoppingCart from "../../images/shopping-cart 2.svg"
import Logo from "../logo/Logo"
import Button from "../button/Button"

function TopHeader() {
  return (
    <div className="Top-header">
      <div className="Top-header__logo">
        <Logo logo={logo} />
      </div>
      <div className="Top-header__search">
        <Button page="/" text="Home" />
        <Button page="/categories" text="All restaurants" />
        <img src={shoppingCart} alt="shoppingCart_img" />
      </div>
    </div>
  )
}

export default TopHeader

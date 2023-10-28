import "../topHeader/topHeader.css"
import shoppingCart from "../../images/shopping-cart 2.svg"
import Logo from "../logo/Logo"
import Button from "../button/Button"

function TopHeader() {
  return (
    <div className="Top-header">
      <div className="Top-header__logo">
        <Logo link="/" isSmall={true} />
        <div className="Top-header__search">
          <Button page="/" text="Home" className="medium-ghost" />
          <Button
            page="/allRestaurants"
            text="All restaurants"
            className="medium-ghost"
          />
          <Button
            img={shoppingCart}
            alt="shoppingCart_img"
            className="large-dark"
          />
        </div>
      </div>
    </div>
  )
}

export default TopHeader

import "../topHeader/topHeader.css"
import logo from "../../images/Logo.svg"
import shoppingCart from "../../images/shopping-cart 2.svg"

function TopHeader() {
  return (
    <div className="Top-header">
      <img src={logo} alt="logo_img" />
      <button>Home</button>
      <button>All restaurants</button>
      <img src={shoppingCart} alt="shoppingCart_img" />
    </div>
  )
}

export default TopHeader

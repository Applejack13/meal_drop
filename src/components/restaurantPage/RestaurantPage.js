import "../restaurantPage/restaurantPage.css"
import TopHeader from "../topHeader/TopHeader.js"
import Footer from "../footer/Footer.js"
import SecondHeader from "../secondHeader/SecondHeader.js"
import RestaurantBody from "../restaurantBody/RestaurantBody"

function RestaurantPage({ restaurantClass }) {
  return (
    <>
      <TopHeader />
      <SecondHeader className={`secondHeaderClass ${restaurantClass}`} />
      <RestaurantBody />
      <Footer />
    </>
  )
}

export default RestaurantPage

import "../restaurantPage/restaurantPage.css"
import TopHeader from "../topHeader/TopHeader"
import Footer from "../footer/Footer"
import SecondHeader from "../secondHeader/SecondHeader"
import RestaurantBody from "../restaurantBody/RestaurantBody"
import ThirdHeader from "../thirdHeader/ThirdHeader"

function RestaurantPage({
  restaurantClass,
  restaurantName,
  description,
  rating,
  buttons,
  thirdHeaderClassName,
  restaurantPageClass,
}) {
  return (
    <div className={restaurantPageClass}>
      <TopHeader />
      <SecondHeader className={`secondHeaderClass ${restaurantClass}`} />
      <ThirdHeader
        thirdHeaderClassName={thirdHeaderClassName}
        restaurantName={restaurantName}
        description={description}
        rating={rating}
        buttons={buttons}
      />
      <RestaurantBody />
      <Footer />
    </div>
  )
}

export default RestaurantPage

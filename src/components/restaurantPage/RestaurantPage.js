import { TopHeader } from "../topHeader/TopHeader"
import { Footer } from "../footer/Footer"
import { SecondHeader } from "../secondHeader/SecondHeader"
import { RestaurantBody } from "../restaurantBody/RestaurantBody"
import { ThirdHeader } from "../thirdHeader/ThirdHeader"

import "../restaurantPage/restaurantPage.css"
export function RestaurantPage(props) {
  const {
    restaurantClass,
    restaurantName,
    description,
    rating,
    buttons,
    thirdHeaderClassName,
    restaurantPageClass,
    cartItems,
    addToCart,
    decrement,
    increment,
    count,
    setCount,
  } = props
  return (
    <div className={restaurantPageClass}>
      <TopHeader cartItems={cartItems} isVisible={true} />
      <SecondHeader className={`secondHeaderClass ${restaurantClass}`} />
      <ThirdHeader
        thirdHeaderClassName={thirdHeaderClassName}
        restaurantName={restaurantName}
        description={description}
        rating={rating}
        buttons={buttons}
      />
      <RestaurantBody
        addToCart={addToCart}
        count={count}
        increment={increment}
        decrement={decrement}
        setCount={setCount}
      />
      <Footer />
    </div>
  )
}

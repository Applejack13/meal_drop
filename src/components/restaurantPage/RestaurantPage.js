import "../restaurantPage/restaurantPage.css"
import TopHeader from "../topHeader/TopHeader"
import Footer from "../footer/Footer"
import SecondHeader from "../secondHeader/SecondHeader"
import RestaurantBody from "../restaurantBody/RestaurantBody"
import ThirdHeader from "../thirdHeader/ThirdHeader"
import { useState } from "react"

function RestaurantPage({
  restaurantClass,
  restaurantName,
  description,
  rating,
  buttons,
  thirdHeaderClassName,
  restaurantPageClass,
}) {
  const [cartItems, setCartItems] = useState([])

  const addToCart = (product) => {
    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === product.id
    )

    if (existingItemIndex !== -1) {
      // Если товар уже есть в корзине, обновляем количество
      const updatedCartItems = cartItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + 1 }
          : item
      )
      setCartItems(updatedCartItems)
    } else {
      // Если товара нет в корзине, добавляем новый
      setCartItems([...cartItems, { ...product, quantity: 1 }])
    }
  }

  return (
    <div className={restaurantPageClass}>
      <TopHeader cartItems={cartItems} />
      <SecondHeader className={`secondHeaderClass ${restaurantClass}`} />
      <ThirdHeader
        thirdHeaderClassName={thirdHeaderClassName}
        restaurantName={restaurantName}
        description={description}
        rating={rating}
        buttons={buttons}
      />
      <RestaurantBody addToCart={addToCart} />
      <Footer />
    </div>
  )
}

export default RestaurantPage

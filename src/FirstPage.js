import {
  TopHeader,
  Banner,
  OurFavouritePicks,
  AwardWinningBanner,
  Categories,
  Footer,
} from "./allPages"

import "./index.css"

export function FirstPage(props) {
  const { cartItems, addToCart, decrement, increment, setCount, count } = props
  return (
    <div className="FirstPage">
      <TopHeader isVisible={true} cartItems={cartItems} />
      <Banner />
      <OurFavouritePicks
        cartItems={cartItems}
        addToCart={addToCart}
        decrement={decrement}
        increment={increment}
        setCount={setCount}
        count={count}
      />
      <AwardWinningBanner />
      <Categories />
      <Footer />
    </div>
  )
}

export function cartItemsToParse(cartItems) {
  let parsedCartItems = []

  if (Array.isArray(cartItems)) {
    parsedCartItems = cartItems.map((item) => ({
      ...item,
      foodPrice: parseFloat(item.foodPrice),
    }))
  } else {
    try {
      parsedCartItems = JSON.parse(cartItems)
      parsedCartItems = parsedCartItems.map((item) => ({
        ...item,
        foodPrice: parseFloat(item.foodPrice),
      }))
    } catch (error) {
      console.error("Error parsing cart items:", error)
    }
  }

  parsedCartItems = parsedCartItems.map((item) => ({
    ...item,
    foodPrice: parseFloat(item.foodPrice),
  }))

  return parsedCartItems
}
export function calculateTotalPrice(parsedCartItems) {
  let totalPrice = 0
  parsedCartItems.forEach((item) => {
    totalPrice += item.foodPrice * item.quantity
  })
  return totalPrice
}

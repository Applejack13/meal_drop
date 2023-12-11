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
  const [count, setCount] = useState(1)

  const addToCart = (products) => {
    const newProduct = {
      foodName: products.foodName,
      foodDescription: products.foodDescription,
      foodPrice: products.foodPrice,
      id: products.id,
      quantity: count,
    }

    const existingItemIndex = cartItems.findIndex(
      (item) => item.id === newProduct.id
    )

    if (existingItemIndex !== -1) {
      const updatedCartItems = cartItems.map((item, index) =>
        index === existingItemIndex
          ? { ...item, quantity: item.quantity + count }
          : item
      )
      setCartItems(updatedCartItems)
    } else {
      setCartItems([...cartItems, newProduct])
    }
  }

  // const addToCart = (product) => {
  //   const newProduct = {
  //     id: product.id,
  //     quantity: count,
  //     foodName: product.foodName,
  //     foodDescription: product.foodDescription,
  //     foodPrice: product.foodPrice,
  //   }

  //   const existingItemIndex = cartItems.cartItems.findIndex(
  //     (item) => item.id === newProduct.id
  //   )

  //   if (existingItemIndex !== -1) {
  //     const updatedCartItems = cartItems.cartItems.map((item, index) =>
  //       index === existingItemIndex
  //         ? { ...item, quantity: item.quantity + count }
  //         : item
  //     )
  //     setCartItems({ ...cartItems, cartItems: updatedCartItems })
  //   } else {
  //     setCartItems({
  //       ...cartItems,
  //       cartItems: [...cartItems.cartItems, newProduct],
  //     })
  //   }
  // }

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))
  }

  const increment = () => {
    setCount((prevCount) => (prevCount < 9 ? prevCount + 1 : 9))
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

export default RestaurantPage

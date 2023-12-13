import { useState } from "react"

const HOCWrapper = (WrappedComponent) => {
  return function HOCWrapper(props) {
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

    const decrement = () => {
      setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))
    }

    const increment = () => {
      setCount((prevCount) => (prevCount < 9 ? prevCount + 1 : 9))
    }

    return (
      <WrappedComponent
        cartItems={cartItems}
        decrement={decrement}
        increment={increment}
        setCount={setCount}
        count={count}
        addToCart={addToCart}
        {...props}
      />
    )
  }
}

export default HOCWrapper

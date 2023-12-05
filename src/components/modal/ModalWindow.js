import React from "react"
import "../modal/modalWindow.css"
import Button from "../button/Button"

function ModalWindow({ text, clazz, page, cartItems = {} }) {
  let parsedCartItems = []

  if (
    typeof cartItems === "object" &&
    typeof cartItems.cartItems === "string"
  ) {
    try {
      parsedCartItems = JSON.parse(cartItems.cartItems)
    } catch (error) {
      console.error("Error parsing cart items:", error)
    }
  } else if (Array.isArray(cartItems.cartItems)) {
    parsedCartItems = cartItems.cartItems
  }

  parsedCartItems = parsedCartItems.map((item) => ({
    ...item,
    price: parseFloat(item.price),
    // quantity: parseFloat(count),
  }))

  const calculateTotalPrice = () => {
    let totalPrice = 0
    parsedCartItems.forEach((item) => {
      totalPrice += item.price * item.quantity // Умножаем цену на количество
    })
    return totalPrice
  }

  return (
    <div className="modalContainer">
      <h2>Your order</h2>
      <div className="orderListContainer">
        {parsedCartItems.map((item, index) => (
          <div key={index} className="orderList">
            <p>{item.name}</p>
            <p>{item.description}</p>
            <p>{`${item.price * item.quantity} $`}</p>
            <p>Quantity: {item.quantity}</p>{" "}
          </div>
        ))}
      </div>
      <div className="orderTotal">
        <p />
        <div className="total1">
          <h2>Total: </h2>
          <h2>{calculateTotalPrice()} $</h2>
        </div>
        <div className="total2">
          <Button className={clazz} text={text} page={page} />
        </div>
      </div>
    </div>
  )
}

export default ModalWindow

// Как обеспечить появление в корзине правильного количество товаров?

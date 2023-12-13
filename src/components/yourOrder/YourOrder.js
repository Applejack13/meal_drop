import "../yourOrder/yourOrder.css"

function YourOrder({ cartItems }) {
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
    foodPrice: parseFloat(item.foodPrice),
  }))

  const calculateTotalPrice = () => {
    let totalPrice = 0
    parsedCartItems.forEach((item) => {
      totalPrice += item.foodPrice * item.quantity
    })
    return totalPrice
  }

  return (
    <div className="yourOrder">
      <h2>Your order</h2>
      <div className="orderList">
        {parsedCartItems.map((item, index) => (
          <div key={index} className="orderList">
            <p>{item.foodName}</p>
            <p>{item.foodDescription}</p>
            <p>{`${item.foodPrice * item.quantity} $`}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className="orderTotal">
        <h2>{`Total: ${calculateTotalPrice()}`}</h2>
      </div>
    </div>
  )
}

export default YourOrder

import "../yourOrder/yourOrder.css"

function YourOrder({ cartItems }) {
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

  const calculateTotalPrice = () => {
    let totalPrice = 0
    parsedCartItems.forEach((item) => {
      totalPrice += item.foodPrice * item.quantity
    })
    return totalPrice
  }

  return (
    <div className="yourOrderCheckout">
      <h2>Your order</h2>
      {parsedCartItems.map((item, index) => (
        <div key={index} className="orderListCheckout">
          <p>{item.quantity}</p>
          <p>{item.foodName}</p>
          <p>{`${item.foodPrice * item.quantity} $`}</p>
        </div>
      ))}
      <p className="justLine"></p>
      <div className="orderTotalCheckout">
        <h2>Total: </h2>
        <h2>{calculateTotalPrice()} $</h2>
      </div>
    </div>
  )
}

export default YourOrder

import "../yourOrder/yourOrder.css"
import { calculateTotalPrice, cartItemsToParse } from "../../FirstPage"

function YourOrder({ cartItems }) {
  const parsedCartItems = cartItemsToParse(cartItems)
  const totalPrice = calculateTotalPrice(parsedCartItems)

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
        <h2>{totalPrice} $</h2>
      </div>
    </div>
  )
}

export default YourOrder

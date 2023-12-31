import "../modal/modalWindow.css"
import Button from "../button/Button"
import { calculateTotalPrice, cartItemsToParse } from "../../FirstPage"

function ModalWindow({ text, clazz, page, cartItems }) {
  const parsedCartItems = cartItemsToParse(cartItems)
  const totalPrice = calculateTotalPrice(parsedCartItems)

  return (
    <div className="modalContainer">
      <h2>Your order</h2>
      <div className="orderListContainer">
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
        <p />
        <div className="total1">
          <h2>Total: </h2>
          <h2>{totalPrice} $</h2>
        </div>
        <div className="total2">
          <Button className={clazz} text={text} page={page} />
        </div>
      </div>
    </div>
  )
}

export default ModalWindow

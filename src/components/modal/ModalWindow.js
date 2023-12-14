import "../modal/modalWindow.css"
import Button from "../button/Button"

function ModalWindow({ text, clazz, page, cartItems }) {
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

import "../yourOrder/yourOrder.css"

function YourOrder({ dishname, price, totalPrice }) {
  return (
    <div className="yourOrder">
      <h2>Your order</h2>
      <div className="orderList">
        <p>{dishname} </p>
        <p>{price} </p>
      </div>
      <div className="orderTotal">
        <h2>Total: </h2>
        <h2>{totalPrice}</h2>
      </div>
    </div>
  )
}

export default YourOrder

import "../yourOrder/yourOrder.css"

function YourOrder() {
  return (
    <div className="yourOrder">
      <h2>Your order</h2>
      <div className="orderList">
        <p>Dishname </p>
        <p>8.50$ </p>
      </div>
      <div className="orderList">
        <p>Dishname </p>
        <p>8.50$ </p>
      </div>
      <div className="orderTotal">
        <p>Total: </p>
        <p>17.00$</p>
      </div>
    </div>
  )
}

export default YourOrder

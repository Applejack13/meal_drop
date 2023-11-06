import "../yourOrderModal/yourOrderModal.css"
import Button from "../button/Button"

function YourOrderModal({ total }) {
  return (
    <div className="yourOrderModal">
      <h2>Your order</h2>
      <div className="yourOrder">{/* order list */}</div>
      <div className="yourTotal">
        <h3>Total</h3>
        <p>{total}</p>
      </div>
      <Button text="Checkout" />
    </div>
  )
}

export default YourOrderModal

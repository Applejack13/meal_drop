import "../modal/modalWindow.css"
import Button from "../button/Button"

function ModalWindow({
  text,
  clazz,
  page,
  dishname,
  description,
  price,
  totalPrice,
}) {
  return (
    <div className="modalContainer">
      <h2>Your order</h2>
      <div className="orderListContainer">
        <div className="orderList">
          <p>{dishname} </p>
          <p>{description} </p>
          <p>{price} </p>
        </div>{" "}
      </div>
      <div className="orderTotalContainer">
        <p></p>
        <div className="orderTotal">
          <h2>Total: </h2>
          <h2>{totalPrice}</h2>
        </div>
        <Button className={clazz} text={text} page={page} />
      </div>
    </div>
  )
}

export default ModalWindow

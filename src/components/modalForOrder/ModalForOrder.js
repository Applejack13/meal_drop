import "../modalForOrder/modalForOrder.css"
import Button from "../button/Button"

function ModalForOrder({
  foodName,
  foodDescription,
  foodPrice,
  onClick,
  addToCart,
  sum,
  increment,
  decrement,
  count,
}) {
  sum = parseFloat(foodPrice) * count

  return (
    <div className="mfoContainer">
      <div className="modalForOrder">
        <div className="modalForOrder__title">
          <h2>{foodName}</h2>
        </div>
        <div className="modalForOrder__description">
          <p>{foodDescription}</p>
        </div>
      </div>
      <div className="mfoFuncAndButton">
        <div className="function">
          <Button onClick={decrement} text="-" />
          <p>{count}</p>
          <Button onClick={increment} text="+" />
        </div>
        <div className="btn">
          <Button
            text={`add for ${sum} $`}
            className="large-dark"
            onClick={onClick}
            addToCart={addToCart}
          />
        </div>
      </div>
    </div>
  )
}

export default ModalForOrder

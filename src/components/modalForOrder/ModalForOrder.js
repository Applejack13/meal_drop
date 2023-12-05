import "../modalForOrder/modalForOrder.css"
import Button from "../button/Button"
import { useState } from "react"

function ModalForOrder({
  foodName,
  foodDescription,
  foodPrice,
  onClick,
  addToCart,
}) {
  const [count, setCount] = useState(1)

  const decrement = () => {
    setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))
  }

  const increment = () => {
    setCount((prevCount) => prevCount + 1)
    if (count > 9) {
      setCount(1)
    }
  }

  let sum = parseFloat(foodPrice) * count

  return (
    <div className="mofContainer">
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

// Как передать count из модального окна button в модальное окно корзины?

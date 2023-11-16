import "../modalForOrder/modalForOrder.css"
import Button from "../button/Button"
import { useState } from "react"

function ModalForOrder({ foodName, foodDescription, foodPrice, onClick }) {
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
            text={`add for ${parseFloat(foodPrice) * parseFloat(count)} $`}
            className="large-dark"
            onClick={onClick}
          />
        </div>
      </div>
    </div>
  )
}

export default ModalForOrder

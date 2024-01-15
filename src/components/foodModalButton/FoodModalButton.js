import "../foodModalButton/foodModalButton.css"
import { Button } from "../button/Button"

export const FoodModalButton = (props) => {
  const { food, foodDescription, sum } = props
  return (
    <div className="foodModalButton">
      <div className="nameOfFood">
        <h2>{food}</h2>
        <p>{foodDescription}</p>
      </div>
      <div className="foodCounter">
        <Button text={sum} />
      </div>
    </div>
  )
}

//  Am I use this?

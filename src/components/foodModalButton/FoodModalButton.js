import "../foodModalButton/foodModalButton.css"
import Button from "../button/Button"

function FoodModalButton({ food, foodDescription, sum }) {
  return (
    <div className="foodModalButton">
      <div className="nameOfFood">
        <h2>{food}</h2>
        <p>{foodDescription}</p>
      </div>
      <div className="foodCounter">
        {/* component with + - */}
        <Button text={`add for ${sum}`} />
      </div>
    </div>
  )
}

export default FoodModalButton

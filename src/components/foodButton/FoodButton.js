import "../foodButton/foodButton.css"

function foodButton({ foodName, foodDescription, foodPrice }) {
  return (
    <div className="foodButton">
      <h3>{foodName}</h3>
      <p>{foodDescription}</p>
      <p>{foodPrice}</p>
    </div>
  )
}

export default foodButton

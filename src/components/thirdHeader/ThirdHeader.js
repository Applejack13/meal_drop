import "../thirdHeader/thirdHeader.css"

function ThirdHeader({
  restaurantName,
  description,
  rating,
  buttons,
  thirdHeaderClassName,
}) {
  return (
    <div className={`otherStyles ${thirdHeaderClassName}`}>
      <h2>{restaurantName}</h2>
      <p>{description}</p>
      <p>{rating}</p>
      <p>{buttons}</p>
    </div>
  )
}

export default ThirdHeader

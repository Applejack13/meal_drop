import "../thirdHeader/thirdHeader.css"

export const ThirdHeader = (props) => {
  const { restaurantName, description, rating, buttons, thirdHeaderClassName } =
    props
  return (
    <div className={`otherStyles ${thirdHeaderClassName}`}>
      <h2>{restaurantName}</h2>
      <p>{description}</p>
      <p>{rating}</p>
      <p>{buttons}</p>
    </div>
  )
}

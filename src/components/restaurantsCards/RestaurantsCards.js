import "./../restaurantsCards/restaurantsCards.css"

function RestaurantsCards({ img, description }) {
  return (
    <div className="restaurantsCards">
      <img src={img} alt={description} />
      <h3>{description}</h3>
    </div>
  )
}

export default RestaurantsCards

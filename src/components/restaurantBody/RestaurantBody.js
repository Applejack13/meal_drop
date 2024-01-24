import { FoodButton, Products } from "../../allPages"

import "../restaurantBody/restaurantBody.css"

export function RestaurantBody(props) {
  const { addToCart, count, increment, decrement, setCount } = props

  const renderFoodButtons = (foodCategory) => {
    return foodCategory.map((product) => (
      <FoodButton
        key={product.id}
        foodName={product.foodName}
        foodDescription={product.foodDescription}
        foodPrice={`${product.foodPrice} $`}
        id={product.id}
        addToCart={addToCart}
        count={count}
        increment={increment}
        decrement={decrement}
        setCount={setCount}
      />
    ))
  }

  return (
    <div className="restaurantBody">
      <h2>To eat</h2>
      <div className="toEat">{renderFoodButtons(Products.slice(0, 3))}</div>
      <h2>Dessert</h2>
      <div className="dessert">{renderFoodButtons(Products.slice(3, 4))}</div>
      <h2>To drink</h2>
      <div className="toDrink">{renderFoodButtons(Products.slice(4))}</div>
    </div>
  )
}

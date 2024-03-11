import { FoodButton, Products } from "../../allPages";

import "../restaurantBody/restaurantBody.css";

export function RestaurantBody({ ...props }) {
  const renderFoodButtons = (foodCategory) => {
    return foodCategory.map((product) => (
      <FoodButton
        key={product.id}
        // fix ids
        foodName={product.foodName}
        foodDescription={product.foodDescription}
        foodPrice={`${product.foodPrice} $`}
        addToCart={props.addToCart}
      />
    ));
  };

  return (
    <div className='restaurantBody'>
      <h2>To eat</h2>
      <div className='toEat'>{renderFoodButtons(Products.slice(0, 3))}</div>
      <h2>Dessert</h2>
      <div className='dessert'>{renderFoodButtons(Products.slice(3, 4))}</div>
      <h2>To drink</h2>
      <div className='toDrink'>{renderFoodButtons(Products.slice(4))}</div>
    </div>
  );
}

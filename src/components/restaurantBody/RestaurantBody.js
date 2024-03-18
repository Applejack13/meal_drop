import { FoodButton, Products } from "../../allPages";

import "../restaurantBody/restaurantBody.css";

export function RestaurantBody() {
  const renderFoodButtons = (foodCategory) => {
    return foodCategory.map(({ ...props }) => (
      <FoodButton
        key={props.id}
        id={props.id}
        foodName={props.foodName}
        foodDescription={props.foodDescription}
        foodPrice={`${props.foodPrice} $`}
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

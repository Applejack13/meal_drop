import "../restaurantBody/restaurantBody.css"
import FoodButton from "../foodButton/FoodButton"

function RestaurantBody() {
  return (
    <>
      <div className="restaurantBody">
        <h2>To eat</h2>
        <div className="toEat">
          <FoodButton
            foodName="Cheeseburger"
            foodDescription="Nice grilled burger with cheese"
            foodPrice="8.50$"
          />
          <FoodButton
            foodName="Fries"
            foodDescription="Fried french fries"
            foodPrice="2.50$"
          />
          <FoodButton
            foodName="Nuggets"
            foodDescription="Fried chicken nuggets"
            foodPrice="6.50$"
          />
        </div>
        <h2>Dessert</h2>
        <div className="dessert">
          <FoodButton
            foodName="Vanilla ice cream"
            foodDescription="Ice cream"
            foodPrice="2.00$"
          />
        </div>
        <h2>To drink</h2>
        <div className="toDrink">
          <FoodButton foodName="Coca-cola" foodPrice="1.75$" />
          <FoodButton foodName="Fanta" foodPrice="1.50$" />
          <FoodButton foodName="Sprite" foodPrice="1.50$" />
        </div>
      </div>
    </>
  )
}

export default RestaurantBody

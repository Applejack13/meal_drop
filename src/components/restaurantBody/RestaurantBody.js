import "../restaurantBody/restaurantBody.css"
import FoodButton from "../foodButton/FoodButton"

function RestaurantBody({ addToCart }) {
  const products = {
    foodNames: [
      "Cheeseburger",
      "Fries",
      "Nuggets",
      "Ice cream",
      "Coca-cola",
      "Fanta",
      "Sprite",
    ],
    foodDescriptions: [
      "Nice grilled burger with cheese",
      "Fried french fries",
      "Fried chicken nuggets",
      "Ice cream",
    ],
    foodPrice: ["8.50", "2.50", "6.50", "2.00", "1.75", "1.50", "1.00"],

    id: [
      "sd65sd6sd",
      "sd6f5sdf4s65sdf",
      "sd65sd6sd",
      "sd6f5sdf4s65df",
      "sdlkgsdhglsdkg",
      "Fjhdslsdg",
      "Fsdfhlksdgjsdlkgh",
      // here'll be some random ids
    ],
  }

  return (
    <>
      <div className="restaurantBody">
        <h2>To eat</h2>
        <div className="toEat">
          <FoodButton
            foodName={products.foodNames[0]}
            foodDescription={products.foodDescriptions[0]}
            foodPrice={`${products.foodPrice[0]} $`}
            addToCart={addToCart}
            id={products.id[0]}
          />
          <FoodButton
            foodName={products.foodNames[1]}
            foodDescription={products.foodDescriptions[1]}
            foodPrice={`${products.foodPrice[1]} $`}
            addToCart={addToCart}
            id={products.id[1]}
          />
          <FoodButton
            foodName={products.foodNames[2]}
            foodDescription={products.foodDescriptions[2]}
            foodPrice={`${products.foodPrice[2]} $`}
            addToCart={addToCart}
            id={products.id[2]}
          />
        </div>
        <h2>Dessert</h2>
        <div className="dessert">
          <FoodButton
            foodName={products.foodNames[3]}
            foodPrice={`${products.foodPrice[3]} $`}
            addToCart={addToCart}
            id={products.id[3]}
          />
        </div>
        <h2>To drink</h2>
        <div className="toDrink">
          <FoodButton
            foodName={products.foodNames[4]}
            foodPrice={`${products.foodPrice[4]} $`}
            addToCart={addToCart}
            id={products.id[4]}
          />
          <FoodButton
            foodName={products.foodNames[5]}
            foodPrice={`${products.foodPrice[5]} $`}
            addToCart={addToCart}
            id={products.id[5]}
          />
          <FoodButton
            foodName={products.foodNames[6]}
            foodPrice={`${products.foodPrice[6]} $`}
            addToCart={addToCart}
            id={products.id[6]}
          />
        </div>
      </div>
    </>
  )
}

export default RestaurantBody

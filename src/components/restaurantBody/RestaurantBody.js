import "../restaurantBody/restaurantBody.css"
import FoodButton from "../foodButton/FoodButton"

function RestaurantBody({ addToCart, count, increment, decrement, setCount }) {
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
      "Vanilla ice cream",
    ],
    foodPrice: ["8.50", "2.50", "6.50", "2.00", "1.75", "1.50", "1.00"],

    id: [
      "sd65sd6sd",
      "sd6f5sdf4s65sdf",
      "sd65sd6sfgdfgdfgd",
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
            count={count}
            increment={increment}
            decrement={decrement}
            setCount={setCount}
          />
          <FoodButton
            foodName={products.foodNames[1]}
            foodDescription={products.foodDescriptions[1]}
            foodPrice={`${products.foodPrice[1]} $`}
            addToCart={addToCart}
            id={products.id[1]}
            count={count}
            increment={increment}
            decrement={decrement}
            setCount={setCount}
          />
          <FoodButton
            foodName={products.foodNames[2]}
            foodDescription={products.foodDescriptions[2]}
            foodPrice={`${products.foodPrice[2]} $`}
            addToCart={addToCart}
            id={products.id[2]}
            count={count}
            increment={increment}
            decrement={decrement}
            setCount={setCount}
          />
        </div>
        <h2>Dessert</h2>
        <div className="dessert">
          <FoodButton
            foodName={products.foodNames[3]}
            foodPrice={`${products.foodPrice[3]} $`}
            addToCart={addToCart}
            foodDescription={products.foodDescriptions[3]}
            id={products.id[3]}
            count={count}
            increment={increment}
            decrement={decrement}
            setCount={setCount}
          />
        </div>
        <h2>To drink</h2>
        <div className="toDrink">
          <FoodButton
            foodName={products.foodNames[4]}
            foodPrice={`${products.foodPrice[4]} $`}
            addToCart={addToCart}
            id={products.id[4]}
            count={count}
            increment={increment}
            decrement={decrement}
            setCount={setCount}
          />
          <FoodButton
            foodName={products.foodNames[5]}
            foodPrice={`${products.foodPrice[5]} $`}
            addToCart={addToCart}
            id={products.id[5]}
            count={count}
            increment={increment}
            decrement={decrement}
            setCount={setCount}
          />
          <FoodButton
            foodName={products.foodNames[6]}
            foodPrice={`${products.foodPrice[6]} $`}
            addToCart={addToCart}
            id={products.id[6]}
            count={count}
            increment={increment}
            decrement={decrement}
            setCount={setCount}
          />
        </div>
      </div>
    </>
  )
}

export default RestaurantBody

// or shorter?

// import "../restaurantBody/restaurantBody.css";
// import FoodButton from "../foodButton/FoodButton";

// function RestaurantBody({ addToCart, count, increment, decrement, setCount }) {
//   const products = {
//     foodNames: [
//       "Cheeseburger",
//       "Fries",
//       "Nuggets",
//       "Ice cream",
//       "Coca-cola",
//       "Fanta",
//       "Sprite",
//     ],
//     foodDescriptions: [
//       "Nice grilled burger with cheese",
//       "Fried french fries",
//       "Fried chicken nuggets",
//       "Ice cream",
//     ],
//     foodPrice: ["8.50", "2.50", "6.50", "2.00", "1.75", "1.50", "1.00"],
//     id: [
//       "sd65sd6sd",
//       "sd6f5sdf4s65sdf",
//       "sd65sd6sfgdfgdfgd",
//       "sd6f5sdf4s65df",
//       "sdlkgsdhglsdkg",
//       "Fjhdslsdg",
//       "Fsdfhlksdgjsdlkgh",
//       // here'll be some random ids
//     ],
//   };

//   return (
//     <div className="restaurantBody">
//       {["To eat", "Dessert", "To drink"].map((category, index) => (
//         <div key={index}>
//           <h2>{category}</h2>
//           <div className={category.toLowerCase().replace(" ", "")}>
//             {products.foodNames
//               .slice(index * 3, (index + 1) * 3)
//               .map((foodName, i) => (
//                 <FoodButton
//                   key={i}
//                   foodName={foodName}
//                   foodDescription={products.foodDescriptions[index * 3 + i]}
//                   foodPrice={`${products.foodPrice[index * 3 + i]} $`}
//                   addToCart={addToCart}
//                   id={products.id[index * 3 + i]}
//                   count={count}
//                   increment={increment}
//                   decrement={decrement}
//                   setCount={setCount}
//                 />
//               ))}
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// }

// export default RestaurantBody;

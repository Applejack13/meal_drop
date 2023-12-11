// import Button from "../button/Button"
// import { useState } from "react"

// function CounterForMFO(foodPrice, onClick, addToCart, sum) {
//   const [count, setCount] = useState(1)

//   const decrement = () => {
//     setCount((prevCount) => (prevCount > 1 ? prevCount - 1 : 1))
//   }

//   const increment = () => {
//     setCount((prevCount) => prevCount + 1)
//     if (count > 9) {
//       setCount(1)
//     }
//   }

//   sum = parseFloat(foodPrice) * count

//   return (
//     <div className="mfoFuncAndButton">
//       <div className="function">
//         <Button onClick={decrement} text="-" />
//         <p>{count}</p>
//         <Button onClick={increment} text="+" />
//       </div>
//       <div className="btn">
//         <Button
//           text={`add for ${sum} $`}
//           className="large-dark"
//           onClick={onClick}
//           addToCart={addToCart}
//         />
//       </div>
//     </div>
//   )
// }

// export default CounterForMFO

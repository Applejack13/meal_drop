import { useSelector } from "react-redux";

import { Button } from "../button/Button";

import { calculateTotalPrice, cartItemsToParse } from "../../functionsForCart";

import "../modal/modalWindow.scss";

export function ModalWindow({ ...props }) {
  const parsedCartItems = cartItemsToParse(props.cartItems);
  const totalPrice = calculateTotalPrice(parsedCartItems);
  const quantity = useSelector((state) => state.value);

  return (
    <div className='modalContainer'>
      <h2>Your order</h2>
      <div className='orderListContainer'>
        {parsedCartItems.map((item, index) => (
          <div key={index} className='orderList'>
            <p>{item.foodName}</p>
            {item.foodDescription !== undefined ? (
              <p>{item.foodDescription}</p>
            ) : null}
            <p>{`${item.foodPrice * quantity} $`}</p>
            <p>Quantity: {quantity}</p>
          </div>
        ))}
      </div>
      <div className='orderTotal'>
        <p />
        <div className='total1'>
          <h2>Total: </h2>
          <h2>{totalPrice} $</h2>
        </div>
        <div className='total2'>
          <Button className={props.clazz} text={props.text} page={props.page} />
        </div>
      </div>
    </div>
  );
}

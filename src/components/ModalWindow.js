import { useSelector } from "react-redux";

import { Button } from "./Button";

import "../modal/modalWindow.scss";

export function ModalWindow({ ...props }) {
  const cartItems = useSelector((state) => state.cart.cartItems || []);
  const sum = useSelector((state) => state.cart.sum || 0);

  return (
    <div className='modalContainer'>
      <h2>Your order</h2>
      <div className='orderListContainer'>
        {cartItems.map((item, index) => (
          <div key={index} className='orderList'>
            <p>{item.product.foodName}</p>
            {item.product.foodDescription !== undefined ? (
              <p>{item.product.foodDescription}</p>
            ) : null}
            <p>{`${item.product.foodPrice * item.quantity} $`}</p>
            <p>Quantity: {item.quantity}</p>
          </div>
        ))}
      </div>
      <div className='orderTotal'>
        <p />
        <div className='total1'>
          <h2>Total: </h2>
          <h2>{sum} $</h2>
        </div>
        <div className='total2'>
          <Button className={props.clazz} text={props.text} page={props.page} />
        </div>
      </div>
    </div>
  );
}

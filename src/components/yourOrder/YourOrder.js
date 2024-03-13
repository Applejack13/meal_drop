import { useSelector } from "react-redux";

import "../yourOrder/yourOrder.scss";

export function YourOrder() {
  const cartItems = useSelector((state) => state.counter.cartItems || []);
  return (
    <div className='yourOrderCheckout'>
      <h2>Your order</h2>
      {cartItems.map((item, index) => (
        <div key={index} className='orderListCheckout'>
          <p>{item.quantity}</p>
          <p>{item.foodName}</p>
          <p>{`${item.foodPrice * item.quantity} $`}</p>
        </div>
      ))}
      <p className='justLine'></p>
      <div className='orderTotalCheckout'>
        <h2>Total: </h2>
        <h2>{"$$$"} $</h2>
      </div>
    </div>
  );
}

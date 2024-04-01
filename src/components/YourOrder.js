import { useSelector } from "react-redux";

import "../yourOrder/yourOrder.scss";

export function YourOrder() {
  const cartItems = useSelector((state) => state.cart.cartItems);
  const sum = useSelector((state) => state.cart.sum || 0);

  return (
    <div className='yourOrderCheckout'>
      <h2>Your order</h2>
      {cartItems.map((item, index) => (
        <div key={index} className='orderListCheckout'>
          <p>{item.quantity}</p>
          <p>{item.product.foodName}</p>
          <p>{`${item.product.foodPrice * item.quantity} $`}</p>
        </div>
      ))}
      <p className='justLine'></p>
      <div className='orderTotalCheckout'>
        <h2>Total: </h2>
        <h2>{sum} $</h2>
      </div>
    </div>
  );
}

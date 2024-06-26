import { YourOrder, Inputs } from "../../allPages";

import "../checkout/checkout.scss";

export function Checkout() {
  return (
    <div className='orderPage__content'>
      <div className='checkout'>
        <h2>Checkout</h2>
      </div>
      <div className='bodyContainer'>
        <div className='orderContainer1'>
          <div className='contactAndSteps'>
            <p>Delivery Details</p>
          </div>
          <Inputs />
        </div>
        <YourOrder className='yourOrder' />
      </div>
    </div>
  );
}

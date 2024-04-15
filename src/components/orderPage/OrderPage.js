import React from "react";

import { TopHeader, Checkout } from "../../allPages";
import "../orderPage/orderPage.scss";

export function OrderPage() {
  return (
    <div className='orderPage'>
      <TopHeader isVisible={false} />
      <Checkout />
    </div>
  );
}

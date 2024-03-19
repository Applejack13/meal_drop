import React from "react";

import { TopHeader, Checkout } from "../../allPages";
import "../orderPage/orderPage.css";

export function OrderPage() {
  return (
    <div className='orderPage'>
      <TopHeader isVisible={false} />
      <Checkout />
    </div>
  );
}

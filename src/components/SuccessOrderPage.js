import React, { useEffect, useState } from "react";

import { TopHeader } from "./TopHeader";
import { SecondHeader, YourOrder } from "../allPages";

import img from "../../images/successPageImg.svg";

import "../successOrderPage/successOrderPage.scss";

export function SuccessOrderPage({ cartItems }) {
  const [deliveryTime, setDeliveryTime] = useState({ hours: 0, minutes: 0 });

  useEffect(() => {
    const timeToDelivery = new Date();
    const hours = timeToDelivery.getHours();
    const minutes = timeToDelivery.getMinutes();
    setDeliveryTime({ hours, minutes });
  }, []);

  return (
    <div className='successOrderPage'>
      <TopHeader />
      <SecondHeader text='Order confirmed' className='secondHeader' />
      <div className='timeAndOrder'>
        <h4>Estimated delivery</h4>
        <h2>
          {deliveryTime.hours === 23
            ? (deliveryTime.hours = 0)
            : deliveryTime.hours + 1}
          :{deliveryTime.minutes} today
        </h2>
        <div className='yourOrderWrapper'>
          <YourOrder cartItems={cartItems} />
        </div>
      </div>
      <div className='ladiesImg'>
        <img src={img} alt='' className='ladies2' />
      </div>
    </div>
  );
}

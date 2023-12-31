import React, { useEffect, useState } from "react"
import "../successOrderPage/successOrderPage.css"
import TopHeader from "../topHeader/TopHeader"
import SecondHeader from "../secondHeader/SecondHeader"
import YourOrder from "../yourOrder/YourOrder"
import img from "../../images/successPageImg.svg"

function SuccessOrderPage({ cartItems }) {
  const [deliveryTime, setDeliveryTime] = useState({ hours: 0, minutes: 0 })

  useEffect(() => {
    const timeToDelivery = new Date()
    const hours = timeToDelivery.getHours() + 1 // fix it later
    const minutes = timeToDelivery.getMinutes()
    setDeliveryTime({ hours, minutes })
  }, [])

  return (
    <div className="successOrderPage">
      <TopHeader />
      <SecondHeader text="Order confirmed" className="secondHeader" />
      <div className="timeAndOrder">
        <h4>Estimated delivery</h4>
        <h2>
          {deliveryTime.hours}:{deliveryTime.minutes} today
        </h2>
        <div className="yourOrderWrapper">
          <YourOrder cartItems={cartItems} />
        </div>
      </div>
      <div className="ladiesImg">
        <img src={img} alt="" className="ladies2" />
      </div>
    </div>
  )
}

export default SuccessOrderPage

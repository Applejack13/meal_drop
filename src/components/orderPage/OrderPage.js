import React, { useState } from "react"
import "../orderPage/orderPage.css"
import TopHeader from "../topHeader/TopHeader"
import Checkout from "../checkout/Checkout"

function OrderPage({ cartItems }) {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    if (step === 1) {
      setStep(2)
    }
  }

  const prevStep = () => {
    setStep(1)
  }

  const commonProps = {
    clazz: "show",
    progress: step === 1 ? "" : "secondStep",
    onClick: step === 1 ? nextStep : prevStep,
  }

  const firstStepProps = {
    headerText: "Contact Details",
    step: "1",
    clazz3: "clazz3",
    ...commonProps,
    btnText: "Next",
    isHidden: true,
  }

  const secondStepProps = {
    headerText: "Delivery Details",
    step: "2",
    ...commonProps,
    clazz2: "hide",
    btnText: "Complete order",
    btnText2: "Previous",
    btnClass: "btnClass",
    page: "/success", //or just?
    //add here if you want to go to the success page only when all fields are filled. You can add a modal or an alert here.
  }

  return (
    <div className="orderPage">
      <TopHeader isVisible={false} />
      {step === 1 ? (
        <Checkout {...firstStepProps} cartItems={cartItems} />
      ) : (
        <Checkout {...secondStepProps} cartItems={cartItems} />
      )}
    </div>
  )
}

export default OrderPage

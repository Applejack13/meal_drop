import React, { useState } from "react";

import { TopHeader, Checkout } from "../../allPages";
import "../orderPage/orderPage.css";

export function OrderPage({ cartItems }) {
  const [step, setStep] = useState(1);

  const nextStep = () => {
    if (step === 1) {
      setStep(2);
    }
  };

  const prevStep = () => {
    setStep(1);
  };

  const commonProps = {
    clazz: "show",
    progress: step === 1 ? "" : "secondStep",
    onClick: step === 1 ? nextStep : prevStep,
    isWorked: true,
    isVisible: step === 1 ? "hide" : "",
  };

  const firstStepProps = {
    headerText: "Contact Details",
    step: "1",
    clazz3: "clazz3",
    ...commonProps,
    btnText: "Next",
    isHidden: true,
  };

  const secondStepProps = {
    headerText: "Delivery Details",
    step: "2",
    ...commonProps,
    clazz2: "hide",
    btnText: "Complete order",
    btnText2: "Previous",
    btnClass: "btnClass",
    page: "/success",
    isHidden: false,
  };

  return (
    <div className='orderPage'>
      <TopHeader isVisible={false} />
      {step === 1 ? (
        <Checkout {...firstStepProps} cartItems={cartItems} />
      ) : (
        <Checkout {...secondStepProps} cartItems={cartItems} />
      )}
    </div>
  );
}

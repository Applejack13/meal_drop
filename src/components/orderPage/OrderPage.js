import "../orderPage/orderPage.css"
import TopHeader from "../topHeader/TopHeader"
import Checkout from "../checkout/Checkout"
import { useState } from "react"

function OrderPage({ cartItems }) {
  const [step, setStep] = useState(1)

  const nextStep = () => {
    setStep(step + 1)
  }

  const prevStep = () => {
    setStep(step - 1)
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
    isVisible: "hide",
    isVisible2: "hide",
    isVisible3: "hide",
    isVisible4: "hide",
  }

  const secondStepProps = {
    headerText: "Delivery Details",
    step: "2",
    ...commonProps,
    clazz2: "hide",
    btnText: "Complete order",
    btnText2: "Previous",
    btnClass: "btnClass",
    page: "/success",
    isVisible5: "hide",
    isVisible6: "hide",
    isVisible7: "hide",
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

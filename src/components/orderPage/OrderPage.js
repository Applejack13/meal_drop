import "../orderPage/orderPage.css"
import TopHeader from "../topHeader/TopHeader"
import Checkout from "../checkout/Checkout"
import { useState } from "react"

function OrderPage({ cartItems }) {
  const [phoneNumber, setPhoneNumber] = useState("")
  const [isPhoneValid, setIsPhoneValid] = useState(true)

  const handlePhoneChange = (e) => {
    const inputValue = e.target.value
    setPhoneNumber(inputValue)

    const isValidPhoneNumber = /^\d+$/.test(inputValue)

    if (inputValue === "" || isValidPhoneNumber) {
      setIsPhoneValid(true)
    } else {
      setIsPhoneValid(false)
    }
  }

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
    name1: "First name",
    ph1: "Yulia",
    name2OrPostcode: "Last name",
    ph2: "Topor",
    emailOrCity: "Email",
    ph3: "example@example.com",
    phoneOrNothing: "Phone number",
    ph4: "380...",
    btnText: "Next",
    isHidden: true,
    isPhoneValid: isPhoneValid,
    phoneNumber: phoneNumber,
    onPhoneChange: handlePhoneChange,
  }

  const secondStepProps = {
    headerText: "Delivery Details",
    step: "2",
    ...commonProps,
    name1: "Streetname and housenumber",
    ph1: "Some street 13",
    name2OrPostcode: "Postcode",
    ph2: "AAAAXX",
    emailOrCity: "City",
    ph3: "Odessa",
    clazz2: "hide",
    btnText: "Complete order",
    btnText2: "Previous",
    btnClass: "btnClass",
    page: "/success",
    isPhoneValid: isPhoneValid,
    phoneNumber: phoneNumber,
    onPhoneChange: handlePhoneChange,
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

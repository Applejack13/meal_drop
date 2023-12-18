import "../checkout/checkout.css"
import Button from "../button/Button"
import YourOrder from "../yourOrder/YourOrder"

function Checkout({
  headerText,
  step,
  clazz,
  ph1,
  name2OrPostcode,
  ph2,
  emailOrCity,
  ph3,
  phoneOrNothing,
  ph4,
  clazz2,
  btnText,
  btnClass,
  btnText2,
  clazz3,
  page,
  onClick,
  progress,
  cartItems,
  isHidden,
  isPhoneValid,
  phoneNumber,
  onPhoneChange,
  isNameValid,
  onNameChange,
  name1,
}) {
  const isInputEmpty = phoneNumber.length === 0
  const isInputEmpty2 = name1.length === 0

  return (
    <div className="orderPage__content">
      <div className="checkout">
        <h2>Checkout</h2>
      </div>
      <div className="bodyContainer">
        <div className={`orderContainer1 ${clazz}`}>
          <div className="contactAndSteps">
            <p>{headerText}</p>
            <p>Step {step} of 2</p>
          </div>
          <p className={`progressBar ${progress}`}></p>
          <div className="contactDetails">
            <>
              <p>{name1}</p>
              <input
                type="text"
                placeholder={ph1}
                name="firstName"
                onChange={onNameChange}
                className={`input ${
                  isInputEmpty2 ? "" : isNameValid ? "valid" : "invalid"
                }`}
              />
            </>

            <>
              <p>{name2OrPostcode}</p>
              <input
                type="text"
                placeholder={ph2}
                name="lastName"
                className="input"
              />
            </>

            <>
              <p>{emailOrCity}</p>
              <input
                type="text"
                placeholder={ph3}
                name="email"
                className="input"
              />
            </>

            <div className={clazz2}>
              <p>{phoneOrNothing}</p>
              <input
                type="phone"
                placeholder={ph4}
                name="phoneNumber"
                value={phoneNumber}
                onChange={onPhoneChange}
                className={`input ${
                  isInputEmpty ? "" : isPhoneValid ? "valid" : "invalid"
                }`}
              />
            </div>

            <p className={`${clazz2} smallText`}>
              We’ll only use your phone to call you about your order
            </p>
            <div className={`${btnClass} btnContainer`}>
              <div className={isHidden ? "hide" : ""}>
                <Button
                  text={btnText2}
                  onClick={onClick}
                  className={`medium-ghost btn ${clazz3}`}
                />
              </div>
              <Button
                onClick={onClick}
                text={btnText}
                className={`${"large-dark btn "}`}
                page={page}
              />
            </div>
          </div>
        </div>
        <YourOrder cartItems={cartItems} />
      </div>
    </div>
  )
}

export default Checkout

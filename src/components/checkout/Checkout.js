import "../checkout/checkout.css"
import Button from "../button/Button"
import YourOrder from "../yourOrder/YourOrder"
import InputInOrderPage from "../inputInOrderPage/InputInOrderPage"

function Checkout({
  headerText,
  step,
  clazz,
  clazz2,
  clazz3,
  btnText,
  btnText2,
  btnClass,
  page,
  onClick,
  progress,
  cartItems,
  isHidden,
  isVisible1,
  isVisible2,
  isVisible3,
  isVisible4,
  isVisible5,
  isVisible6,
  isVisible7,
  isWorked,
  handleInputChange,
}) {
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
            <InputInOrderPage
              placeholder="First name"
              name="firstName"
              text="First name"
              type="text"
              validation={(value) => /^[a-zA-Z\s-]+$/.test(value)}
              isVisible={isVisible1 ? "" : "hide"}
              onChange={handleInputChange}
            />

            <InputInOrderPage
              placeholder="Last name"
              name="lastName"
              text="Last name"
              type="text"
              validation={(value) => /^[a-zA-Z\s-]+$/.test(value)}
              isVisible={isVisible2 ? "" : "hide"}
              onChange={handleInputChange}
            />

            <InputInOrderPage
              placeholder="example@example.com"
              name="email"
              text="Email"
              type="email"
              validation={(value) =>
                /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/.test(value)
              }
              isVisible={isVisible3 ? "" : "hide"}
              onChange={handleInputChange}
            />

            <InputInOrderPage
              placeholder="380"
              name="phoneNumber"
              text="Phone number"
              type="phone"
              validation={(value) => /^\d*$/.test(value)}
              isVisible={isVisible4 ? "" : "hide"}
              onChange={handleInputChange}
            />

            <InputInOrderPage
              placeholder="Some Streer 13"
              name="StreetnameAndHousenumber"
              text="Streetname and housenumber"
              type="text"
              validation={(value) => /^[a-zA-Z0-9\s-]+$/.test(value)}
              isVisible={isVisible5 ? "" : "hide"}
              onChange={handleInputChange}
            />

            <InputInOrderPage
              placeholder="AAAAXX"
              name="postCode"
              text="Post code"
              type="text"
              validation={(value) => /^[A-Z\s-]+$/.test(value)}
              isVisible={isVisible6 ? "" : "hide"}
              onChange={handleInputChange}
            />

            <InputInOrderPage
              placeholder="Odesa"
              name="city"
              text="City"
              type="text"
              validation={(value) => /^[a-zA-Z\s-]+$/.test(value)}
              isVisible={isVisible7 ? "" : "hide"}
              onChange={handleInputChange}
            />

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
                className={`btn ${isWorked ? "large-dark" : "large-gray"}`}
                // I'll make later how to choose the color of the button
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

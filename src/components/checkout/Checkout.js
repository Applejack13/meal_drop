import "../checkout/checkout.css"
import Button from "../button/Button"

function Checkout({ headerText, step, clazz }) {
  return (
    <div className="orderPage__content">
      <div className="orderContainer2">
        <h2>Checkout</h2>
      </div>
      <div className="bodyContainer">
        <div className={`orderContainer1 ${clazz}`}>
          <div className="contactAndSteps">
            <p>{headerText}</p>
            <p>Step {step} of 2</p>
          </div>
          {/* there'll be progress bar */}
          <div className="contactDetails">
            <div className="firstAndLastName">
              <div className="firstName">
                <p>First name</p>
                <input
                  type="text"
                  placeholder="Yulia"
                  name="lastName"
                  className="input"
                />
              </div>
              <div className="lastName">
                <p>Last name</p>
                <input
                  type="text"
                  placeholder="Topor"
                  name="lastName"
                  className="input"
                />
              </div>
            </div>
          </div>

          <div className="emailAndPhone">
            <div className="email">
              <p>Email</p>
              <input
                type="text"
                placeholder="email@example.com"
                name="email"
                className="input"
              />
            </div>

            <div className="phone">
              <p>Phone number</p>
              <input
                type="phone"
                placeholder="+380..."
                name="phoneNumber"
                className="input"
              />
            </div>
          </div>
          <p>We’ll only use your phone to call you about your order</p>
          <Button text="Next" className="large-dark" />
        </div>

        <div className="yourOrder">
          <h2>Your order</h2>
          <div className="orderList">
            <p>Dishname </p>
            <p>8.50$ </p>
          </div>
          <div className="orderList">
            <p>Dishname </p>
            <p>8.50$ </p>
          </div>
          <div className="orderTotal">
            <p>Total: </p>
            <p>17.00$</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Checkout

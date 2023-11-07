import "../orderPage/orderPage.css"
import TopHeader from "../topHeader/TopHeader"

function OrderPage() {
  return (
    <div className="orderPage">
      <TopHeader />
      <div className="orderPage__content">
        <div className="orderContainer2">
          <h2>Your order at Restaurant</h2>
        </div>
        <div className="orderDetails"></div>
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
      <div className="orderContainer1">
        <div className="contactAndSteps">
          <p>Contact Details</p>
          <p>Step 1 of 2</p>
        </div>
        {/* there'll be progress bar */}
        <div className="contactDetails">
          <div className="firstAndLastName">
            <div className="firstName">
              <p>First Name</p>
              <input
                type="text"
                placeholder="Enter your first name here"
                name="lastName"
                className="input"
              />
            </div>
            <div className="lastName">
              <p>Last Name</p>
              <input
                type="text"
                placeholder="Enter your last name here"
                name="lastName"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default OrderPage

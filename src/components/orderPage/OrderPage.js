import "../orderPage/orderPage.css"
import TopHeader from "../topHeader/TopHeader"
import Checkout from "../checkout/Checkout"

function OrderPage() {
  return (
    <div className="orderPage">
      <TopHeader />
      <Checkout
        headerText="Contact Details"
        step="1"
        clazz="show"
        clazz3="clazz3"
        name1="First name"
        ph1="Yulia"
        name2OrPostcode="Last name"
        ph2="Topor"
        emailOrCity="Email"
        ph3="example@example.com"
        phoneOrNothing="Phone number"
        ph4="+380..."
        btnText="Next"
      />
      {/* <Checkout
        headerText="Delivery Details"
        step="2"
        clazz="show"
        name1="Streetname and housenumber"
        ph1="Some street 13"
        name2OrPostcode="Postcode"
        ph2="AAAAXX"
        emailOrCity="City"
        ph3="Odessa"
        clazz2="hide"
        btnText="Complete order"
        btnText2="Previous"
        btnClass="btnClass"
        page="/success"
      /> */}
    </div>
  )
}

export default OrderPage

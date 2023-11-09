import "../orderPage/orderPage.css"
import TopHeader from "../topHeader/TopHeader"
import Checkout from "../checkout/Checkout"

function OrderPage() {
  return (
    <div className="orderPage">
      <TopHeader />
      {/* <Checkout headerText="Contact Details" step="1" clazz="hide" /> */}
      <Checkout headerText="Delivery Details" step="2" clazz="show" />
    </div>
  )
}

export default OrderPage

import "../successOrderPage/successOrderPage.css"
import TopHeader from "../topHeader/TopHeader"
import SecondHeader from "../secondHeader/SecondHeader"
import YourOrder from "../yourOrder/YourOrder"
import img from "../../images/successPageImg.svg"

function SuccessOrderPage() {
  return (
    <div className="successOrderPage">
      <TopHeader />
      <SecondHeader text="Order confirmed" className="secondHeader" />
      <div className="timeAndOrder">
        <h4>Estimated delivery</h4>
        <h2>Time</h2>
        <div className="yourOrderWrapper">
          <YourOrder />
        </div>
      </div>
      <div className="ladiesImg">
        <img src={img} alt="" className="ladies2" />
      </div>
    </div>
  )
}

export default SuccessOrderPage

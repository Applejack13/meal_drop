import "../restraunt/restraunt.css"
import TopHeader from "../topHeader/To1pHeader"
import Footer from "../footer/Footer"
import SecondHeader from "../secondHeader/SecondHeader"

function Restraunt() {
  return (
    <div className="restraunt">
      <TopHeader />
      <SecondHeader className="restrauntSecondHeader" />
      <h1>Restraunt</h1>
      <Footer />
    </div>
  )
}

export default Restraunt

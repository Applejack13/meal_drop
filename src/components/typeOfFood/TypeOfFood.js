import TopHeader from "../topHeader/TopHeader"
import SecondHeader from "../secondHeader/SecondHeader"
import Footer from "../footer/Footer"
import "../typeOfFood/typeOfFood.css"

function TypeOfFood({ text, className }) {
  return (
    <>
      <TopHeader />
      <SecondHeader className={className} text={text} />
      <Footer />
    </>
  )
}

export default TypeOfFood

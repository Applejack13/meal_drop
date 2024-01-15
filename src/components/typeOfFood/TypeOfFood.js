import { TopHeader } from "../topHeader/TopHeader"
import { SecondHeader } from "../secondHeader/SecondHeader"
import { Footer } from "../footer/Footer"
import "../typeOfFood/typeOfFood.css"

export const TypeOfFood = (props) => {
  const { className, text } = props
  return (
    <>
      <TopHeader />
      <SecondHeader className={className} text={text} />
      <Footer />
    </>
  )
}

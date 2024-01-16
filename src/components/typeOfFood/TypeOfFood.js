import { TopHeader } from "../topHeader/TopHeader"
import { SecondHeader } from "../secondHeader/SecondHeader"
import { Footer } from "../footer/Footer"
import "../typeOfFood/typeOfFood.css"

export const TypeOfFood = ({ className, text }) => {
  return (
    <>
      <TopHeader />
      <SecondHeader className={className} text={text} />
      <Footer />
    </>
  )
}

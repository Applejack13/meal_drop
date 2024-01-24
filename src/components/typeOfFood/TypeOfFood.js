import { TopHeader, SecondHeader, Footer } from "../../allPages"

import "../typeOfFood/typeOfFood.css"

export function TypeOfFood({ className, text }) {
  return (
    <>
      <TopHeader />
      <SecondHeader className={`${className} foodSecondHeader`} text={text} />
      <Footer />
    </>
  )
}

import "../menu/menu.css"
import { TopHeader } from "../topHeader/To1pHeader"
import { Footer } from "../footer/Footer"
import { SecondHeader } from "../secondHeader/SecondHeader"

export const Menu = () => {
  return (
    <div className="menu">
      <TopHeader />
      <SecondHeader className="menuSecondHeader" />
      <h1>Menu</h1>
      <Footer />
    </div>
  )
}

// Am I use this?

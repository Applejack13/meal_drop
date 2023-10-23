import "../categoriesBody/categoriesBody.css"
import CategoriesWindow from "../categoriesWindow/CategoriesWindow"
import pizza from "../../images/pizza1.png"
import burger from "../../images/burgers1.png"
import dessert from "../../images/desserts1.png"
import sushi from "../../images/sushi1.png"
import asian from "../../images/asian1.png"
import comfort from "../../images/comfort1.png"

function CategoriesBody() {
  return (
    <div className="categoriesBody">
      <div className="CategoriesBodyContainer1">
        <h2>What's on the menu?</h2>
        <p>
          Whatever you’re craving - we’ll deliver it to your door. Feel like
          having pizza, sushi or your favourite dish from Tatooine? Explore your
          possibilities below.
        </p>
      </div>
      <div className="CategoriesBodyContainer2">
        <CategoriesWindow img={pizza} title="Pizza" />
        <CategoriesWindow img={burger} title="Burgers" />
        <CategoriesWindow img={dessert} title="Desserts" />
        <CategoriesWindow img={sushi} title="Sushi" />
        <CategoriesWindow img={asian} title="Asian" />
        <CategoriesWindow img={comfort} title="Comfort" />
      </div>
    </div>
  )
}

export default CategoriesBody

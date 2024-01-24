import { Link } from "react-router-dom"

import { CategoriesWindow } from "../../allPages"

import pizza from "../../images/pizza1.png"
import burger from "../../images/burgers1.png"
import dessert from "../../images/desserts1.png"
import sushi from "../../images/sushi1.png"
import asian from "../../images/asian1.png"
import comfort from "../../images/comfort1.png"

import "../categoriesBody/categoriesBody.css"

export function CategoriesBody() {
  return (
    <div className="categoriesBody">
      <div className="categoriesBodyContainer1">
        <h2>What's on the menu?</h2>
        <p>
          Whatever you’re craving - we’ll deliver it to your door. Feel like
          having pizza, sushi or your favourite dish from Tatooine? Explore your
          possibilities below.
        </p>
      </div>
      <div className="categoriesBodyContainer2">
        <Link to="/pizza">
          <CategoriesWindow
            img={pizza}
            title="Pizza"
            className="pizzaSecondHeader"
          />
        </Link>
        <Link to="/burgers">
          <CategoriesWindow img={burger} title="Burgers" />
        </Link>
        <Link to="/desserts">
          <CategoriesWindow img={dessert} title="Desserts" />
        </Link>
        <Link to="/sushi">
          <CategoriesWindow img={sushi} title="Sushi" />
        </Link>
        <Link to="/asian">
          <CategoriesWindow img={asian} title="Asian" />
        </Link>
        <Link to="/comfort">
          <CategoriesWindow img={comfort} title="Comfort" />
        </Link>
      </div>
    </div>
  )
}

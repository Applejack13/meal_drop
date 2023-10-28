import "./../awardWinningBanner/awardWinningBanner.css"
import RestaurantsCards from "../restaurantsCards/RestaurantsCards"
import r1 from "../../images/restaurant1.png"
import r2 from "../../images/restaurant2.png"
import r3 from "../../images/restaurant3.png"
import r4 from "../../images/restaurant4.png"
import r5 from "../../images/restaurant5.png"
import r6 from "../../images/restaurant6.png"
import r7 from "../../images/restaurant7.png"
import r8 from "../../images/restaurant8.png"
import Button from "../button/Button"

function AwardWinningBanner() {
  return (
    <div className="AwardWinningBanner">
      <div className="awardWinningBannerWrapper">
        <div className="banner">
          <h2>Award winning </h2>
          <p>The best restaurants near you!</p>
          <Button
            text="Explore the best restaurants"
            page="/allRestaurants"
            className="large-dark"
          />
        </div>
        <div className="restaurantsCardsBanner">
          <div className="column1">
            <RestaurantsCards img={r1} description="Lukewarm Late" />
            <RestaurantsCards img={r2} description="The Smoking Veg" />
            <RestaurantsCards img={r3} description="The Other One" />
          </div>
          <div className="column2">
            <RestaurantsCards img={r4} description="O’Neill’s" />
            <RestaurantsCards img={r5} description="The Other One" />
          </div>
          <div className="column3">
            <RestaurantsCards img={r6} description="The Woodland" />
            <RestaurantsCards img={r7} description="La Poma" />
            <RestaurantsCards img={r8} description="The Other One" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default AwardWinningBanner

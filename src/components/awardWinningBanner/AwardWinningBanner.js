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

function AwardWinningBanner() {
  return (
    <div className="AwardWinningBanner">
      <div className="banner">
        <h2>
          <span>Award winning</span> <br />
          The best restaurants <br /> near you!
        </h2>
        <button>Explore the best restaurants</button>
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
  )
}

export default AwardWinningBanner

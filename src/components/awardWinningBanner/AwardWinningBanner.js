import "./../awardWinningBanner/awardWinningBanner.css"
import Button from "../button/Button"

function AwardWinningBanner() {
  return (
    <div className="AwardWinningBanner">
      <div className="awardWinningBannerContainer">
        <div className="banner">
          <h2>Award winning </h2>
          <h2>The best restaurants near you!</h2>
          <Button
            text="Explore the best restaurants"
            page="/categories"
            className="large-dark"
          />
        </div>
        <div className="restaurantsCardsBanner"></div>
      </div>
    </div>
  )
}

export default AwardWinningBanner

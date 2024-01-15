import "../banner/banner.css"
import ladies from "../../images/BothLadies.svg"
import { Button } from "../button/Button"
import "../button/button.css"

function Banner() {
  return (
    <div className="Banner">
      <h2>
        Hungry?<span> Find your next meal</span>
      </h2>
      <Button
        text="View all restaurants"
        page="/allRestaurants"
        className="large-dark"
      />
      <div className="images">
        <img src={ladies} alt="ladies_img" className="ladies" />
      </div>
    </div>
  )
}

export default Banner

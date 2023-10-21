import "../banner/banner.css"
import ladies from "../../images/BothLadies.svg"

function Banner() {
  return (
    <div className="Banner">
      <h2>
        <span>Hungry?</span> Find your next meal
      </h2>
      <button>View all restaurants</button>
      <div className="images">
        <img src={ladies} alt="ladies_img" className="ladies" />
      </div>
    </div>
  )
}

export default Banner

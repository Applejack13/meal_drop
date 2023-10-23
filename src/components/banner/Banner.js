import "../banner/banner.css"
import ladies from "../../images/BothLadies.svg"
import Button from "../button/Button"
import "../button/button.css"

function Banner() {
  const buttonStyle = {
    color: "#fff",
    padding: "0.5rem 1.5rem",
    cursor: "pointer",
    backgroundColor: "#202020",
    borderRadius: "0.25rem",
    height: "4rem",
  }

  return (
    <div className="Banner">
      <h2>
        <span>Hungry?</span> Find your next meal
      </h2>
      <Button
        style={buttonStyle}
        text="View all restaurants"
        page="/categories"
        className="large-dark"
      />
      <div className="images">
        <img src={ladies} alt="ladies_img" className="ladies" />
      </div>
    </div>
  )
}

export default Banner

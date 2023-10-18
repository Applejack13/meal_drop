import "./../footer/footer.css"
import logo from "../../images/LOGO.png"

function Footer() {
  return (
    <div className="Footer">
      <img src={logo} alt="logo" />
      <div className="discoverUs">
        <h2>Discover us</h2>
        <p>Home</p>
        <p>Categories</p>
        <p>About</p>
      </div>
      <div className="ourSocialMedia">
        <h2>Our social media</h2>
        <p>Facebook</p>
        <p>Instagramm</p>
        <p>Twitter</p>
      </div>
      <div className="checkOurApps">
        <h2>Check our apps</h2>
        <p>Link1</p>
        <p>Link2</p>
      </div>
    </div>
  )
}

export default Footer

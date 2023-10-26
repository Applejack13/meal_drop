import "./../footer/footer.css"
import Logo from "../logo/Logo"

function Footer() {
  return (
    <div className="Footer">
      <div className="footer-container">
        <div>
          <Logo isSmall={false} />
        </div>
        <div>
          <h2>Discover us</h2>
          <ul>
            <li>Home</li>
            <li>Categories</li>
            <li>About</li>
            <li>Login</li>
          </ul>
        </div>
        <div>
          <h2>Our social media</h2>
          <ul>
            <li>Facebook</li>
            <li>Instagramm</li>
            <li>Twitter</li>
          </ul>
        </div>
        <div>
          <h2>Check our apps</h2>
          <ul>
            <li>Link1</li>
            <li>Link2</li>
          </ul>
        </div>
      </div>
    </div>
  )
}

export default Footer

import { Logo, LinkInFooter } from "../../allPages";
import { useSelector } from "react-redux";

import "./../footer/footer.scss";

export function Footer() {
  const theme = useSelector((state) => state.themeToggle);

  return (
<<<<<<< HEAD
    <div className='footer'>
=======
    <div
      className={`Footer ${theme === "light" ? "dark-theme" : "light-theme"}`}
    >
>>>>>>> 40439d27b6de02bc3ff546582ab8ccb5125f1e96
      <div className='footer-container'>
        <div>
          <Logo isSmall={false} />
        </div>
        <div>
          <h2>Discover us</h2>
          <ul>
            <LinkInFooter link='/' text='Home' />
            <LinkInFooter link='/categories' text='Categories' />
            <LinkInFooter text='About' />
            <LinkInFooter text='Login' />
          </ul>
        </div>
        <div>
          <h2>Our social media</h2>
          <ul>
            <LinkInFooter text='Facebook' />
            <LinkInFooter text='Instagram' />
            <LinkInFooter text='Twitter' />
          </ul>
        </div>
        <div>
          <h2>Check our apps</h2>
          <ul>
            <LinkInFooter text='Apple Store' />
            <LinkInFooter text='Google Play' />
          </ul>
        </div>
      </div>
    </div>
  );
}

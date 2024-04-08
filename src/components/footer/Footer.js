import { Logo, LinkInFooter } from "../../allPages";

import "./../footer/footer.scss";

export function Footer() {
  return (
    <div className='footer'>
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

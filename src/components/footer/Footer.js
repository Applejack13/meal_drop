import React, { useEffect, useState } from "react";
import { Logo, LinkInFooter } from "../../allPages";

import "./../footer/footer.scss";

export function Footer() {
  const [
    isVisible,
    // eslint-disable-next-line
    setIsVisible,
  ] = useState(false);

  useEffect(() => {
    function reveal() {
      var reveals = document.querySelectorAll(".reveal");

      for (var i = 0; i < reveals.length; i++) {
        var windowHeight = window.innerHeight;
        var elementTop = reveals[i].getBoundingClientRect().top;
        var elementVisible = 20;

        if (elementTop < windowHeight - elementVisible) {
          reveals[i].classList.add("active");
        } else {
          reveals[i].classList.remove("active");
        }
      }
    }

    window.addEventListener("scroll", reveal);

    return () => {
      window.removeEventListener("scroll", reveal);
    };
  }, []);

  return (
    <div className={`footer ${isVisible ? "reveal active" : "reveal"}`}>
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
            <LinkInFooter text='Facebook' link='https://www.facebook.com/' />
            <LinkInFooter text='Instagram' link='https://www.instagram.com/' />
            <LinkInFooter text='Twitter' link='https://twitter.com/' />
          </ul>
        </div>
        <div>
          <h2>Check our apps</h2>
          <ul>
            <LinkInFooter text='Apple Store' link='https://apps.apple.com/' />
            <LinkInFooter text='Google Play' link='https://play.google.com/' />
          </ul>
        </div>
      </div>
    </div>
  );
}

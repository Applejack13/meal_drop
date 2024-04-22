import { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../../reducer/reducer";

import "./themeToggle.scss";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const [theme, setTheme] = useState("light");
  const [isAnimating, setIsAnimating] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(false);

  const enableDarkMode = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setTheme("dark");
      setIsDarkMode(true);
      setIsAnimating(false);
    }, 500); // Adjust the animation duration to match your CSS
  };

  const enableLightMode = () => {
    setIsAnimating(true);
    setTimeout(() => {
      setTheme("light");
      setIsDarkMode(false);
      setIsAnimating(false);
    }, 500); // Adjust the animation duration to match your CSS
  };

  useEffect(() => {
    const themeToggle = document.querySelector("#switch-theme");

    const handleClick = () => {
      theme === "light" ? enableDarkMode() : enableLightMode();
      dispatch(toggleTheme());
    };

    themeToggle.addEventListener("click", handleClick);

    return () => {
      themeToggle.removeEventListener("click", handleClick);
    };
    // eslint-disable-next-line
  }, [theme, dispatch]);

  return (
    <div
      className={`container ${isAnimating ? "animating" : ""} ${
        isDarkMode ? "dark-theme" : "light-theme"
      }`}
    >
      <div className='img'>
        <button id='switch-theme'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            width='80%'
            viewBox='0 0 24 24'
            fill='none'
            strokeWidth='1'
            strokeLinecap='round'
            strokeLinejoin='round'
          >
            <mask id='mask'>
              <rect x='0' y='0' width='100%' height='100%' fill='white' />
              <circle className='moon-mask' cx='12' cy='4' r='9' fill='black' />
            </mask>
            <circle
              className='sun-core'
              fill='currentColor'
              cx='12'
              cy='12'
              r='5'
              mask='url(#mask)'
            />
            <g className='sun-rays' stroke='currentColor'>
              <line x1='12' y1='1' x2='12' y2='3' />
              <line x1='12' y1='21' x2='12' y2='23' />
              <line x1='4.22' y1='4.22' x2='5.64' y2='5.64' />
              <line x1='18.36' y1='18.36' x2='19.78' y2='19.78' />
              <line x1='1' y1='12' x2='3' y2='12' />
              <line x1='21' y1='12' x2='23' y2='12' />
              <line x1='4.22' y1='19.78' x2='5.64' y2='18.36' />
              <line x1='18.36' y1='5.64' x2='19.78' y2='4.22' />
            </g>
          </svg>
        </button>
      </div>
    </div>
  );
};

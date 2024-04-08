import { useDispatch, useSelector } from "react-redux";

import { toggleTheme } from "../../reducer/reducer";
import { Button } from "../button/Button";
import theSun from "../../images/theSun.svg";
import theMoon from "../../images/theMoon.svg";

export const ThemeToggle = () => {
  const dispatch = useDispatch();
  const theme = useSelector((state) => state.themeToggle.theme);

  const handleToggleClick = () => {
    dispatch(toggleTheme());
  };

  return (
    <div>
      <Button
        onClick={handleToggleClick}
        img={theme === "light" ? theMoon : theSun}
        className='theme-button'
      />
    </div>
  );
};

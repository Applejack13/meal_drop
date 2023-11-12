import "../topHeader/topHeader.css"
import shoppingCart from "../../images/shopping-cart 2.svg"
import Logo from "../logo/Logo"
import Button from "../button/Button"
import React, { useState } from "react"

function TopHeader() {
  // Состояние для отслеживания того, включен ли режим ON/OFF
  const [isToggleOn, setIsToggleOn] = useState(true)

  // Обработчик событий для кнопки ON/OFF
  const handleToggleClick = () => {
    setIsToggleOn(!isToggleOn)
  }

  // Обработчик событий для кнопки Click Me
  const handleButtonClick = (e) => {
    console.log("Button Clicked!")
  }

  return (
    <div className="Top-header">
      <div className="Top-header__logo">
        <Logo link="/" isSmall={true} />
        <div className="Top-header__search">
          <Button
            text={isToggleOn ? "ON" : "OFF"}
            onClick={() => handleToggleClick()}
            className="medium-ghost"
          />

          <Button page="/" text="Home" className="medium-ghost" />

          <Button
            page="/categories"
            text="All restaurants"
            className="medium-ghost"
          />

          <Button
            // page="/orderPage"
            img={shoppingCart}
            alt="shoppingCart_img"
            className="large-dark"
          />
        </div>
      </div>
    </div>
  )
}

export default TopHeader

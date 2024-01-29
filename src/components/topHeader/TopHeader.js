import React, { useState } from "react"
import ReactModal from "react-modal"

import { Logo, Button, ModalWindow } from "../../allPages"

import shoppingCart from "../../images/shopping-cart 2.svg"
import theSun from "../../images/theSun.svg"
import theMoon from "../../images/theMoon.svg"

import "../topHeader/topHeader.css"

ReactModal.setAppElement("#root")

export function TopHeader({ cartItems, isVisible }) {
  const [isToggleOn, setIsToggleOn] = useState(true)
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const handleToggleClick = () => {
    setIsToggleOn(!isToggleOn)
  }

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  return (
    <div className="Top-header">
      <div className="Top-header__logo">
        <Logo link="/" isSmall={true} />
      </div>
      {isVisible ? (
        <div className="Top-header__search">
          <Button
            onClick={() => handleToggleClick()}
            img={isToggleOn ? theMoon : theSun}
            className="theme-button"
          />

          <Button page="/" text="Home" className="medium-ghost" />

          <Button
            page="/categories"
            text="All restaurants"
            className="medium-ghost"
          />

          <Button
            className="large-dark"
            onClick={openModal}
            img={shoppingCart}
          />

          <ReactModal
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.4)",
                overflow: "hidden",
              },
              content: {
                right: "0",
                bottom: "0",
                top: "0",
                left: "unset",
                height: "100vh",
                width: "25rem",
                transform: modalIsOpen
                  ? "translate(0%, 0)"
                  : "translate(-50%, 0)",
                transition: "transform .5s ease-in-out",
              },
            }}
            className={`modalContainer `}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            {modalIsOpen && (
              <ModalWindow
                text="Checkout"
                page="/orderPage"
                clazz=" large-dark"
                cartItems={cartItems}
              />
            )}
          </ReactModal>
        </div>
      ) : null}
    </div>
  )
}

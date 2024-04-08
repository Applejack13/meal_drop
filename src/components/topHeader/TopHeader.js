import React, { useState } from "react";
import ReactModal from "react-modal";
import { useSelector } from "react-redux";

import { Logo, Button, ModalWindow, ThemeToggle } from "../../allPages";

import shoppingCart from "../../images/shopping-cart 2.svg";

import "../topHeader/topHeader.scss";

export function TopHeader({ isVisible }) {
  const theme = useSelector((state) => state.themeToggle);
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div
      className={`Top-header ${
        theme === "light" ? "dark-theme" : "light-theme"
      }`}
    >
      <div className='Top-header__logo'>
        <Logo link='/' isSmall={true} />
      </div>
      {isVisible ? (
        <div className='Top-header__search'>
          <ThemeToggle />

          <Button page='/' text='Home' className='medium-ghost' />

          <Button
            page='/categories'
            text='All restaurants'
            className='medium-ghost'
          />

          <Button
            className='large-dark'
            onClick={openModal}
            img={shoppingCart}
          />

          <ReactModal
            closeTimeoutMS={500}
            style={{
              overlay: {
                backgroundColor: "rgba(0, 0, 0, 0.4)",
              },
              content: {
                right: "0",
                bottom: "0",
                top: "0",
                left: "unset",
                height: "100vh",
                width: "25rem",
              },
            }}
            className={`modalContainer `}
            isOpen={modalIsOpen}
            onRequestClose={closeModal}
          >
            {modalIsOpen && (
              <ModalWindow
                text='Checkout'
                page='/orderPage'
                clazz=' large-dark'
              />
            )}
          </ReactModal>
        </div>
      ) : null}
    </div>
  );
}

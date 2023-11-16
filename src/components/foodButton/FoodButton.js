import "../foodButton/foodButton.css"
import Button from "../button/Button"
import ReactModal from "react-modal"
import { useState } from "react"
import ModalForOrder from "../modalForOrder/ModalForOrder"
import ModalWindow from "../modal/ModalWindow"

function FoodButton({ foodName, foodDescription, foodPrice }) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
    setModalIsOpen(false)
  }

  const handleAddToCart = () => {
    // ;<ModalWindow
    //   foodDescription={foodDescription}
    //   foodPrice={foodPrice}
    //   foodName={foodName}
    // />
    console.log(foodName)
    console.log(foodDescription)
    console.log(foodPrice)
    console.log("added")
    setModalIsOpen(false)
  }

  return (
    <div className="foodButton">
      <ReactModal
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
            overflow: "hidden",
          },
          content: {
            top: "50%",
            left: "50%",
            right: "auto",
            bottom: "auto",
            height: "auto",
            width: "35%",
            borderRadius: " 1rem  ",
            transform: "translate(-50%, -50%)",
          },
        }}
        className={`modalContainer `}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <ModalForOrder
          foodName={foodName}
          foodDescription={foodDescription}
          foodPrice={foodPrice}
          onClick={handleAddToCart}
        />
      </ReactModal>
      <Button
        className="foodBtn"
        onClick={openModal}
        foodDescription={foodDescription}
        foodPrice={foodPrice}
        foodName={foodName}
      />
    </div>
  )
}

export default FoodButton

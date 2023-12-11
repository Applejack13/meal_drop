import "../foodButton/foodButton.css"
import Button from "../button/Button"
import ReactModal from "react-modal"
import { useState } from "react"
import ModalForOrder from "../modalForOrder/ModalForOrder"

function FoodButton({
  foodName,
  foodDescription,
  foodPrice,
  addToCart,
  id,
  count,
  increment,
  decrement,
  setCount,
}) {
  const [modalIsOpen, setModalIsOpen] = useState(false)

  const openModal = () => {
    setModalIsOpen(true)
  }

  const closeModal = () => {
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
          count={count}
          increment={increment}
          decrement={decrement}
          onClick={() => {
            addToCart({
              foodName: foodName,
              foodDescription: foodDescription,
              foodPrice: foodPrice,
              id: id,
            })
            closeModal()
            setCount(1)
          }}
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

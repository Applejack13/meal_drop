import ReactModal from "react-modal";
import { useState } from "react";
import { useDispatch, useSelector } from "react-redux";

import { Button, ModalForOrder } from "../../allPages";
import { addToCart } from "../../reducer/reducer";

import "../foodButton/foodButton.scss";

export function FoodButton({ ...props }) {
  const [modalIsOpen, setModalIsOpen] = useState(false);

  const quantity = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  const openModal = () => {
    setModalIsOpen(true);
  };

  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className='foodButton'>
      <ReactModal
        style={{
          overlay: {
            backgroundColor: "rgba(0, 0, 0, 0.4)",
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
        className={`modalContainer mfoContainer `}
        isOpen={modalIsOpen}
        onRequestClose={closeModal}
      >
        <ModalForOrder
          foodName={props.foodName}
          foodDescription={props.foodDescription}
          foodPrice={props.foodPrice}
          onClick={() => {
            console.log(dispatch(addToCart({ quantity, id: props.id })));
            closeModal();
          }}
        />
      </ReactModal>
      <Button
        className='foodBtn'
        onClick={openModal}
        foodDescription={props.foodDescription}
        foodPrice={props.foodPrice}
        foodName={props.foodName}
      />
    </div>
  );
}

import { decrement, increment } from "../../reducer/reducer";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../button/Button";

import "../modalForOrder/modalForOrder.scss";

const ModalForOrder = (props) => {
  const quantity = useSelector((state) => state.value);
  // const id = useSelector((state) => state.id);

  let { foodName, foodDescription, foodPrice, onClick, addToCart } = props;
  let sum = parseFloat(foodPrice) * quantity;

  const dispatch = useDispatch();

  return (
    <div className='mfoContainer'>
      <div className='modalForOrder'>
        <div className='modalForOrder__title'>
          <h2>{foodName}</h2>
        </div>
        <div className='modalForOrder__description'>
          <p>{foodDescription}</p>
        </div>
      </div>
      <div className='mfoFuncAndButton'>
        <div className='function'>
          <Button onClick={() => dispatch(decrement())} text='-' />
          <p>{quantity}</p>
          {/* what can I do here to show value? */}
          <Button onClick={() => dispatch(increment())} text='+' />
        </div>
        <div className='btn'>
          <Button
            text={`add for ${sum} $`}
            className='large-dark'
            onClick={onClick}
            addToCart={addToCart}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalForOrder;

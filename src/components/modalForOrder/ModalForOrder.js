import { decrement, increment, addToCart } from "../../reducer/reducer";
import { useDispatch, useSelector } from "react-redux";

import { Button } from "../button/Button";

import "../modalForOrder/modalForOrder.scss";

const ModalForOrder = ({ ...props }) => {
  const quantity = useSelector((state) => state.counter.value);
  const dispatch = useDispatch();

  let sum = parseFloat(props.foodPrice) * quantity;

  return (
    <div className='mfoContainer'>
      <div className='modalForOrder'>
        <div className='modalForOrder__title'>
          <h2>{props.foodName}</h2>
        </div>
        <div className='modalForOrder__description'>
          <p>{props.foodDescription}</p>
        </div>
      </div>
      <div className='mfoFuncAndButton'>
        <div className='function'>
          <Button onClick={() => dispatch(decrement())} text='-' />
          <p>{quantity}</p>
          <Button onClick={() => dispatch(increment())} text='+' />
        </div>
        <div className='btn'>
          <Button
            text={`add for ${sum} $`}
            className='large-dark'
            onClick={() => dispatch(addToCart({ quantity, id: props.id }))}
            // onClick={() => console.log(dispatch(addToCart({ quantity })))}
          />
        </div>
      </div>
    </div>
  );
};

export default ModalForOrder;

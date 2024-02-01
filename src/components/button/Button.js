import { Link } from "react-router-dom";

import "../button/button.scss";

export function Button({ ...props }) {
  return (
    <div>
      <Link to={props.page}>
        <button
          className={`button ${props.className}`}
          style={props.style}
          onClick={props.onClick}
        >
          <img src={props.img} alt="" />
          {props.text}
          <div>{props.foodName}</div>
          <div>{props.foodDescription}</div>
          <div>{props.foodPrice}</div>
        </button>
      </Link>
    </div>
  );
}

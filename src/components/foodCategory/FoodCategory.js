import { Link } from "react-router-dom";

import "./../foodCategory/foodCategory.scss";

export function FoodCategory({ ...props }) {
  return (
    <Link to={props.link}>
      <div className='foodCategory'>
        <img src={props.img} alt={props.alt} />
        <p>{props.title}</p>
      </div>
    </Link>
  );
}

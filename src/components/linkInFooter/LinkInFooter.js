import { Link } from "react-router-dom";

import "../linkInFooter/linkInFooter.scss";

export function LinkInFooter({ ...props }) {
  return (
    <div className='Link-in-footer'>
      <li>
        <Link to={props.link}>{props.text}</Link>
      </li>
    </div>
  );
}

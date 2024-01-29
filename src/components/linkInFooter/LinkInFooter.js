import { Link } from "react-router-dom";

import "../linkInFooter/linkInFooter.scss";

export function LinkInFooter(props) {
  const { link, text } = props;
  return (
    <div className="Link-in-footer">
      <li>
        <Link to={link}>{text}</Link>
      </li>
    </div>
  );
}

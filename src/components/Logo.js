import { Link } from "react-router-dom";

import SmallLogo from "../../images/SmallLogoWithText.svg";
import BigLogo from "../../images/BigLogoWithoutText.svg";

import "../logo/logo.scss";

export function Logo({ ...props }) {
  return (
    <div className="logo">
      <Link to={props.link}>
        {props.isSmall ? (
          <div>
            <img src={SmallLogo} alt="SmallLogo" className="Small Logo" />
          </div>
        ) : (
          <div>
            <img src={BigLogo} alt="BigLogo" className="Big Logo" />
          </div>
        )}
      </Link>{" "}
    </div>
  );
}

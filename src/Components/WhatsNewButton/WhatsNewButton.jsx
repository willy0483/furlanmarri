import { WhatsNewButtonStyled } from "./WhatsNewButton.Styled";
import { Link } from "react-router-dom";

const WhatsNewButton = ({ textValue }) => {
  return (
    <Link to="/Collection">
      <WhatsNewButtonStyled>
        <div>
          <span>
            {textValue} <i className="fa-solid fa-caret-right"></i>
          </span>
          <span>
            {textValue} <i className="fa-solid fa-caret-right"></i>
          </span>
        </div>
      </WhatsNewButtonStyled>
    </Link>
  );
};

export default WhatsNewButton;

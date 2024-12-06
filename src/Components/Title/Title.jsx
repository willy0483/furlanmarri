import { TitleStyledContainer } from "./Title.Styled";
import { Link } from "react-router-dom";

const TitleComponent = ({ textValue, theme, font, size, color }) => {
  return (
    <TitleStyledContainer>
      <Link to="/">
        <h1
          style={{
            backgroundColor: theme,
            fontFamily: font,
            fontSize: size + "rem",
            color: color,
          }}
        >
          {textValue}
        </h1>
      </Link>
    </TitleStyledContainer>
  );
};

export default TitleComponent;

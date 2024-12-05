import styled from "styled-components";
import { colors, mixins } from "../../Styles/styles";

export const NavItemStyled = styled.li`
  padding: 0.5rem 1rem;
  a {
    ${mixins.resetLink}
  }

  position: relative;

  .underline::after {
    content: "";
    position: absolute;
    bottom: 0;
    left: 0;
    width: 0;
    height: 1px;
    background-color: ${colors.black};
    transition: width 0.5s;
  }

  .underline:hover::after {
    width: 100%;
  }
`;

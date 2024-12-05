import styled from "styled-components";
import { mixins, colors } from "../../Styles/styles";
mixins;

export const FooterListStyled = styled.ul`
  ${mixins.resetList}

  h3 {
    color: ${colors.white};
    font-size: 1.2rem;
    font-weight: 400;
    margin-bottom: 1rem;
  }
`;

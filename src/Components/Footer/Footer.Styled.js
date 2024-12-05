import styled from "styled-components";
import { colors } from "../../Styles/styles";

export const FooterStyled = styled.footer`
  background-color: ${colors.black};
  margin-top: 8.5rem;
  display: grid;
  grid-template-columns: 0.6fr auto;
  padding: 2rem 5rem;
  div {
    display: flex;
    justify-content: space-between;
    gap: 1rem;
  }
`;

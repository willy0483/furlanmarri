import styled from "styled-components";

import { colors } from "../../Styles/styles";

export const HeaderStyled = styled.header`
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  align-items: center;
  background-color: ${colors.white};
  padding: 1rem;
  margin: 0 2.5rem;
`;

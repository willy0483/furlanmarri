import styled from "styled-components";

export const NavbarStyled = styled.nav`
  display: flex;
  align-items: center;

  &.navbar-left {
    justify-content: flex-start;
  }

  &.navbar-right {
    justify-content: flex-end;
  }

  ul {
    list-style: none;
    padding: 0;
    margin: 0;
    display: flex;
    gap: 1rem;
  }
`;

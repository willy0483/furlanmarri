import styled from "styled-components";

export const WhatsNewButtonStyled = styled.button`
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  padding: 0rem 1rem;
  font-size: 0.8rem;
  font-weight: 400;
  font-family: "Montserrat", sans-serif;
  border: 1px solid #bbb;
  margin-top: 3rem;
  margin-left: 3rem;
  border-radius: 8px;

  div {
    position: relative;
    display: inline-block;
    padding: 0;
    overflow: hidden;
  }

  div span {
    display: block;
    padding: 0.7rem 1rem 0.5rem 1rem;
    width: 100%;
    text-align: center;
  }

  div span:first-of-type {
    transition: transform 0.3s ease-in-out;
  }

  div span:last-of-type {
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    transform: translateY(100%);
    transition: transform 0.3s ease-in-out;
  }

  &:hover div span:first-of-type {
    transform: translateY(-100%);
  }

  &:hover div span:last-of-type {
    transform: translateY(0);
  }
`;

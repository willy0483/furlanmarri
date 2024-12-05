import styled from "styled-components";

export const WhatsNewStyled = styled.section`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 4rem;
  width: 1000px;
  margin: 2.5rem auto 0 auto;

  h3 {
    font-size: 0.9rem;
    font-weight: 500;
    margin: 3rem 0 3rem 0;
  }

  article:nth-child(2) {
    font-size: 2.5rem;
    padding-right: 2rem;
    font-weight: 300;
    font-family: "", serif;
  }

  article:nth-child(3) {
    margin: 4rem 0 0 4rem;
  }
`;

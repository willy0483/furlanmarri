import styled from "styled-components";

export const WhatsNewImageStyled = styled.div`
  position: relative;

  .image-container div:nth-child(1) {
    position: relative;
    width: 100%;
    padding: 0 4.9rem 4.9rem 0;
  }
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  .image-container div:nth-child(2) {
    position: absolute;
    bottom: -50px;
    right: -50px;
    z-index: 1;
    width: 250px;
    height: 300px;
    object-fit: cover;
  }
`;

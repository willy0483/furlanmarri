import styled from "styled-components";

export const ImageContainer = styled.div`
  display: flex;
  gap: 2rem;
  margin: 0 2rem;
  figure {
    position: relative;
    overflow: hidden;
    margin: 0;

    .ImageContainer {
      overflow: hidden;
      width: 100%;
      height: 100%;
      display: flex;
      justify-content: center;
      align-items: center;

      img {
        transition: transform 0.3s ease;
        width: 100%;
        height: 100%;
        object-fit: cover;
      }

      &:hover img {
        transform: scale(1.1);
      }
    }

    figcaption {
      font-size: 1.2rem;
      font-weight: 400;
      font-family: "Poppins";
      p:last-of-type {
        font-weight: 300;
        color: #aaa;
      }
    }
  }
`;

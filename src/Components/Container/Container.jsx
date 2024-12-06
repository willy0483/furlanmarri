import { ContainerStyle } from "./Container.Styled";

export const Container = ({ children, width, bgcolor }) => {
  return (
    <ContainerStyle width={width} $bgcolor={bgcolor}>
      {children}
    </ContainerStyle>
  );
};

import { HeaderStyled } from "./Header.styled";
import NavbarComponent from "../Navbar/Navbar";
import NavItemComponent from "../NavItem/NavItem";
import TitleComponent from "../Title/Title";
import { Link } from "react-router-dom";

const HeaderComponent = () => {
  return (
    <HeaderStyled>
      <NavbarComponent leftRight="navbar-left">
        <NavItemComponent
          textValue="MENU"
          theme="black"
          font="Trebuchet MS"
          size="small"
          color="white"
          borderR="8"
        />
        <NavItemComponent
          textValue="INSIDE"
          theme="white"
          font="Trebuchet MS"
          size="small"
          color="black"
          classHover="underline"
        />
      </NavbarComponent>

      <TitleComponent
        textValue="FURLAN MARRI"
        theme="white"
        font="Poppins"
        size="1.7"
        to="/Collection"
      />

      <NavbarComponent leftRight="navbar-right">
        <NavItemComponent
          textValue="MAILING LIST"
          theme="white"
          font="Trebuchet MS"
          size="small"
          color="black"
          classHover="underline"
        />
        <NavItemComponent
          textValue="EURO"
          theme="white"
          font="Trebuchet MS"
          size="small"
          color="black"
          classHover="underline"
        />
        <NavItemComponent
          textValue="CART"
          theme="white"
          font="Trebuchet MS"
          size="small"
          color="black"
          classHover="underline"
        />
      </NavbarComponent>
    </HeaderStyled>
  );
};

export default HeaderComponent;

import { NavbarStyled } from "./Navbar.styled";

const NavbarComponent = ({ children, leftRight }) => {
    return (
        <NavbarStyled className={leftRight}>
            <ul>
                {children}
            </ul>
        </NavbarStyled>
    );
}

export default NavbarComponent;
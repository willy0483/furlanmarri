import { NavItemStyled } from "./NavItem.styled";

const getsizes = (size) => {
    switch(size){
        case 'small':
            return '1rem';
        case 'medium':
            return '1.25rem';
        case 'large':
            return '1.5rem';
        default:
            return '1rem';
    }
  }
  
  const NavItemComponent = ({ textValue, theme, font, size,color, borderR,classHover, }) => {
    return (
        <NavItemStyled
            style={{
                backgroundColor: theme,
                fontFamily: font,
                fontSize: getsizes(size),
                borderRadius: borderR + 'px',
            }}
        >
            <a className={classHover}  style={{ color: color }} href="#">{textValue}</a>
        </NavItemStyled>
    );
  }
  
  export default NavItemComponent;

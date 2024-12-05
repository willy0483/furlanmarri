import { FooterListStyled } from "./FooterList.Styled";


const FooterList = ({ children, textValue }) => {
    return (
        <FooterListStyled>
            <h3>{textValue}</h3>
            {children}
        </FooterListStyled>
    )
}

export default FooterList
import { FooterItemStyled } from "./FooterItem.Styled"



const FooterItem = ({ textValue, textValue2 }) => {
    return (
        <FooterItemStyled>
            <p>{textValue}</p>
            <p>{textValue2}</p>
        </FooterItemStyled>
    )
}

export default FooterItem
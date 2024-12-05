import { WhatsNewButtonStyled } from "./WhatsNewButton.Styled"


const WhatsNewButton = ({textValue}) => {
    return (
        <WhatsNewButtonStyled>
            <div>
            <span>{textValue} <i className="fa-solid fa-caret-right"></i></span>
            <span>{textValue} <i className="fa-solid fa-caret-right"></i></span> 
            </div>
        </WhatsNewButtonStyled>
    )
}


export default WhatsNewButton
import { WhatsNewStyled } from "./WhatsNew.Styled";
import WhatsNewImage from "../WhatsNewImage/WhatsNewImage";
import WhatsNewButton from "../WhatsNewButton/WhatsNewButton";

const WhatsNewComponent = () => {
    return (
        <WhatsNewStyled>
            <div>
            <header><h3>WHAT'S NEW ?</h3></header>
                <article>
                    <p>OUR SECULAR PERPETUAL CALENDAR SOLD FOR 130.000 EURO</p>
                </article>
                <article>
                    <p>Furlan Marri unveiled its first ultra-simplified secular perpetual calendar for Only Watch 2024. We are extremely proud to have achieved an auction result of 130,000 Euro.
                    </p>
                </article>
                <WhatsNewButton textValue={"DISCOVER"}></WhatsNewButton>
                </div>
            <WhatsNewImage />
        </WhatsNewStyled>
    )
}




export default WhatsNewComponent;
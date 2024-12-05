import { FooterStyled } from "./Footer.Styled";
import FooterItem from "../FooterItem/FooterItem";
import FooterList from "../FooterList/FooterList";


const FooterComponent = () => {
    return(
        <FooterStyled>
            <FooterList textValue="FURLAN MARRI">
                <FooterItem textValue="Furlan Marri SA"/>
                <FooterItem textValue="Rue du Nant 25"/>
                <FooterItem textValue="1207 Geneva"/>
                <FooterItem textValue="Switzerland"/>
            </FooterList>
            <div>

            <FooterList textValue="EMAIL">
                <FooterItem textValue="Monday - Friday" textValue2={"9:00 am - 6:00 pm"}/>
                <FooterItem textValue="Support and questions" textValue2={"support@furlanmarri.com"}/>
                <FooterItem textValue="Media and press" textValue2={"media@furlanmarri.com"}/>
            </FooterList>

            <FooterList textValue="PHONE">
                <FooterItem textValue="Monday - Friday" textValue2={"9:00 am - 06:00 pm"}/>
                <FooterItem textValue="Support and after sales" textValue2={"+41 22 567 07 57"}/>
                <FooterItem textValue="Offices and showroom in Geneva" textValue2={"+41 22 300 50 51"}/>
            </FooterList>

            <FooterList textValue="FOLLOW US">
                <FooterItem textValue="Instagram"/>
                <FooterItem textValue="Vimeo"/>
                <FooterItem textValue="Youtube"/>
                <FooterItem textValue="Facebook"/>
            </FooterList>
            </div>

        </FooterStyled>
    )
}

export default FooterComponent
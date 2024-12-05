import { TitleStyledContainer } from "./Title.Styled"

const TitleComponent = ({ textValue, theme, font, size,color }) => {
    return (
        <TitleStyledContainer>
            <h1             style={{
                backgroundColor: theme,
                fontFamily: font,
                fontSize: size + 'rem',
                color: color,
            }}>{textValue}</h1>
        </TitleStyledContainer>
    )
}


export default TitleComponent
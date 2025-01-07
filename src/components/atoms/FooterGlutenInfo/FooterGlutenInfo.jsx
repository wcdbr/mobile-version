// imports
import styled from 'styled-components/native'

// function
export default function FooterGlutenInfo() {
  return (
    <FooterGlutenInfoWrapper>
        <GlutenInfoText>
            MILNUTRI COMPOSTO LÁCTEO, SOJA E COMPLETE:
        </GlutenInfoText>
        
        <GlutenInfoText>
            <HighlitedText>NÃO CONTÉM</HighlitedText> GLÚTEN. MILNUTRI CEREAL: <HighlitedText>CONTÉM GLÚTEN</HighlitedText>
        </GlutenInfoText>
    </FooterGlutenInfoWrapper>
  )
}

// styles
const FooterGlutenInfoWrapper = styled.Text``

const GlutenInfoText = styled.Text`
    color: #5c719f;
    font-size: 12px;
`

const HighlitedText = styled.Text`
    color: #1F4598;
    font-family: BariolBold;
`
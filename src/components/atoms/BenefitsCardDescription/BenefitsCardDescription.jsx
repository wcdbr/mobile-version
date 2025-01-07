// imports
import styled from 'styled-components/native'
import Description from '../Description/Description'

// function
export default function BenefitsCardDescription({ children }) {
  return (
    <BenefitsCardDescriptionWrapper>
        <TextWrapper>
            <DescriptionText>
                { children }
            </DescriptionText>
        </TextWrapper>
    </BenefitsCardDescriptionWrapper>
  )
}

// styles
const BenefitsCardDescriptionWrapper = styled.View`
    width: 90%;
    align-items: center;

    margin: 0 auto;
    padding-top: 22px;

    border-top-color: #02B1EB;
    border-top-width: 1px;
    border-top-style: solid;
`
const TextWrapper = styled.View`
    width: 278px;
`
const DescriptionText = styled(Description)`
    font-size: 18px;
`
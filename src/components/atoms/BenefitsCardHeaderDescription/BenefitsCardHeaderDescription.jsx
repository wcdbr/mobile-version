// imports
import styled from 'styled-components/native'
import Description from '../Description/Description'

// function
export default function BenefitsCardHeaderDescription({ children }) {
  return (
    <TextWrapper>
      <BenefitsCardHeaderDescriptionWrapper>
          {children}
      </BenefitsCardHeaderDescriptionWrapper>
    </TextWrapper>
  )
}

// styles
const TextWrapper = styled.View`
  margin: 0 auto;
  text-align: center;
`
const BenefitsCardHeaderDescriptionWrapper = styled(Description)`
    color: #333;
    font-size: 18px;
`
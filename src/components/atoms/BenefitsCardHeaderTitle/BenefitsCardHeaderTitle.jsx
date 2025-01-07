// imports
import styled from 'styled-components/native'
import Title from '../Title/Title'

// function
export default function BenefitsCardHeaderTitle({ children }) {
  return (
    <BenefitsCardTitleWrapper>
        {children}
    </BenefitsCardTitleWrapper>
  )
}

// styles
const BenefitsCardTitleWrapper = styled(Title)`
    font-size: 18px;
    margin: 0 auto;
    text-align: center;
`
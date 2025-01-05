// imports
import styled from 'styled-components/native'
import Title from '../Title/Title'

// function
export default function AdvantagesCardTitle({ children }) {
  return (
    <AdvantagesCardTitleWrapper>
        {children}
    </AdvantagesCardTitleWrapper>
  )
}

// styles
const AdvantagesCardTitleWrapper = styled(Title)`
  color: #1F4598;
  width: 85%;
  height: 60px;
  margin: 21px 0 15px 0;
`
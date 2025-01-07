// imports
import styled from 'styled-components/native'

// function
export default function Description({ children, className }) {
  return (
    <DescriptionWrapper className={className}>
        {children}
    </DescriptionWrapper>
  )
}

// styles
const DescriptionWrapper = styled.Text`
  color: #4c4c4c;
  font-size: 18px;
  line-height: 24px;
`
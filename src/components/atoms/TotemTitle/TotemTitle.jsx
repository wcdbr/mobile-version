// imports
import styled from 'styled-components/native'

// function
export default function TotemTitle({ children }) {
  return (
    <TotemTitleWrapper>
        {children}
    </TotemTitleWrapper>
  )
}

// styles
const TotemTitleWrapper = styled.Text`
    color: #1F4598;
    width: 85px;
    font-size: 17px;
    align-self: center;
`
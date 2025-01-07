// imports
import styled from 'styled-components/native'

// function
export default function FooterWarn({ children }) {
  return (
    <FooterWarnWrapper>
        {children}
    </FooterWarnWrapper>
  )
}

// styles
const FooterWarnWrapper = styled.Text`
    border: 2px solid #42CEF6;
    text-transform: uppercase;
    color: #707070;
    font-size: 14px;
    padding: 15px;
`
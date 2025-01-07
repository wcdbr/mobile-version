// imports
import styled from 'styled-components/native'

// function
export default function FooterCopyright() {
  return (
    <FooterCopyrightWrapper>
        © 2019 Copyright Danone Baby
    </FooterCopyrightWrapper>
  )
}

// styles
const FooterCopyrightWrapper = styled.Text`
    text-align: center;
    color: #1F4598;
    font-size: 14px;
    margin: 10px 0;
`
// imports
import styled from 'styled-components/native'
import Title from '../Title/Title'

// function
export default function SectionTitle({ children }) {
  return (
    <SectionTitleWrapper>
        {children}
    </SectionTitleWrapper>
  )
}

// styles
const SectionTitleWrapper = styled(Title)`
    font-size: 24px;
    width: 95%;
    margin: 20px auto 0 auto;
    padding: 28px;

    text-align: center;

    border-top-width: 1px;
    border-top-color: #d8d8d8;
`
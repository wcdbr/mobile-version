// imports
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'
import Title from '../Title/Title'

const ScreenWidth = Dimensions.get('screen')

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
    margin: 0 auto;
    width: 90%;
    height: auto;
    padding: 30px 20px;
`
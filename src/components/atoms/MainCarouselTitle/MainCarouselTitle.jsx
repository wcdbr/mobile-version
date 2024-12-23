// imports
import styled from 'styled-components/native'
import Title from '../Title/Title'

// function
export default function MainCarouselTitle({ children }) {
  return (
    <MainCarouselTitleWrapper>
        {children}
    </MainCarouselTitleWrapper>
  )
}

// styles
const MainCarouselTitleWrapper = styled(Title)`
    font-size: 32px;
    line-height: 33.184px;

    position: absolute;
    z-index: 1;

    bottom: -2%;
    left: 7%;
`
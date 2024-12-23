// imports
import styled from 'styled-components/native'

// function
export default function CarouselText({ children }) {
  return (
    <CarouselTextWrapper>
        {children}
    </CarouselTextWrapper>
  )
}

// styles
const CarouselTextWrapper = styled.Text`
    width: 228px;
    height: 113px;
    flex-shrink: 0;
    color: #1F4598;
    font-family: Bariol;
    font-size: 32px;
    font-style: normal;
    font-weight: 400;
    line-height: 116.2%;
`
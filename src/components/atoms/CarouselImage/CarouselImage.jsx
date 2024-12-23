// imports
import styled from 'styled-components/native'

// function
export default function CarouselImage({ source }) {
  return (
    <CarouselImageWrapper source={source} resizeMode='cover'/>
  )
}

// styles
const CarouselImageWrapper = styled.Image`
    width: 95%;
    border: 1px solid red;
    height: 350px;
    flex-shrink: 0;
`
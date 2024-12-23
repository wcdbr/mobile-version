// imports
import styled from 'styled-components/native'

// function
export default function CarouselImage({ source, style }) {
  return (
    <CarouselImageWrapper 
      style={style}
      source={source} 
      resizeMode='cover' />
  )
}

// styles
const CarouselImageWrapper = styled.Image`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    
`
// imports
import styled from 'styled-components/native'

// function
export default function MainCarouselImage({ source, style }) {
  return (
    <MainCarouselImageWrapper 
      style={style}
      source={source} 
      resizeMode='cover' />
  )
}

// styles
const MainCarouselImageWrapper = styled.Image`
    width: 100%;
    height: 100%;
    flex-shrink: 0;
    
`
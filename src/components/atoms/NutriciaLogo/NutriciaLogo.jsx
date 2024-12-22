// imports
import styled from 'styled-components/native'
import NutriciaLogoImage from './assets/nutricia-logo-image.png'

// function
export default function NutriciaLogo({width, height}) {
  return (
    <NutriciaLogoWrapper 
      source={NutriciaLogoImage} 
      resizeMode='contain' 
      width={width}
      height={height}
      />
  )
}

// styles
const NutriciaLogoWrapper = styled.Image`
  width: ${({width}) => width};
  height: ${({height}) => height};
`
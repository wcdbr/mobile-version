// imports
import styled from 'styled-components/native'
import MilnutriLogoImage from './assets/milnutri-logo-image.png'

// function
export default function MilnutriLogo({width, height}) {
  return (
    <MilnutriLogoWrapper 
        source={MilnutriLogoImage} 
        width={width}
        height={height}
        resizeMode='contain'
    />
  )
}

// styles
const MilnutriLogoWrapper = styled.Image`
    width: ${({width}) => width};
    height: ${({height}) => height};
`
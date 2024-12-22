// imports
import styled from 'styled-components/native'
import { Image } from 'react-native'
import MenuImage from './assets/menu.png'

// function
export default function HeaderMenuButton({ onPress }) {
  return (
    <HeaderMenuButtonWrapper onPress={onPress}>
        <Image source={MenuImage}/>
    </HeaderMenuButtonWrapper>
  )
}

// styles
const HeaderMenuButtonWrapper = styled.TouchableOpacity`
    & Image{
        fill: blue;
        height: 22.6042px;
        width: 25.13px;
    }
`
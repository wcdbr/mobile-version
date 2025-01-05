// imports
import styled from 'styled-components/native'

// function
export default function TotemIcon({ iconSource }) {
  return (
    <TotemIconWrapper>
        <TotemIconImage source={iconSource} resizeMode='contain' />  
    </TotemIconWrapper>
  )
}

// styles
const TotemIconWrapper = styled.View`
    width: 83px;
    height: 83px;
    border-radius: 50px;
    background-color: #fff;
    justify-content: center;
    align-items: center;
`
const TotemIconImage = styled.Image`
    width: 35px;
    height: 36px;
`
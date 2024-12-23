// imports
import styled from 'styled-components/native'
import MilnutriLogo from '../../atoms/MilnutriLogo/MilnutriLogo'
import HeaderMenuButton from '../../atoms/HeaderMenuButton/HeaderMenuButton'

// function
export default function NutriciaHeaderBox() {
  return (
    <MilnutriBoxWrapper>
        <MilnutriLogo width={'110px'} height={'50px'}/>
        <HeaderMenuButton/>
    </MilnutriBoxWrapper>
  )
}

// styles
const MilnutriBoxWrapper = styled.View`
    justify-content: space-between;
    align-items: center;
    flex-direction: row;
    padding: 0 12px;
    align-items: center;
    height: 64px;
    width: 100%;
    background-color: #C0F1FF;
`
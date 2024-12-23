// imports
import styled from 'styled-components/native'
import NutriciaLogo from '../../atoms/NutriciaLogo/NutriciaLogo'

// function
export default function NutriciaHeaderBox() {
  return (
    <NutriciaBoxWrapper>
        <NutriciaLogo width={'110px'} height={'50px'}/>
    </NutriciaBoxWrapper>
  )
}

// styles
const NutriciaBoxWrapper = styled.View`
    justify-content: center;
    align-items: center;
    height: 95px;
    width: 100%;
    padding-top: 35px;
    background-color: #DDF7FF;
`
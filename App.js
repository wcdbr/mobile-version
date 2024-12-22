// imports
import styled from 'styled-components/native'
import NutriciaLogo from './src/components/atoms/NutriciaLogo/NutriciaLogo'
import MilnutriLogo from './src/components/atoms/MilnutriLogo/MilnutriLogo'
import HeaderMenuButton from './src/components/atoms/HeaderMenuButton/HeaderMenuButton'

// function
export default function App() {
  return (
    <AppWrapper>
      <NutriciaLogo width={'110px'} height={'45px'}/>
      <MilnutriLogo width={'120px'} height={'54px'}/>
      <HeaderMenuButton/>
    </AppWrapper>
  )
}

// styles
const AppWrapper = styled.View`
  color: #000;
`
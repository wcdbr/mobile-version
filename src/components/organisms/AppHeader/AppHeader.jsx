// imports
import styled from 'styled-components/native'
import NutriciaHeaderBox from '../../molecules/NutriciaHeaderBox/NutriciaHeaderBox'
import MilnutriHeaderBox from '../../molecules/MilnutriHeaderBox/MilnutriHeaderBox'

// function
export default function AppHeader() {
  return (
    <AppHeaderWrapper>
        <NutriciaHeaderBox/>
        <MilnutriHeaderBox/>
    </AppHeaderWrapper>
  )
}

// styles
const AppHeaderWrapper = styled.View`
    gap: 6px;
    margin-bottom: 25px;
`
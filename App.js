// imports
import styled from 'styled-components/native'
import AppHeader from './src/components/organisms/AppHeader/AppHeader'

// function
export default function App() {
  return (
    <AppWrapper>
      <AppHeader/>
    </AppWrapper>
  )
}

// styles
const AppWrapper = styled.View`
  color: #000;
`
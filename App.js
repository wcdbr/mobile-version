// imports
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

// config
const { width } = Dimensions.get('screen')

// function
export default function App() {
  return (
    <AppWrapper>
      {/* Outros conteúdos aqui */}
    </AppWrapper>
  )
}

// styles
const AppWrapper = styled.View`
  width: ${width}px;
`
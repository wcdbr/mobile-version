// imports
import styled from 'styled-components/native'

// function
export default function AppNavButton({ icon }) {
  return (
    <AppNavButtonWrapper>
        <AppNavButtonIconImage source={icon} resizeMode='contain' />
    </AppNavButtonWrapper>
  )
}

// styles
const AppNavButtonWrapper = styled.TouchableOpacity``
const AppNavButtonIconImage = styled.Image``
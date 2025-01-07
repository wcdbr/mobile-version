// imports
import React from 'react'
import { Linking, Alert } from 'react-native'
import styled from 'styled-components/native'

// function
export default function FooterLinkButton({ link, text }) {
  const handlePress = async () => {
    const url = link; // Usar a string diretamente
    
    try {
      const supported = await Linking.canOpenURL(url)
      if (supported) {
        await Linking.openURL(url);
      } else {
        Alert.alert('Erro', `Não é possível abrir o link: ${url}`)
      }
    } catch (error) {
      Alert.alert('Erro', 'Ocorreu um problema ao tentar abrir o link.')
    }
  }

  return (
    <FooterLinkButtonWrapper onPress={handlePress}>
      <FooterLinkText>{text}</FooterLinkText>
    </FooterLinkButtonWrapper>
  )
}

// styles
const FooterLinkButtonWrapper = styled.TouchableOpacity``

const FooterLinkText = styled.Text`
  color: #1F4598;
  font-size: 16px;
`;

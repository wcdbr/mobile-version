// imports
import styled from 'styled-components/native';
import { TouchableOpacity } from 'react-native'; // Importando TouchableOpacity

import DaniIconImage from '../../../../assets/images/dani.png';

// function
export default function DaniButton({ onPress }) {
  return (
    <DaniButtonWrapper onPress={onPress}>
      <DaniIcon source={DaniIconImage} resizeMode='contain' />
    </DaniButtonWrapper>
  );
}

// styles
const DaniButtonWrapper = styled(TouchableOpacity)`
  width: 53px;
  height: 53px;
  justify-content: center;
  align-items: center;

  position: absolute;
  right: 16px;
  bottom: 70px;
  
  z-index: 2;
`;

const DaniIcon = styled.Image`
  width: 66px;
  height: 66px;
  border-radius: 53px;
  border: 6px solid #1F4598;

  position: absolute;
  z-index: 1;
`;

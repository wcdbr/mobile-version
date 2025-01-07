// imports
import styled from 'styled-components/native';
import { useState } from 'react';
import { logger } from 'react-native-logs';

import DaniButton from '../../atoms/DaniButton/DaniButton';
import DaniHelpButton from '../../atoms/DaniHelpButton/DaniHelpButton';

// function
export default function DaniChat() {
  const [isDaniOpen, setDaniOpen] = useState(false);
    
  function handleDaniClick() {
    setDaniOpen((prev) => !prev);
  }
  
  return (
    <DaniChatWrapper>
      <DaniButtonWrapper isOpen={isDaniOpen}>
        <DaniButton onPress={handleDaniClick} />
      </DaniButtonWrapper>
      {isDaniOpen && <DaniHelpButton />}
    </DaniChatWrapper>
  );
}

// styles
const DaniChatWrapper = styled.View`
  position: absolute;
  bottom: 5px;
  right: 0;
`;

const DaniButtonWrapper = styled.View`
  align-items: center;
  position: absolute;
  bottom: 0;
  right: ${(props) => (props.isOpen ? '225px' : '0')};
  transition: right 0.3s ease;
`;

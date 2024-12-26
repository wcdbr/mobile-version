// imports
import styled from 'styled-components/native';
import ArrowImage from './assets/arrow.png';

// function
export default function CarouselArrowButton({ direction, onPress }) {
  return (
    <ArrowButton onPress={onPress} style={direction === "right" ? { transform: [{ rotate: '180deg' }] } : {}}>
      <ArrowIcon source={ArrowImage} resizeMode='contain' />
    </ArrowButton>
  );
}

// styles
const ArrowIcon = styled.Image`
  width: 20px;
  height: 20px;
`;

const ArrowButton = styled.TouchableOpacity`
  padding: 10px;
  justify-content: center;
  align-items: center;
`;

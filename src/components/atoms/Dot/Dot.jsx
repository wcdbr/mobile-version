// imports
import styled from 'styled-components/native';

// function
export default function Dot({ active }) {
  return <DotWrapper active={active} />;
}

// 
const DotWrapper = styled.View`
  width: 16px;
  height: 16px;
  border-radius: 100%;
  margin: 0 5px;
  background-color: ${({ active }) => (active ? '#02B1EB' : '#E4E4E4')};
`;

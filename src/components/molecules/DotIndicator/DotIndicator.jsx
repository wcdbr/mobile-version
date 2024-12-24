// imports
import React from 'react';
import styled from 'styled-components/native';
import Dot from '../../atoms/Dot/Dot';

// function
export default function DotIndicator({ data, currentIndex }) {
  return (
    <DotIndicatorWrapper>
      {data.map((_, index) => (
        <Dot key={index} active={index === currentIndex} />
      ))}
    </DotIndicatorWrapper>
  );
}

// styles
const DotIndicatorWrapper = styled.View`
  flex-direction: row;
  justify-content: center;
  margin-top: 10px;
`;

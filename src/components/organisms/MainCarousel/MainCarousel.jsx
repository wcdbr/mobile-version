// imports
import React, { useState, useRef } from 'react';
import styled from 'styled-components/native';
import { FlatList, Dimensions } from 'react-native';
import { MainCarouselData } from '../../../data/MainCarouselData';
import MainCarouselItem from '../../molecules/MainCarouselItem/MainCarouselItem';
import DotIndicator from '../../molecules/DotIndicator/DotIndicator';

// function
const ScreenWidth = Dimensions.get('window').width;

export default function MainCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0); 
  const flatListRef = useRef(null);

  // Atualiza o índice atual durante o scroll
  function handleScroll(event) {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / ScreenWidth);
    setCurrentIndex(index);
  }

  return (
    <MainCarouselWrapper>
      {/* Carrossel */}
      <FlatList
        data={MainCarouselData}
        renderItem={({ item, index }) => <MainCarouselItem item={item} index={index} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        snapToAlignment="center"
        onScroll={handleScroll}
        initialScrollIndex={0}
        getItemLayout={(data, index) => ({
          length: ScreenWidth,
          offset: ScreenWidth * index,
          index,
        })}
        contentContainerStyle={{
          paddingHorizontal: (ScreenWidth - ScreenWidth * 0.97) / 2,
        }}
        ref={flatListRef}
      />

      {/* Indicador de Bolinhas */}
      <DotIndicator data={MainCarouselData} currentIndex={currentIndex} />
    </MainCarouselWrapper>
  );
}

// styles
const MainCarouselWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

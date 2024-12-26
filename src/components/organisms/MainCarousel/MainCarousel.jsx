// imports
import styled from 'styled-components/native';
import React, { useState, useRef, useEffect } from 'react';
import { FlatList, Dimensions } from 'react-native';

import { MainCarouselData } from '../../../data/MainCarouselData';
import MainCarouselItem from '../../molecules/MainCarouselItem/MainCarouselItem';
import DotIndicator from '../../molecules/DotIndicator/DotIndicator';
import CarouselArrowButton from '../../atoms/CarouselArrowButton/CarouselArrowButton';

// function
const ScreenWidth = Dimensions.get('window').width;

export default function MainCarousel() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const flatListRef = useRef(null);

  // updates the index while scrolling
  function handleScroll(event) {
    const scrollPosition = event.nativeEvent.contentOffset.x;
    const index = Math.round(scrollPosition / ScreenWidth);
    setCurrentIndex(index);
    
  }

  // scroll carousel to left
  function scrollLeft() {
    if (currentIndex > 0) {
      const newIndex = currentIndex - 1;
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
      setCurrentIndex(newIndex);
    }
  }

  // scroll carousel to right
  function scrollRight() {
    if (currentIndex < MainCarouselData.length - 1) {
      const newIndex = currentIndex + 1;
      flatListRef.current.scrollToIndex({ index: newIndex, animated: true });
      setCurrentIndex(newIndex);
    } else {
      // if on the last item, return to first
      flatListRef.current.scrollToIndex({ index: 0, animated: true });
      setCurrentIndex(0);
    }
  }

  // auto scroll effect
  useEffect(() => {
    const interval = setInterval(() => {
      scrollRight();
    }, 6000); // change after 6 seconds

    return () => clearInterval(interval);
  }, [currentIndex]);

  return (
    <MainCarouselWrapper>
      {/* carousel */}
      <FlatList
        data={MainCarouselData}
        renderItem={({ item, index }) => <MainCarouselItem item={item} index={index} />}
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        pagingEnabled={true}
        onScroll={handleScroll}
        snapToAlignment="center"
        initialScrollIndex={1}
        getItemLayout={(data, index) => ({
          length: ScreenWidth,
          offset: ScreenWidth * index -13,
          index,
        })}
        contentContainerStyle={{
          paddingHorizontal: (ScreenWidth - ScreenWidth * 0.97) / 2,
          justifyContent: 'center',
          alignItems: 'center',
        }}
        ref={flatListRef}
      />

      <CarouselControlsWrapper>
        {/* left arrow */}
        <CarouselArrowButtonWrapper onPress={scrollLeft}>
          <CarouselArrowButton direction="left" onPress={scrollLeft} />
        </CarouselArrowButtonWrapper>

        {/* indicators */}
        <DotIndicator data={MainCarouselData} currentIndex={currentIndex} />

        {/* right arrow */}
        <CarouselArrowButtonWrapper onPress={scrollRight}>
          <CarouselArrowButton direction="right" onPress={scrollRight} />
        </CarouselArrowButtonWrapper>
      </CarouselControlsWrapper>
    </MainCarouselWrapper>
  );
}

// styles
const MainCarouselWrapper = styled.View`
  justify-content: center;
  align-items: center;
  width: 100%;
`;

const CarouselControlsWrapper = styled.View`
  width: 90%;
  margin-top: 20px;
  justify-content: space-between;
  flex-direction: row;
`;

const CarouselArrowButtonWrapper = styled.TouchableOpacity``;

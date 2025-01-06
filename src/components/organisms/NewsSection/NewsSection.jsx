// imports
import React from 'react';
import styled from 'styled-components/native';

import NewsCard from '../../molecules/NewsCard/NewsCard';
import { NewsData } from '../../../data/NewsData';

// function
export default function NewsSection() {
  return (
    <FlatListWrapper
      data={NewsData}
      keyExtractor={(item, index) => index.toString()}
      renderItem={({ item }) => (
        <NewsCardWrapper>
            <NewsCard
            image={item.image}
            category={item.category}
            title={item.title}
            description={item.description}
            />
        </NewsCardWrapper>
      )}
      horizontal
      showsHorizontalScrollIndicator={false}
    />
  );
}

// styles
const FlatListWrapper = styled.FlatList``;

const NewsCardWrapper = styled.View`
    margin: 0 9px;
`
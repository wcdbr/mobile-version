// imports
import styled from 'styled-components/native'

import NewsCardImage from '../../atoms/NewsCardImage/NewsCardImage'
import NewsCardCategoryFlag from '../../atoms/NewsCardCategoryFlag/NewsCardCategoryFlag'
import NewsCardTitle from '../../atoms/NewsCardTitle/NewsCardTitle';
import NewsCardDescription from '../../atoms/NewsCardDescription/NewsCardDescription';

// function
export default function NewsCard({ image, category, title, description }) {
  return (
    <NewsCardWrapper>
        <NewsCardImage cardImage={image} />

        <NewsCardInfo>
            <NewsCardCategoryFlag>
                {category}
            </NewsCardCategoryFlag>
            <NewsCardTitle>
                {title}
            </NewsCardTitle>
            <NewsCardDescription>
                {description}
            </NewsCardDescription>
        </NewsCardInfo>
    </NewsCardWrapper>
  )
}

// styles
const NewsCardWrapper = styled.View`
    flex-direction: row;
    min-height: 378px;
    max-height: 378px;
    border: 1px solid lightgray;
    width: 358px;
    border-radius: 5px;
`
const NewsCardInfo = styled.View`
    justify-content: space-between;
    padding: 25px 10px 10px 25px;

    background-color: #DDF7FF;
    border-radius: 0 5px 5px 0;
`
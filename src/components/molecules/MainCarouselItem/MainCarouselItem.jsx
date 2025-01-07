// imports
import styled from 'styled-components/native'
import { Dimensions } from 'react-native'

import Card from '../../atoms/Card/Card'
import CarouselImage from '../../atoms/MainCarouselImage/MainCarouselImage'
import Title from '../../atoms/Title/Title'

// function
const ScreenWidth = Dimensions.get('window').width
const Screen97Width = ScreenWidth * 0.97

export default function MainCarouselItem({ item, index }) {
  return (
    <CustomCard>
        <CustomImage source={item.image}/>
        <CustomTitle>
            {item.title}
        </CustomTitle>
    </CustomCard>
  )
}

// styles:
const CustomCard = styled(Card)`
  justify-content: center;
  align-items: center;

  justify-self: center;
  align-self: center;
  position: relative;
  min-width: ${Screen97Width}px;
`
const CustomImage = styled(CarouselImage)`
  position: absolute;
  z-index: 1;
`

const CustomTitle = styled(Title)`
  position: absolute;
  z-index: 2;
  bottom: 35px;
  left: 7%;
`
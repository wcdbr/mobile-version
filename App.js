// imports
import styled from 'styled-components/native'
import { useFonts } from 'expo-font';

import AppLoadingScreen from './src/screens/AppLoading'

import CarouselText from './src/components/atoms/CarouselText/CarouselText';
import CarouselImage from './src/components/atoms/CarouselImage/CarouselImage';
import TestImg from './assets/images/FirstCarousel/FirstCarousel-1.png'

import AppHeader from './src/components/organisms/AppHeader/AppHeader'

// function
export default function App() {
  // load fonts
  const [fontsLoaded] = useFonts({
    'BariolBoldItalic': require('./assets/fonts/bariol_bold_italic-webfont.ttf'),
    'BariolBold': require('./assets/fonts/bariol_bold-webfont.ttf'),
    'BariolLightItalic': require('./assets/fonts/bariol_light_italic-webfont.ttf'),
    'BariolLight': require('./assets/fonts/bariol_light-webfont.ttf'),
    'BariolRegularItalic': require('./assets/fonts/bariol_regular_italic-webfont.ttf'),
    'BariolRegular': require('./assets/fonts/bariol_regular-webfont.ttf'),
    'BariolThinItalic': require('./assets/fonts/bariol_thin_italic-webfont.ttf'),
    'BariolThin': require('./assets/fonts/bariol_thin-webfont.ttf')
  });

  // if fonts are not loaded, shows the loading app screen
  if (!fontsLoaded) {
    return <AppLoadingScreen/>;
  }
  
  return (
    <AppWrapper>
      <AppHeader/>
      <CarouselImage source={TestImg}/>
      <CarouselText>
        Conheça nossa família de produtos Milnutri
      </CarouselText>
    </AppWrapper>
  )
}

// styles
const AppWrapper = styled.View`
  flex: 1;
  color: #000;
`
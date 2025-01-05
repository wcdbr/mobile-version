// imports
import styled from 'styled-components/native'
import { useFonts } from 'expo-font';
  /* screens */
  import AppLoadingScreen from './src/screens/AppLoading'

  // testando coisas
  import AppHeader from './src/components/organisms/AppHeader/AppHeader'
  import AdvantagesCard from './src/components/organisms/AdvantagesSection/AdvantagesSection';

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
    return <AppLoadingScreen />;
  }
  
  // else, shows the home screen
  return (
    <AppWrapper>
      <AppHeader/>
      <AdvantagesCard/>
    </AppWrapper>
  )
}

// styles
const AppWrapper = styled.View`
  color: #000;
`
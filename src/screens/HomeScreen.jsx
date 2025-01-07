// imports
import styled from 'styled-components/native'

    // screen organisms
    import AppHeader from '../../src/components/organisms/AppHeader/AppHeader'
    import MainCarousel from '../../src/components/organisms/MainCarousel/MainCarousel'
    import AdvantagesSection from '../../src/components/organisms/AdvantagesSection/AdvantagesSection'
    import NewsSection from '../../src/components/organisms/NewsSection/NewsSection'
    import TestimonialsSection from '../../src/components/organisms/TestimonialsSection/TestimonialsSection'
    import ProductsCarousel from '../../src/components/organisms/ProductsCarousel/ProductsCarousel'
    import AppFooter from '../components/organisms/AppFooter/AppFooter'
    import DaniChat from '../components/organisms/DaniChat/DaniChat'
    import AppNavigation from '../components/organisms/AppNavigation/AppNavigation'


// function
export default function HomeScreen() {
  return (
    <HomeScreenWrapper>
      {/* sections */}
      <HomeScreenScroll>
          <AppHeader/>
          <MainCarousel/>
          <AdvantagesSection/>
          <NewsSection/>
          <TestimonialsSection/>
          <ProductsCarousel/>
          <AppFooter/>
      </HomeScreenScroll>

      {/* floating elements */}
      <DaniChat/>
      <AppNavigation/>
      
    </HomeScreenWrapper>
  )
}

// styles
const HomeScreenWrapper = styled.View``
const HomeScreenScroll = styled.ScrollView``
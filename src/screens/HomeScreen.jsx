// imports
import styled from 'styled-components/native'

    // screen organisms
    import AppHeader from '../../src/components/organisms/AppHeader/AppHeader'
    import MainCarousel from '../../src/components/organisms/MainCarousel/MainCarousel'
    import AdvantagesSection from '../../src/components/organisms/AdvantagesSection/AdvantagesSection'
    import NewsSection from '../../src/components/organisms/NewsSection/NewsSection'
    import TestimonialsSection from '../../src/components/organisms/TestimonialsSection/TestimonialsSection'
    import ProductsCarousel from '../../src/components/organisms/ProductsCarousel/ProductsCarousel'

// function
export default function HomeScreen() {
  return (
    <HomeScreenWrapper>
        <AppHeader/>
        <MainCarousel/>
        <AdvantagesSection/>
        <NewsSection/>
        <TestimonialsSection/>
        <ProductsCarousel/>
    </HomeScreenWrapper>
  )
}

// styles
const HomeScreenWrapper = styled.ScrollView`
    
`
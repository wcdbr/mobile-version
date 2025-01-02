// imports
import styled from 'styled-components/native'
import Title from '../Title/Title'

// function
export default function ProductsCarouselTitle({ children }) {
  return (
    <ProductsCarouselTitleWrapper>
        {children}
    </ProductsCarouselTitleWrapper>
  )
}

// styles
const ProductsCarouselTitleWrapper = styled(Title)`
    margin: 0 auto;
    width: 90%;
    height: auto;
    padding: 30px 20px;
`
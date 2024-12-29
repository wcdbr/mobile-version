// imports
import styled from 'styled-components/native';
import { Dimensions } from 'react-native';
import ProductIcon from '../../atoms/ProductIcon/ProductIcon';

const ScreenWidth = Dimensions.get('window').width;

// function
export default function ProductsCarouselCard({ item, index }) {
  return (
    <ProductsCarouselCardWrapper screenWidth={ScreenWidth}>
      <CardRow>
        <ProductIcon product={item.icon1} />
        <ProductIcon product={item.icon2} />
      </CardRow>

      <CardRow>
        <ProductIcon product={item.icon3} />
        <ProductIcon product={item.icon4} />
      </CardRow>
    </ProductsCarouselCardWrapper>
  );
}

// styles
const ProductsCarouselCardWrapper = styled.View`
  width: ${({ screenWidth }) => screenWidth}px;
  height: 266px;
  gap: 65px;
  margin: 0 auto;
`;

const CardRow = styled.View`
  justify-content: space-around;
  flex-direction: row;
`;

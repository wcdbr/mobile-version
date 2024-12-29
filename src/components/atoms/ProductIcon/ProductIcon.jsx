// Imports
import styled from 'styled-components/native';

import NutriDrinkLogo from './assets/nutridrink.png';
import FortFitLogo from './assets/fortfit.png';
import KetoCalLogo from './assets/ketocal.png';
import AplvLogo from './assets/aplv.png';

// Function
export default function ProductIcon({ product }) {
    // products & images map
    const productImages = {
        nutridrink: NutriDrinkLogo,
        fortfit: FortFitLogo,
        ketocal: KetoCalLogo,
        aplv: AplvLogo,
    };

    // product validation
    if (!Object.keys(productImages).includes(product)) {
        console.error('Error! Invalid option...');
        return null;
    }

    // capitalize or format text
    const formatText = (text) => {
        if (!text) return '';
        return product === 'aplv' ? text.toUpperCase() : text.charAt(0).toUpperCase() + text.slice(1);
    };

    return (
        <ProductIconWrapper>
            {/* image & border */}
            <ProductImageWrapper>
                <ProductIconImage resizeMode="contain" source={productImages[product]} />
            </ProductImageWrapper>

            {/* text below */}
            <ProductText>{formatText(product)}</ProductText>
        </ProductIconWrapper>
    );
}

// styles
const ProductIconWrapper = styled.View`
    width: 83px;
    height: 83px;
    align-items: center;
`;

const ProductImageWrapper = styled.View`
    align-items: center;
    justify-content: center;
    width: 83px;
    height: 83px;
    border: 5px solid rgba(2, 177, 235, 0.40);
    padding: 40px;
    border-radius: 100px;
`;

const ProductIconImage = styled.Image`
    width: 70px;
`;

const ProductText = styled.Text`
    font-family: Bariol;
    color: #1F4598;
    font-size: 18px;
    margin-top: 6px;
`;
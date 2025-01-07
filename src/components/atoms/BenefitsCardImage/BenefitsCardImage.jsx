// imports
import styled from "styled-components/native"

// component function
export default function BenefitsCardImage({ imagePath }){
    return(
        <BenefitsCardImageWrapper 
            source={imagePath} 
            resizeMode="contain"
        />
    )
}

// styles
const BenefitsCardImageWrapper = styled.Image`
    width: 82.012px;
    height: 82.012px;
    border-radius: 900px;
    margin: 0 auto;
`
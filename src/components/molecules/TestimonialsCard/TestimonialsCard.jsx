// imports
import styled from 'styled-components/native'
import { ImageBackground } from 'react-native'

import BackgroundImage from '../../../../assets/images/SecondaryCards/Benefits/background.png'

import BenefitsCardImage from '../../atoms/BenefitsCardImage/BenefitsCardImage'
import BenefitsCardHeaderTitle from '../../atoms/BenefitsCardHeaderTitle/BenefitsCardHeaderTitle'
import BenefitsCardHeaderDescription from '../../atoms/BenefitsCardHeaderDescription/BenefitsCardHeaderDescription'
import BenefitsCardDescription from '../../atoms/BenefitsCardDescription/BenefitsCardDescription'

// function
export default function TestimonialsCard({ image,  title, subtitle, description}) {
  return (
    <TestimonialsCardWrapper source={BackgroundImage}>
        {/* header */}
        <CardHeader>
            <ImageWrapper>
                <BenefitsCardImage imagePath={image}/>
            </ImageWrapper>

            <BenefitsCardHeaderTitle>
                {title}
            </BenefitsCardHeaderTitle>
            <BenefitsCardHeaderDescription>
                {subtitle}
            </BenefitsCardHeaderDescription>
        </CardHeader>

        {/* description */}
        <BenefitsCardDescription>
            {description}
        </BenefitsCardDescription>
    </TestimonialsCardWrapper>
  );
}

// styles
const TestimonialsCardWrapper = styled(ImageBackground)`
  width: 326px;
  height: 349px;
  border-radius: 5px;
  margin: 0 10px;

  align-items: center;
  justify-content: center;
`;

const CardHeader = styled.View`
    gap: 2px;
    margin-bottom: 15px;
`
const ImageWrapper = styled.View`
    margin-top: -70px;
    margin-bottom: 10px;
`

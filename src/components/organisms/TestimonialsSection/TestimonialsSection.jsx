// imports
import styled from 'styled-components/native';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

import { BenefitsCardData } from '../../../data/BenefitsCardData';
import BenefitsCard from '../../molecules/BenefitsCard/BenefitsCard';

// function
export default function BenefitsSection() {
  return (
    <>
      <SectionTitle>Lorem Ipsum sit amet</SectionTitle>
      <BenefitsSectionWrapper>
        <FlatListWrapper
          data={BenefitsCardData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <BenefitsCardWrapper>
              <BenefitsCard
                image={item.image}
                title={item.title}
                subtitle={item.subtitle}
                description={item.description}
              />
            </BenefitsCardWrapper>
          )}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      </BenefitsSectionWrapper>
    </>
  );
}

// styles
const BenefitsSectionWrapper = styled.View`
    padding-top: 40px;
`;

const FlatListWrapper = styled.FlatList`
  flex-grow: 0;
  overflow: visible;
`;

const BenefitsCardWrapper = styled.View`
  overflow: visible;
`;

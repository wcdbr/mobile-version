// imports
import styled from 'styled-components/native';
import SectionTitle from '../../atoms/SectionTitle/SectionTitle';

import { TestimonialsCardsData } from '../../../data/TestimonialsCardsData';
import TestimonialsCard from '../../molecules/TestimonialsCard/TestimonialsCard';

// function
export default function TestimonialsSection() {
  return (
    <>
      <SectionTitle>Lorem Ipsum sit amet</SectionTitle>
      <TestimonialsSectionWrapper>
        <FlatListWrapper
          data={TestimonialsCardsData}
          keyExtractor={(item, index) => index.toString()}
          renderItem={({ item }) => (
            <BenefitsCardWrapper>
              <TestimonialsCard
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
      </TestimonialsSectionWrapper>
    </>
  );
}

// styles
const TestimonialsSectionWrapper = styled.View`
    padding-top: 40px;
    margin-bottom: 20px;
`;

const FlatListWrapper = styled.FlatList`
  flex-grow: 0;
  overflow: visible;
`;

const BenefitsCardWrapper = styled.View`
  overflow: visible;
`;

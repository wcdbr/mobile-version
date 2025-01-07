// imports
import styled from 'styled-components/native'

import AdvantagesCard from '../../atoms/AdvantagesCard/AdvantagesCard'
import AdvantagesCardTitle from '../../atoms/AdvantagesCardTitle/AdvantagesCardTitle'
import CardImage from '../../../../assets/images/SecondaryCards/advantages.png'

import AdvantageButtons from '../../molecules/AdvantageButtons/AdvantageButtons'

// function
export default function AdvantagesSection() {
  return (
    <AdvantagesSectionWrapper>
        <AdvantagesCard cardImagePath={CardImage}>
            <AdvantagesCardTitle>
                Conheça as vantagens do Clubinho Milnutri
            </AdvantagesCardTitle>

            {/* totems */}
            <AdvantageButtons/>

        </AdvantagesCard>
    </AdvantagesSectionWrapper>
  )
}

// styles
const AdvantagesSectionWrapper = styled.View`
  margin-bottom: 110px;
`
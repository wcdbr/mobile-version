// imports
import styled from 'styled-components/native'

import AdvantageTotem from '../AdvantageTotem/AdvantageTotem'
import { AdvantageTotemsData } from '../../../data/AdvantageTotemsData'

// function
export default function AdvantageButtons() {
  return (
    <AdvantageButtonsWrapper>
        {AdvantageTotemsData.map((totem, index) => (
          <AdvantageTotem 
            key={index} 
            iconSource={totem.image} 
            title={totem.title} 
          />
        ))}
    </AdvantageButtonsWrapper>
  )
}

// styles
const AdvantageButtonsWrapper = styled.View`
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
`